import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StatusBar, Dimensions, Image } from "react-native";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

export default function Home() {
    const { height } = Dimensions.get('window');
    const route = useRoute();

    const navigation = useNavigation();
    const [levels, setLevels] = useState([]);
    const [completedLevels, setCompletedLevels] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const getLevels = async () => {
        const levelsCollection = collection(db, "levels");
        const levelsSnapshot = await getDocs(levelsCollection);
        const levelsData = levelsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setLevels(levelsData);
    };

    const fetchUserProgress = async () => {
        const user = auth.currentUser;
        if (user) {
            const userDoc = doc(db, "userProgress", user.uid);
            const userSnapshot = await getDoc(userDoc);
            if (userSnapshot.exists()) {
                const userData = userSnapshot.data();
                let completedLevels = userData.completedLevels || [];
    
                // Voeg level_1 toe aan de voltooid levels als deze nog niet voltooid is
                if (!completedLevels.includes('level_1')) {
                    completedLevels = ['level_1', ...completedLevels];
                    await setDoc(userDoc, { completedLevels });
                }
    
                setCompletedLevels(completedLevels);
            } else {
                // Als er geen gebruikersgegevens zijn, maak dan een nieuw document aan met level_1 als voltooid
                const completedLevels = ['level_1'];
                await setDoc(userDoc, { completedLevels });
                setCompletedLevels(completedLevels);
            }
        }
    };    

    useFocusEffect(
        useCallback(() => {
            getLevels();
            fetchUserProgress();
        }, [])
    );

    const navigateToLevelDetail = (levelId) => {
        switch (levelId) {
            case 'level_1':
                navigation.navigate('LevelOneDetail');
                break;
            case 'level_2':
                navigation.navigate('LevelTwoDetail');
                break;
            // Voeg hier meer cases toe voor andere levels
            default:
                console.log(`No detail page defined for level ${levelId}`);
        }
    };

    const getLevelIcon = (level) => {
        if (completedLevels.includes(level.id)) {
            return { uri: level.doneIcon }; // Algemeen icoon voor voltooid level
        }
        const nextLevelId = levels[completedLevels.length]?.id;
        if (level.id === nextLevelId) {
            return { uri: level.nextIcon }; // Uniek icoon voor volgend level
        }
        return { uri: level.lockedIcon }; // Uniek icoon voor vergrendeld level
    };

    const renderLevels = () => {
        const renderRow = (levelIds) => (
            <View className="flex flex-row justify-center mb-5" key={`row-${levelIds.map(level => level.id).join('-')}`}>
                {levelIds.reverse().map((level, index) => (
                    <TouchableOpacity
                        key={level.id}
                        className="w-1/2 flex items-center pt-2"
                        onPress={() => navigateToLevelDetail(level.id)}
                    >
                        <View className="shadow-lg">
                            <Image source={getLevelIcon(level)} className="w-[110] h-[110] mb-0" />
                            <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                            className="text-center text-black-blue">{level.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );

        const rows = [];
        for (let i = 0; i < levels.length; i += 3) {
            const rowItems = levels.slice(i, i + 3);
            if (rowItems.length === 3) {
                rows.push(renderRow([rowItems[0]]));
                rows.push(renderRow([rowItems[1], rowItems[2]]));
            } else {
                rows.push(renderRow(rowItems));
            }
        }

        return (
            <View className="flex flex-col items-center">
                {rows}
            </View>
        );
    };

    return (
        <View className="flex-1 bg-gray-100">
            <StatusBar />
            <View className="flex-row justify-between items-center bg-white pt-20 px-5 pb-5">
                <View className="flex-row items-center">
                    <Image source={require('./../assets/icons/emma-pf.png')} className="w-12 h-12 mr-4" />
                    <View className="flex-col">
                        <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="text-base text-gray-800 -mb-1">
                            Goeiemorgen,
                        </Text>
                        <Text style={{ fontFamily: 'Montserrat_600SemiBold' }} className="text-xl font-bold text-gray-800">
                            {auth.currentUser.displayName}
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center">
                    <View className="flex-row items-center ml-3">
                        <Image source={require('./../assets/icons/punten-icon.png')} className="w-8 h-8" />
                        <Text className="text-xl ml-1" style={{ fontFamily: 'Montserrat_500Medium' }}>5</Text>
                    </View>
                    <View className="flex-row items-center ml-3">
                        <Image source={require('./../assets/icons/streak-icon.png')} className="w-8 h-8" />
                        <Text className="text-xl ml-1" style={{ fontFamily: 'Montserrat_500Medium' }}>3</Text>
                    </View>
                </View>
            </View>
            <View className="mt-0 bg-gray-100 rounded-lg h-full">
                <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: height + 1790 }} showsVerticalScrollIndicator={false}>
                    <ImageBackground
                        source={require('../assets/images/bg-test3.png')}
                        style={{ width: Dimensions.get('window').width, height: '100%' }}
                        imageStyle={{ resizeMode: 'cover' }}
                    >
                        <View className="mt-5">
                        {/* Levels */}
                        {renderLevels()}
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>
        </View>
    );
}
