import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const LevelDetail = () => {
  return (
    <ScrollView>
      <View className="flex-1 bg-gray-200">
        <View>
          <Image
            className="h-80 w-full"
            source={require("../assets/images/touwtjes-springen.png")}
          ></Image>
        </View>

        {/* Content */}
        <View className="bg-gray-100 p-4 rounded-lg shadow-md">
          <Text className="text-lg font-bold text-left mb-2">
            Touwtje springen
          </Text>
          <Text className="text-sm text-left mb-4">Beginner Vriendelijk</Text>

          <View className="flex-row mb-4 mt-4">
            <View className="px-4 py-2 bg-gray-50 rounded-lg">
              <Text className="text-base">⏱ 32 min</Text>
            </View>
            <View className="mx-3 px-4 py-2 bg-gray-50 rounded-lg">
              <Text className="text-base">🔥 160 kcal</Text>
            </View>
          </View>

          <Text className="text-sm mb-4">
            Deze challenge omvat een 30 minuten durende touwtje springen
            workout, inclusief opwarmen, activeren, de hoofduitdaging, een korte
            afmaker en een cooling-down, ontworpen om beginners vertrouwd te
            maken met touwtje springen.
          </Text>

          <View className="flex-row justify-around mb-4">
            <TouchableOpacity className="px-4 py-2 bg-gray-50 rounded-lg">
              <Text>Activatie (+5 EXP)</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 bg-gray-50 rounded-lg">
              <Text>Afmaker (+5 EXP)</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../assets/images/touwtjes-springen.png")}
              className="w-40 h-20 rounded-l-lg ml-4"
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text className="text-base font-bold mb-2">Warming-up</Text>
              <Text className="text-base">⏱ 5 min 🔥 40 Kcal</Text>
            </View>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../assets/images/touwtjes-springen.png")}
              className="w-40 h-20 rounded-l-lg ml-4"
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text className="text-base font-bold mb-2">Warming-up</Text>
              <Text className="text-base">⏱ 5 min 🔥 40 Kcal</Text>
            </View>
          </View>

          <View className="flex flex-row items-center mb-4 h-28 bg-gray-50 rounded-lg">
            <Image
              source={require("../assets/images/touwtjes-springen.png")}
              className="w-40 h-20 rounded-l-lg ml-4"
            />
            <View className="flex flex-col justify-center items-start p-4 w-2/3">
              <Text className="text-base font-bold mb-2">Warming-up</Text>
              <Text className="text-base">⏱ 5 min 🔥 40 Kcal</Text>
            </View>
          </View>

          <TouchableOpacity className="bg-gray-300 py-4 px-6 rounded-lg items-center">
            <Text className="text-black text-lg font-semibold">Let's Go!!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LevelDetail;
