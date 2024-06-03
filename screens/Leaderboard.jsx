import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const Leaderboard = () => {
  return (
    <View className="h-full bg-white">
      <View className="py-4 border-b border-gray-200 h-32">
        <Text className="text-2xl font-bold text-left mt-16 ml-8 text-dark-blue">
          Leaderboard
        </Text>
      </View>

      <View className="bg-gray-200 flex-1">
        <View className="flex flex-row justify-center items-center mt-4 mx-">
          <TouchableOpacity
            className="w-16 h-16 bg-white border border-gray-300 rounded-lg mx-2"
            onPress={() => console.log("Clicked on square 1")}
          />
          <TouchableOpacity
            className="w-16 h-16 bg-white border border-gray-300 rounded-lg mx-2"
            onPress={() => console.log("Clicked on square 2")}
          />
          <TouchableOpacity
            className="w-24 h-24 bg-white border border-gray-300 rounded-lg flex items-center justify-center mx-2"
            onPress={() => console.log("Clicked on square 3")}
          />
          <TouchableOpacity
            className="w-16 h-16 bg-white border border-gray-300 rounded-lg mx-2"
            onPress={() => console.log("Clicked on square 4")}
          />
          <TouchableOpacity
            className="w-16 h-16 bg-white border border-gray-300 rounded-lg mx-2"
            onPress={() => console.log("Clicked on square 5")}
          />
        </View>

        <View className="mt-6 mx-4">
          <View className="flex items-center justify-center mb-4">
            <Text className="text-lg font-semibold text-dark-blue">
              Rank: Enthusiast
            </Text>
          </View>

          <View className="flex-1 mb-4 px-4 mb-20">
            <View className="w-full h-12 bg-gray-50 rounded-lg flex items-center justify-center">
              <Text className="text-center">
                ⏳ Nog <Text style={{ fontWeight: "bold" }}>26</Text> dagen en
                <Text style={{ fontWeight: "bold" }}> 23</Text> uur
              </Text>
            </View>
          </View>

          <ScrollView>
            {[
              { id: 1, name: "Gebruiker 1", xp: "400 XP", days: "1+ Jaar" },
              { id: 2, name: "Gebruiker 2", xp: "350 XP", days: "1+ Jaar" },
              { id: 3, name: "Gebruiker 3", xp: "200 XP", days: "109 dagen" },
              { id: 4, name: "Gebruiker 4", xp: "150 XP", days: "54 dagen" },
            ].map((user, index) => (
              <View
                key={user.id}
                className={`rounded-lg shadow-md bg-white p-4 mb-4 ${
                  index !== 3 ? "border-b border-gray-300" : ""
                }`}
              >
                <View
                  key={user.id}
                  className={`flex flex-row items-center justify-between`}
                >
                  <View className="w-12 h-12 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                    <Text className="text-lg font-bold text-black">
                      {user.id}
                    </Text>
                  </View>
                  <View className="flex-1 ml-4">
                    <Text className="text-lg font-bold">{user.name}</Text>
                    <View className="flex flex-row">
                      <Text className="text-gray-500 mr-2">{user.xp}</Text>
                      <Text className="text-gray-500">🔥 {user.days}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Leaderboard;
