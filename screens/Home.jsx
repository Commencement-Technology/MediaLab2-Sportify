import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


import LevelCircle from "../components/LevelCircle";

export default function Home() {
    const generateLevels = (numLevels) => {
        const levels = [];
        for (let i = 1; i <= numLevels; i++) {
          levels.push({
            level: i,
            icon: (
              <Ionicons
                name={
                  i > 5
                    ? "basketball-outline"
                    : i > 3
                    ? "football-outline"
                    : i > 2
                    ? "golf-outline"
                    : i > 1
                    ? "american-football-outline"
                    : "tennisball-outline"
                }
                size={24}
                color="black"
              />
            ),
          });
        }
        return levels;
      };

  const levels = generateLevels(30);

  return (
      <View className="flex-1 bg-gray-100 p-5 mt-14">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-gray-300 rounded-full mr-3" />
            <View className="flex-col">
              <Text className="text-lg text-gray-800">Goeiemorgen,</Text>
              <Text className="text-xl font-bold text-gray-800">Gebruikersnaam</Text>
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

        <TouchableOpacity className="mt-5 p-5 bg-white rounded-lg items-center">
          <Text className="text-xl font-bold text-gray-800">Gedeelte 1</Text>
          <Text className="text-lg text-gray-800">Beginner</Text>
        </TouchableOpacity>

        <View className="mt-5 p-6 bg-white rounded-lg h-full">
          <ScrollView>
            {levels.map((level, index) => (
              <React.Fragment key={index}>
                <View
                  className={`h-32 w-1/4 my-2 ${index % 2 === 0 ? "self-start" : "self-end"}`}
                >
                  <LevelCircle level={level.level} icon={level.icon} />
                </View>
                {index < levels.length - 1 && (
                  <View className="absolute w-px bg-black z-10" style={{ top: `${(index + 1) * 130}px` }}>
                    <View className="border-dotted border-2 border-black w-full absolute" />
                  </View>
                )}
              </React.Fragment>
            ))}
          </ScrollView>
        </View>
      </View>
  );
}
