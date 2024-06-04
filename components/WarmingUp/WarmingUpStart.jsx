import { View, Text, TouchableOpacity, ScrollView, Image, StatusBar, ImageBackground } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";

export default function WarmingUpStart() {
  const navigation = useNavigation();

  const [activateChecked, setActivateChecked] = useState(false);
  const [afmakerChecked, setAfmakerChecked] = useState(false);

  return (
    <View className="flex-1 bg-white relative">
      <StatusBar />

      <ScrollView>

        <View className="">
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 60, // Adjust according to your needs
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
              source={require("../../assets/images/touwtjes-springen.png")}
              className="w-32 h-20 rounded-xl ml-4"
              style={{ tintColor: "gray" }}
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-lg font-bold mb-2">1. Kuit Stretches</Text>
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base">⏱ 1 min     🔥 4 Kcal</Text>
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
                className="text-lg font-bold mb-2">2. Kuit Verhogingen</Text>
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base">⏱ 1 min     🔥 5 Kcal</Text>
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
                className="text-lg font-bold mb-2">3. Joggen op de plaats</Text>
              <Text style={{ fontFamily: 'Montserrat_400Regular' }}
                className="text-base">⏱ 2 min     🔥 9 Kcal</Text>
            </View>
          </View>
        </View>
        
        </View>
      </ScrollView>

      <View className="">
      <TouchableOpacity style={{ position: 'absolute', bottom: 25, left: 20, right: 20 }} className="bg-gray-300 py-5 px-6 rounded-lg items-center shadow-2xl shadow-gray-500"
      onPress={() => navigation.navigate('WarmingUpOne')}>
        <Text style={{ fontFamily: 'Montserrat_700Bold' }}
        className="text-black text-xl font-semibold">Start Warming-up!!</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
