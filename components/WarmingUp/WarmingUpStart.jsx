import { View, Text, TouchableOpacity, ScrollView, Image, StatusBar, ImageBackground } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";

export default function WarmingUpStart() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white relative">
      <StatusBar />

      <ScrollView>

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

            <View className="pt-28 px-5 pb-5">
                <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                    className="text-2xl font-bold text-left mb-0">
                    Warming-up
                </Text>
                <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                    className="text-sm text-left mb-3">5 minuten</Text>
            </View>
        </View>

        {/* Content */}
        <View className="bg-gray-100 p-5 pb-32 h-screen">

        <View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../../assets/images/kuit-strech.png")}
              className="w-32 h-20 rounded-xl ml-4"
              
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">1. Kuit Stretches</Text>
              
              <View className="flex-row">
                  <View className="flex-row items-center">
                    <Image source={require('../../assets/icons/Timer.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">1 min</Text>
                  </View>

                  <View className="mx-5 flex-row items-center">
                    <Image source={require('../../assets/icons/Fire.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">4 kcal</Text>
                  </View>
              </View>
            </View>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../../assets/images/kuit-verhoging.png")}
              className="w-32 h-20 rounded-xl ml-4"
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">2. Kuit Verhogingen</Text>
             
              <View className="flex-row">
                  <View className="flex-row items-center">
                    <Image source={require('../../assets/icons/Timer.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">1 min</Text>
                  </View>

                  <View className="mx-5 flex-row items-center">
                    <Image source={require('../../assets/icons/Fire.png')} className="w-5 h-5 mr-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                      className="text-base text-black-blue">5 kcal</Text>
                  </View>
              </View>
            </View>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../../assets/images/joggen.png")}
              className="w-32 h-20 rounded-xl ml-4"
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">3. Joggen op de plaats</Text>

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
        </View>
        
        </View>
      </ScrollView>

      <View className="bg-gradient-to-t from-black" style={{ position: 'absolute', bottom: 0, left: 20, right: 20 }}>
        <ImageBackground source={require('../../assets/images/button-shadow.png')} resizeMode="cover" style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <TouchableOpacity
            className="bg-light-blue text-black-blue py-5 w-96 rounded-lg items-center mt-20 mb-8"
            onPress={() => navigation.navigate('WarmingUpOne')}>
            <Text style={{ fontFamily: 'Montserrat_700Bold' }}
              className="text-black text-xl font-semibold">Start Warming-up</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}
