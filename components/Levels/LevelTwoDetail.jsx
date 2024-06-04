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
            source={require("../../assets/images/touwtjes-springen.png")}
            style={{ tintColor: "gray" }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 60, // Adjust according to your needs
              left: 25,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: 10,
              borderRadius: 20
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="bg-gray-100 p-5 pb-32 shadow-md">
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-2xl font-bold text-left mb-0">
            Touwtje springen
          </Text>
          <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-sm text-left mb-3">Beginner Vriendelijk</Text>

          <View className="flex-row mb-4 mt-4">
            <View className="px-4 py-2 bg-gray-50 rounded-lg">
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base">⏱ 32 min</Text>
            </View>
            <View className="mx-3 px-4 py-2 bg-gray-50 rounded-lg">
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base">🔥 160 kcal</Text>
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
                color={activateChecked ? '#4630EB' : undefined}
              />
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="ml-2 text-sm">Activatie (+5 EXP)</Text>
            </TouchableOpacity>

            <TouchableOpacity className="px-4 py-2 bg-gray-50 rounded-lg mr-4 flex-row justify-center items-center">
              <Checkbox
                value={afmakerChecked}
                onValueChange={setAfmakerChecked}
                color={afmakerChecked ? '#4630EB' : undefined}
              />
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="ml-2 text-sm">Afmaker (+5 EXP)</Text>
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
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base">⏱ 5 min     🔥 40 Kcal</Text>
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
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base">⏱ 5 min     🔥 40 Kcal</Text>
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
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base">⏱ 5 min     🔥 40 Kcal</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="">
      <TouchableOpacity style={{ position: 'absolute', bottom: 25, left: 20, right: 20 }} className="bg-gray-300 py-5 px-6 rounded-lg items-center shadow-2xl shadow-black"
      onPress={() => navigation.navigate('WarmingUpStart')}>
        <Text style={{ fontFamily: 'Montserrat_700Bold' }}
        className="text-black text-xl font-semibold">Let's Go!!</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

