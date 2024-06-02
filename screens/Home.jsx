import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StatusBar, Dimensions} from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { db, auth } from "../config/firebase";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { height } = Dimensions.get('window');

  const navigation = useNavigation();
  const [levels, setLevels] = useState([]);
  const [completedLevels, setCompletedLevels] = useState([]);

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
        setCompletedLevels(userData.completedLevels || []);
      } else {
        await setDoc(userDoc, { completedLevels: [] });
      }
    }
  };

  const handleCompleteLevel = async (levelId) => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = doc(db, "userProgress", user.uid);
      await updateDoc(userDoc, {
        completedLevels: arrayUnion(levelId)
      });
      setCompletedLevels([...completedLevels, levelId]);
    }
  };

  useEffect(() => {
    getLevels();
    fetchUserProgress();
  }, []);

  const navigateToLevelDetail = (levelId) => {
    switch (levelId) {
      case 'level_1':
        navigation.navigate('LevelOneDetail', { onComplete: () => handleCompleteLevel(levelId) });
        break;
      case 'level_2':
        navigation.navigate('LevelTwoDetail', { onComplete: () => handleCompleteLevel(levelId) });
        break;
      // Voeg andere cases toe voor andere levels
      default:
        break;
    }
  };

  return (
    <View className="flex-1 bg-gray-100">

      <StatusBar/>
    
        <View className="flex-row justify-between items-center bg-white pt-20 px-5 pb-5">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-gray-300 rounded-full mr-3" />
            <View className="flex-col">

              <Text tyle={{ fontFamily: 'Montserrat_400Regular'}}
              className="text-base text-gray-800">
                Goeiemorgen,
              </Text>

              <Text tyle={{ fontFamily: 'Montserrat_600SemiBold'}}
              className="text-xl font-bold text-gray-800">
                {auth.currentUser.displayName}
              </Text>

            </View>
          </View>

          <View className="flex-row items-center">
            <View className="flex-row items-center ml-3">
              <Ionicons name="cash-outline" size={24} color="black" />
              <Text className="text-xl ml-1">5</Text>
            </View>
            <View className="flex-row items-center ml-3">
              <Ionicons name="flame-outline" size={24} color="black" />
              <Text className="text-xl ml-1">3</Text>
            </View>
          </View>

        </View>

        <View className="">
        <TouchableOpacity className="mt-5 py-2 mx-8 bg-white rounded-lg items-center">
          <Text className="text-xl font-bold text-gray-800">Gedeelte 1</Text>
          <Text className="text-lg text-gray-800">Beginner</Text>
        </TouchableOpacity>
        </View>

    <View className="mt-0 bg-gray-100 rounded-lg h-full px-10">
          <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: height + 620 }} showsVerticalScrollIndicator={false}>
          <ImageBackground 
          source={require('../assets/images/levelpath.png')} // vervang dit door je afbeelding
          style={{ width: '100%', height: '100%' }}
          imageStyle={{ resizeMode: 'cover' }}
        >
            {levels.map((level, index) => (
              <React.Fragment key={index}>
                <View
                  className={`h-28 w-1/4 my-4 ${index % 2 === 0 ? "self-start" : "self-end"}`}
                >
                  <TouchableOpacity 
                    className={`items-center w-20 h-20 bg-light-blue justify-center items-center rounded-full shadow-sm ${
                      completedLevels.includes(level.id) ? 'bg-light-blue' : 'bg-gray-300'
                    }`}
                    onPress={() => navigateToLevelDetail(level.id)}
                  >
                    <Text className="text-base font-bold text-gray-800">{level.title}</Text>
                    <Ionicons name={level.icon} size={24} color="black" />
                  </TouchableOpacity>
                </View>
              
              </React.Fragment>
            ))}
            </ImageBackground>
          </ScrollView>
      </View>
  </View>
  );
}
