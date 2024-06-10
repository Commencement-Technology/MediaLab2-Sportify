import { View, Text, TouchableOpacity, ScrollView, Image, StatusBar, ImageBackground } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";

export default function LevelTwoDetail() {
  const navigation = useNavigation();

  const [activateChecked, setActivateChecked] = useState(false);
  const [afmakerChecked, setAfmakerChecked] = useState(false);

  return (
    <View className="flex-1 bg-gray-200 relative">
      <StatusBar />

      <ScrollView>

        <View>
          <Image
            className="h-72 w-full"
            source={require("../../assets/images/touwtje-intro.png")}
            
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

      <View className="">
      <TouchableOpacity style={{ position: 'absolute', bottom: 25, left: 20, right: 20 }} className="bg-light-blue text-black-blue py-5 px-6 rounded-lg items-center shadow-2xl shadow-black"
      onPress={() => navigation.navigate('WarmingUpStart')}>
        <Text style={{ fontFamily: 'Montserrat_700Bold' }}
        className="text-black text-xl font-semibold">Let's Go!</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

