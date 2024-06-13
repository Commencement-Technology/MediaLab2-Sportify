import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StatusBar, Dimensions, Image, Modal } from "react-native";
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { db, auth } from "../config/firebase";
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

import doneIcon from '../assets/icons/done.png';
import level2Icon from '../assets/icons/touwtje-springen.png';
import level3Icon from '../assets/icons/icon-fietsen.png';
import level4Icon from '../assets/icons/icon-fitness.png';
import level5Icon from '../assets/icons/icon-hardlopen.png';
import level6Icon from '../assets/icons/icon-volleybal.png';
import level7Icon from '../assets/icons/icon-voetbal.png';

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

    const handleModalOpen = () => {
      setIsModalVisible(true);
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
            setCompletedLevels(prev => [...prev, levelId]);
        }
    };

    useFocusEffect(
        useCallback(() => {
            getLevels();
            fetchUserProgress();
        }, [])
    );

    useEffect(() => {
      console.log("Route parameters:", route.params);
      const { handleModalOpen } = route.params || {};
      if (handleModalOpen) {
          handleModalOpen();
      }
    }, [route.params]);
  

  const getLevelStatus = (levelId, index) => {
    if (completedLevels.includes(levelId)) {
      return 'completed';
    } else if (index === completedLevels.length) {
      return 'next';
    } else {
      return 'locked';
    }
  };

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

  const levelIcons = {
    level_1: level2Icon,
    level_2: level2Icon,
    level_3: level3Icon,
    level_4: level4Icon,
    level_5: level5Icon,
    level_6: level6Icon,
    level_7: level7Icon,
    // Voeg meer levels en iconen toe zoals nodig
  };

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar />
      <View className="flex-row justify-between items-center bg-white pt-20 px-5 pb-5">
        <View className="flex-row items-center">
          <View className="w-12 h-12 bg-gray-300 rounded-full mr-3" />
          <View className="flex-col">
            <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="text-base text-gray-800">
              Goeiemorgen,
            </Text>
            <Text style={{ fontFamily: 'Montserrat_600SemiBold' }} className="text-xl font-bold text-gray-800">
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

      <View className="mt-0 bg-gray-100 rounded-lg h-full px-10">
        <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: height + 650 }} showsVerticalScrollIndicator={false}>
          <ImageBackground 
            source={require('../assets/images/levelpath.png')} 
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ resizeMode: 'cover' }}
          >
            {levels.map((level, index) => {
              const status = getLevelStatus(level.id, index);
              let bgColor, textColor;

              switch (status) {
                case 'completed':
                  bgColor = 'bg-light-blue-v2';
                  textColor = 'text-black-blue';
                  break;
                case 'next':
                  bgColor = 'bg-light-blue';
                  textColor = 'text-black-blue';
                  break;
                case 'locked':
                default:
                  bgColor = 'bg-gray-300';
                  textColor = 'text-gray-400';
                  break;
              }

              const icon = levelIcons[level.id];

              if (index % 3 === 0) {
                return (
                  <View key={index} className="w-full flex items-center mt-9">
                    <View className="w-1/4">
                      <TouchableOpacity
                        className={`items-center w-24 h-24 justify-center rounded-full shadow-sm border-4 border-white ${bgColor}`}
                        onPress={() => status !== 'locked' && navigateToLevelDetail(level.id)}
                        disabled={status === 'locked'}
                      >
                        <Image source={status === 'completed' ? doneIcon : icon} style={{ width: 53, height: 53 }} />
                      </TouchableOpacity>
                      <Text className={`text-md font-bold mt-2 text-center ${textColor}`}>{level.title}</Text>
                    </View>
                  </View>
                );
              } else if (index % 3 === 1) {
                const nextLevel = levels[index + 1];
                return (
                  <View key={index} className="w-full flex flex-row justify-center mt-5 -mb-2">
                    {nextLevel && (
                      <View className="w-1/2 mx-2">
                        <TouchableOpacity
                          className={`items-center w-24 h-24 justify-center rounded-full shadow-sm border-4 border-white ${getLevelStatus(nextLevel.id, index + 1) === 'next' ? 'bg-light-blue' : bgColor}`}
                          onPress={() => status !== 'locked' && navigateToLevelDetail(nextLevel.id)}
                          disabled={status === 'locked'}
                        >
                          <Image source={levelIcons[nextLevel.id]} style={{ width: 53, height: 51.5 }} />
                        </TouchableOpacity>
                        <Text className={`text-md font-bold mt-2 ml-5 ${getLevelStatus(nextLevel.id, index + 1) === 'next' ? 'text-black' : textColor}`}>{nextLevel.title}</Text>
                      </View>
                    )}
                    <View className="w-1/4 mx-2">
                      <TouchableOpacity
                        className={`items-center w-24 h-24 justify-center rounded-full shadow-sm border-4 border-white ${bgColor}`}
                        onPress={() => status !== 'locked' && navigateToLevelDetail(level.id)}
                        disabled={status === 'locked'}
                      >
                        <Image source={status === 'completed' ? doneIcon : icon}  style={{ width: 53, height: 51.5 }} />
                      </TouchableOpacity>
                      <Text className={`text-md font-bold mt-2 ml-3 text-center ${textColor}`}>{level.title}</Text>
                    </View>
                  </View>
                );
              }
              return null;
            })}
          </ImageBackground>
        </ScrollView>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          className="flex-1 justify-center items-center">
          <View className="bg-gray-100 mx-5 rounded-xl">

            <View className="p-5 text-center justify-center items-center bg-light-blue-v2 rounded-t-xl">
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-md font-bold text-left mt-2 text-black-blue">
                Even een...
              </Text>
              
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-xl font-bold text-left mb-0 text-black-blue">
               Waarschuwing
              </Text>
            </View>

            <View className="justify-center items-center bg-white mx-5 rounded-xl mb-1 mt-5 p-5 w-[300]">

              {/* <Image source={require('../../assets/icons/warning.png')} className="w-[80] h-[90] mb-5" /> */}
            
              <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="text-center text-black-blue">
                 Als een oefening pijn doet of niet lukt omdat deze te moeilijk is stop dan! 
              </Text>

              <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="text-center text-black-blue text-xs mt-5">
                  Wij zijn niet verantwoordelijk voor de opgelopen blessures. 
              </Text>
            </View>
            <TouchableOpacity onPress={handleModalClose} className="bg-light-blue mx-5 py-4 mb-5 mt-3 rounded-xl">
              <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}
                className="text-black-blue font-semibold text-center text-xl">Ga verder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
