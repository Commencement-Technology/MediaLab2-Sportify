import { View, Text, TouchableOpacity, ScrollView, StatusBar, Modal } from "react-native";
import React, { useState } from "react";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';
import { ImageBackground } from "react-native";
import { Image } from "expo-image"

// Example of a remote uri gif
const REMOTE_GIF = 'https://d1tz7e6etl7q8r.cloudfront.net/b6m55y%2Fpreview%2F58699930%2Fmain_large.gif?response-content-disposition=inline%3Bfilename%3D%22main_large.gif%22%3B&response-content-type=image%2Fgif&Expires=1718628309&Signature=aJopoH3z6VJU-rjlRdnL57qdq~PapTlmbfSUjb4u2gUXil~tQlf-m8Pe5ZziDlJFIoG4w-leHTecwduuqwkAPDoeSUHYBPKzGWIHO3D4SVd6Gn3z1HSQ-HE4aaO6vTcsiFUxz9B9gBqBNxGTo9D0xWeTQBVd6v6a3~tx~SycEj4mZyJvmmmSxEFkkLUu9pzEIRZTgIPBo91mZQ8UlpwjiC5LhbRyw~7imGRytVA-cGnY3cngQatsTKdlx16YEK8JXX8tXQpPsq3Nt5LPTOHXNbigBkKjJKlDpFqXYG2t1lxEFn0YSIrN~th7w4Ic-jqLaOnQMt55ySHfX44GbSyqZA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';

const exercises = [
  {
    title: "Kuit stretches rechts",
    description: "Rechter been naar achteren gestrekt, hakken op de grond.",
    image: 'https://d1tz7e6etl7q8r.cloudfront.net/b6m55y%2Fpreview%2F58699930%2Fmain_large.gif?response-content-disposition=inline%3Bfilename%3D%22main_large.gif%22%3B&response-content-type=image%2Fgif&Expires=1718628309&Signature=aJopoH3z6VJU-rjlRdnL57qdq~PapTlmbfSUjb4u2gUXil~tQlf-m8Pe5ZziDlJFIoG4w-leHTecwduuqwkAPDoeSUHYBPKzGWIHO3D4SVd6Gn3z1HSQ-HE4aaO6vTcsiFUxz9B9gBqBNxGTo9D0xWeTQBVd6v6a3~tx~SycEj4mZyJvmmmSxEFkkLUu9pzEIRZTgIPBo91mZQ8UlpwjiC5LhbRyw~7imGRytVA-cGnY3cngQatsTKdlx16YEK8JXX8tXQpPsq3Nt5LPTOHXNbigBkKjJKlDpFqXYG2t1lxEFn0YSIrN~th7w4Ic-jqLaOnQMt55ySHfX44GbSyqZA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ',
    duration: 5,
  },
  {
    title: "Kuit stretches links",
    description: "Linker been naar achteren gestrekt, hakken op de grond.",
    image: 'https://d23s3g4gmiov6j.cloudfront.net/b33x5y%2Fpreview%2F58700919%2Fmain_large.gif?response-content-disposition=inline%3Bfilename%3D%22main_large.gif%22%3B&response-content-type=image%2Fgif&Expires=1718629309&Signature=IMtlQdfK1gPqozgBQSR5xsAmSfqzSLr3vTHRVX6v6c9uvUW6rLY3ZSHegHUJKsVQHOKc2vvr356FonrDUPlVmBgz~8b2qseKwBVDBKF6D2gUFVNbgHG0wasW3mEX5BoKJ6pQoReHGTg7TqMapYL-0wF2r2ZP5mEQPfQj9Rf32DuJujN8~V8vah~wo5Bqc4fiHiXKzeI--XwgKAzREFbJxsQr2FD8pxtZLPcF7cGk1UbauFwB6fG9dV26TdAleW3U8y4Nu5ZujhxeT9L9tqazuWxohqk2xZYTMsqhxSN9uhj-CGuxEEgPkjT4vXKisyGJcTY~uvLmZ673vvyuSxTzIQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ',
    duration: 5,
  },
  {
    title: "Hielheffingen set 1",
    description: "Ga op je tenen staan en laat jezelf weer zakken, 15x",
    image: require("../../assets/images/touwtjes-springen.png"),
    duration: 30,
  },
  {
    title: "Hielheffingen set 2",
    description: "Ga op je tenen staan en laat jezelf weer zakken, 15x",
    image: require("../../assets/images/touwtjes-springen.png"),
    duration: 30,
  },
  {
    title: "Joggen",
    description: "In een licht tempo joggen op de plaats",
    image: require("../../assets/images/touwtjes-springen.png"),
    duration: 30,
  },
];

