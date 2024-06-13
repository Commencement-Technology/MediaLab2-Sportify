import { View, Text, TouchableOpacity, ScrollView, Image, StatusBar, ImageBackground, Modal } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

export default function LevelTwoDetail() {
  const navigation = useNavigation();

  const [activateChecked, setActivateChecked] = useState(false);
  const [afmakerChecked, setAfmakerChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const openBadgeModal = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View className="flex-1 bg-gray-200 relative">
      <StatusBar />

      <ScrollView>

        <View>
          <Image
            className="h-72 w-full"
            source={require("../../assets/images/level-touw.png")}
            
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 60, 
              left: 15,
              padding: 10,
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="bg-[#F6F6F6] p-5 pb-32 shadow-md">
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-xl font-bold text-left mb-0">
            Touwtje springen
          </Text>
          <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-sm text-left mb-3">Beginner Vriendelijk</Text>

          <View className="flex-row mb-4 mt-4">
            <View className="px-4 py-2 bg-gray-50 rounded-lg flex-row items-center">
              <Image source={require('../../assets/icons/Timer.png')} className="w-5 h-5 mr-1"/>
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base text-black-blue">15 minuten</Text>
            </View>
            <View className="mx-3 px-4 py-2 bg-gray-50 rounded-lg flex-row items-center">
              <Image source={require('../../assets/icons/Fire.png')} className="w-5 h-5 mr-1"/>
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base text-black-blue">100 kcal</Text>
            </View>
          </View>

          <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-base mb-8">
            Deze challenge omvat een 30 minuten durende touwtje springen
            workout, inclusief opwarmen, activeren, de hoofduitdaging, een korte
            afmaker en een cooling-down, ontworpen om beginners vertrouwd te
            maken met touwtje springen.
          </Text>

          <View className="flex-row mb-4">
            <TouchableOpacity className="px-4 py-2 bg-gray-50 rounded-lg mr-4 flex-row justify-center items-center">
              <Checkbox
                value={activateChecked}
                onValueChange={setActivateChecked}
                color={activateChecked ? '#AFDEFF' : undefined}
              />
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="ml-2 text-sm">Activatie (+5 P)</Text>
            </TouchableOpacity>

            <TouchableOpacity className="px-4 py-2 bg-gray-50 rounded-lg mr-4 flex-row justify-center items-center">
              <Checkbox
                value={afmakerChecked}
                onValueChange={setAfmakerChecked}
                color={afmakerChecked ? '#AFDEFF' : undefined}
              />
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="ml-2 text-sm">Afmaker (+5 P)</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../../assets/images/touwtjes-springen.png")}
              className="w-32 h-20 rounded-xl ml-4"
              style={{ tintColor: "gray" }}
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">Warming-up</Text>

                <View className="flex-row">
                  <View className="flex-row items-center">
                    <Image source={require('../../assets/icons/Timer.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">3 min</Text>
                  </View>

                  <View className="mx-5 flex-row items-center">
                    <Image source={require('../../assets/icons/Fire.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">14 kcal</Text>
                  </View>
                </View>
            </View>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../../assets/images/touwtjes-springen.png")}
              className="w-32 h-20 rounded-xl ml-4"
              style={{ tintColor: "gray" }}
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">Activatie</Text>
             
                <View className="flex-row">
                  <View className="flex-row items-center">
                    <Image source={require('../../assets/icons/Timer.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">2 min</Text>
                  </View>

                  <View className="mx-5 flex-row items-center">
                    <Image source={require('../../assets/icons/Fire.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">8 kcal</Text>
                  </View>
                </View>
            </View>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../../assets/images/touwtjes-springen.png")}
              className="w-32 h-20 rounded-xl ml-4"
              style={{ tintColor: "gray" }}
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">Hoofd Uitdaging</Text>
              
                <View className="flex-row">
                  <View className="flex-row items-center">
                    <Image source={require('../../assets/icons/Timer.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">7 min</Text>
                  </View>

                  <View className="mx-5 flex-row items-center">
                    <Image source={require('../../assets/icons/Fire.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">20 kcal</Text>
                  </View>
                </View>
            </View>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../../assets/images/touwtjes-springen.png")}
              className="w-32 h-20 rounded-xl ml-4"
              style={{ tintColor: "gray" }}
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">Afmaker</Text>
              
                <View className="flex-row">
                  <View className="flex-row items-center">
                    <Image source={require('../../assets/icons/Timer.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">1 min</Text>
                  </View>

                  <View className="mx-5 flex-row items-center">
                    <Image source={require('../../assets/icons/Fire.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">20 kcal</Text>
                  </View>
                </View>
            </View>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../../assets/images/touwtjes-springen.png")}
              className="w-32 h-20 rounded-xl ml-4"
              style={{ tintColor: "gray" }}
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">Cooling-down</Text>
              
                <View className="flex-row">
                  <View className="flex-row items-center">
                    <Image source={require('../../assets/icons/Timer.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">2 min</Text>
                  </View>

                  <View className="mx-5 flex-row items-center">
                    <Image source={require('../../assets/icons/Fire.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">20 kcal</Text>
                  </View>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>

    
      <View className="bg-gradient-to-t from-black" style={{ position: 'absolute', bottom: 0, left: 20, right: 20 }}>
        <ImageBackground source={require('../../assets/images/button-shadow.png')} resizeMode="cover" style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <TouchableOpacity
            className="bg-light-blue text-black-blue py-5 w-96 rounded-lg items-center mt-20 mb-8"
            onPress={() => navigation.navigate('WarmingUpStart')}>
            <Text style={{ fontFamily: 'Montserrat_700Bold' }}
              className="text-black text-xl font-semibold">Let's Go!</Text>
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

              <Image source={require('../../assets/icons/warning.png')} className="w-[80] h-[90] mb-5" />
            
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

