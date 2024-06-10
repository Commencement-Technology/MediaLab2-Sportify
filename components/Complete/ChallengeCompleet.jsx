import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { UpdateUserProgress } from '../UpdateUserProgress';

export default function ChallengeCompleet() {
    const navigation = useNavigation();
  const [selectedEmotieLeuk, setSelectedEmotieLeuk] = useState(null);
  const [selectedEmotieMoeilijk, setSelectedEmotieMoeilijk] = useState(null);

  useEffect(() => {
    // Update user progress when the component mounts
    UpdateUserProgress('level_2');
  }, []);

  const emotionsLeuk = [
    { src: require('../../assets/icons/leuk1.png'), title: 'Niet leuk' },
    { src: require('../../assets/icons/leuk2.png'), title: 'Oke' },
    { src: require('../../assets/icons/leuk3.png'), title: 'Normaal' },
    { src: require('../../assets/icons/leuk4.png'), title: 'Leuk' },
    { src: require('../../assets/icons/leuk5.png'), title: 'Geweldig' },
  ];

  const emotionsMoeilijk = [
    { src: require('../../assets/icons/moeilijk1.png'), title: 'Heel Makkelijk' },
    { src: require('../../assets/icons/moeilijk2.png'), title: 'Simpel' },
    { src: require('../../assets/icons/moeilijk3.png'), title: 'Te doen' },
    { src: require('../../assets/icons/moeilijk4.png'), title: 'Uitdagend' },
    { src: require('../../assets/icons/moeilijk5.png'), title: 'Extreem' },
  ];

  return (
    <View className="flex-1 bg-white relative">
      <StatusBar />
      <View className="">
        <View className="pt-28 px-5 pb-8 text-center justify-center items-center">
          <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-base text-left mb-1">Geweldig gedaan!</Text>
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-2xl font-bold text-left mb-0">
            Challenge compleet!
          </Text>
        </View>
      </View>

      <ScrollView>
      <View className="bg-gray-100 pb-32 px-5 h-screen">
        <Text style={{ fontFamily: 'Montserrat_400Regular' }}
          className="text-base mt-4 mb-5 text-center">
          Wow, je hebt het geweldig gedaan! Weer een challenge overwonnen, tijd om trots op jezelf te zijn en je harde werk te vieren!
        </Text>

        <Image source={require('../../assets/images/challenge-compleet.png')} className="w-[390] h-[160] rounded-xl" />

        <View className="bg-white py-5 px-5 mt-5 rounded-xl">
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="mb-5 text-black-blue text-base">
            Geef je feedback!
          </Text>

          <View>
            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
              className="text-base">
              Hoe leuk vond je deze workout?
            </Text>
            <View className="flex-row mt-3 justify-between mx-6">
              {emotionsLeuk.map((emotion, index) => (
                <TouchableOpacity key={index} onPress={() => setSelectedEmotieLeuk(index)} className="items-center">
                  <View className={`p-1 ${selectedEmotieLeuk === index ? 'border-2 border-light-blue rounded-full' : ''}`}>
                    <Image source={emotion.src} className="w-8 h-8" />
                  </View>
                  {selectedEmotieLeuk === index && (
                    <Text className="text-center text-light-blue text-xs mt-1">{emotion.title}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="mb-3 mt-4">
            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
              className="text-base">
              Hoe moeilijk vond je deze workout?
            </Text>
            <View className="flex-row mt-3 justify-between mx-6">
              {emotionsMoeilijk.map((emotion, index) => (
                <TouchableOpacity key={index} onPress={() => setSelectedEmotieMoeilijk(index)} className="items-center">
                  <View className={`p-1 ${selectedEmotieMoeilijk === index ? 'border-2 border-light-blue rounded-full' : ''}`}>
                    <Image source={emotion.src} className="w-8 h-8" />
                  </View>
                  {selectedEmotieMoeilijk === index && (
                    <Text className="text-center text-light-blue text-xs mt-1 w-16">{emotion.title}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
      </ScrollView>

      <TouchableOpacity style={{ position: 'absolute', bottom: 25, left: 20, right: 20 }} className="bg-light-blue text-black-blue py-5 px-6 rounded-lg items-center shadow-2xl shadow-gray-400"
      onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontFamily: 'Montserrat_700Bold' }}
        className="text-black text-xl font-semibold">Opslaan</Text>
      </TouchableOpacity>
      
    </View>
  );
}