export default function WarmingUpOne() {
  const navigation = useNavigation();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [isPaused, setIsPaused] = useState(true);

  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsTimerPlaying(true);
  };

  const handleTimerComplete = () => {
    setIsTimerPlaying(false);
    setCompletedExercises([...completedExercises, currentExerciseIndex]);
  
    if (currentExerciseIndex === 1) {
      // Navigate to MotivationBetween after the second exercise
      navigation.navigate('HoofdUitdagingStart');
    } else if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setIsModalVisible(true);
    } else {
      // Navigate to Completed screen
      navigation.navigate('MotivationBetween');
    }
  };

  const handlePauseExercise = (index) => {
    setIsTimerPlaying(!isPaused);
    setIsPaused(!isPaused);
    setCurrentExerciseIndex(index);
  };

  const currentExercise = exercises[currentExerciseIndex];

  return (
    <View className="flex-1 bg-white relative">
      <StatusBar />

      
        <View className="">
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 60,
              left: 10,
              padding: 10,
              borderRadius: 20
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <View className="pt-28 px-5 pb-8 text-center justify-center items-center">
            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
              className="text-base text-left mb-1">Oefening {currentExerciseIndex + 1} van {exercises.length}</Text>

            <Text style={{ fontFamily: 'Montserrat_700Bold' }}
              className="text-2xl font-bold text-left mb-0">
              {currentExercise.title}
            </Text>
          </View>
        </View>

        {/* Content */}
        <View className="bg-gray-100 pb-32 h-screen">
          <View>
          <Image source={{ uri: currentExercise.image }} style={{ width: '100%', height: 300 }} />
          </View>

          <View className="p-5">
          <ScrollView>
            {exercises.map((exercise, index) => (
              !completedExercises.includes(index) && (
                <Animated.View 
                key={index} 
                entering={FadeIn} 
                exiting={FadeOutUp} 
                className="flex flex-row items-center mb-4 py-2 bg-gray-50 rounded-lg"
              >
                <View className="ml-6 mr-3">
                  <CountdownCircleTimer
                    isPlaying={isTimerPlaying && currentExerciseIndex === index}
                    duration={exercise.duration}
                    colors={['#D1D5DB', '#122D71', '#122D71', '#122D71']}
                    colorsTime={[5, 4, 2, 0]}
                    strokeWidth={7}
                    strokeLinecap={'square'}
                    size={70}
                    onComplete={handleTimerComplete}
                  >
                    {({ remainingTime }) => <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                      className="text-lg">{remainingTime}</Text>}
                  </CountdownCircleTimer>
                </View>
                <View className="flex flex-col justify-center items-start px-4 py-2 w-2/3">
                  <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                    className="text-lg font-bold mb-0">{exercise.title}</Text>
                  <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                    className="text-md">{exercise.description}</Text>
                </View>
              </Animated.View>
              )
            ))}
            </ScrollView>
          </View>
          
        </View>

         {/* Pauzeerknop */}
          <View className="bg-gradient-to-t from-black" style={{ position: 'absolute', bottom: 0, left: 20, right: 20 }}>
            <ImageBackground source={require('../../assets/images/button-shadow.png')} resizeMode="cover" style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
              <TouchableOpacity 
                className="flex-row justify-center bg-light-blue text-black-blue py-5 w-96 rounded-lg items-center mt-20 mb-8"
                onPress={() => handlePauseExercise(currentExerciseIndex)} 
              >
                <Image source={isPaused ? require('../../assets/icons/Pause.png') : require('../../assets/icons/play.png')} className={isPaused ? 'w-5 h-5 mr-3' : 'w-4 h-4 mr-3'}/>
                
                <Text style={{ fontFamily: 'Montserrat_700Bold' }} className="text-black text-xl font-semibold">
                {isPaused ? 'Pauzeer' : 'Verder'}
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
        >
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            className="flex-1 justify-center items-center">
            <View className="bg-gray-100 mx-5 rounded-xl">
              <View className="p-5 text-center justify-center items-center bg-white rounded-t-xl">
                <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                  className="text-base text-left mb-1">Next up</Text>

                <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                  className="text-2xl font-bold text-left mb-0">
                  {currentExercise.title}
                </Text>
              </View>

              <View className="justify-center items-center bg-white mx-5 rounded-xl mb-1 mt-5 p-5">
                <CountdownCircleTimer
                  isPlaying
                  duration={5}
                  colors={['#AFDEFF', '#AFDEFF', '#7097C6', '#122D71']}
                  colorsTime={[5, 3, 2, 0]}
                  strokeWidth={18}
                  onComplete={handleModalClose}
                >
                  {({ remainingTime }) => <Text className="text-3xl">{remainingTime}</Text>}
                </CountdownCircleTimer>
              </View>

              <View className="bg-white mx-5 rounded-xl mb-5 mt-3 p-5">
                <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                  className="text-center text-base px-5 ">{currentExercise.description}</Text>
              </View>

              <TouchableOpacity onPress={handleModalClose} className="bg-gray-300 mx-5 py-5 mb-5 rounded-xl">
                <Text style={{ fontFamily: 'Montserrat_600SemiBold'}}
                  className="text-black font-semibold text-center text-xl">Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
     
    </View>
  );
}
