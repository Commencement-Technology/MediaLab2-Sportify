import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NormalPosts = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{ width: screenWidth - 40, marginHorizontal: 22 }}
      className="bg-white rounded-lg p-4 mt-4 relative"
    >
      <View className="flex flex-row items-start mt-4">
        <View className="w-10 h-10 bg-gray-300 rounded-full mr-2"></View>
        <View className="flex flex-col mr-auto">
          <Text className="text-gray-800 font-midium">Lenard Praatgraag</Text>
          <Text className="font-light">13 min geleden</Text>
        </View>
        <Ionicons
          name="chatbox-outline"
          size={20}
          color="black"
          className="ml-4"
        />
        <Text className="ml-2 mr-4 text-gray-800">49</Text>
        <Ionicons name="eye-outline" size={20} color="black" />
        <Text className="ml-1 text-gray-800">400</Text>
      </View>

      <Text className="mt-4 text-gray-800 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        enim. Duis laoreet urna sit amet dui porttitor, ut lacinia libero
        lacinia. Pellentesque vestibulum risus arcu, id cursus nisi dapibus et.
      </Text>
    </View>
  );
};

const ProgressBar = () => {
  return (
    <View className="h-2 w-[290] bg-gray-300 rounded-full overflow-hidden">
      <View className="h-full bg-dark-blue-v2 w-20 rounded-full" />
    </View>
  );
};

const Community_Friends = () => {
  const navigation = useNavigation();
  const { height } = Dimensions.get("window");

  return (
    <View className="h-full bg-white">
      <View className="py-2 border-b border-gray-200">
        <View className="h-32 flex flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-left mt-20 ml-8 text-dark-blue">
            Community
          </Text>
          <TouchableOpacity
            onPress={() => console.log("Search icon clicked")}
            className="text-2xl font-bold text-right mt-20 mr-4 text-dark-blue ml-4"
          >
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-center items-center mt-6">
          <TouchableOpacity
            className="w-48 h-11 bg-gray-100 border border-gray-100 rounded-l-md px-4 py-2 mb-3 left-1"
            onPress={() => navigation.navigate("Community")}
          >
            <Text className="text-gray-300 font-bold text-center mt-1">
              Forum
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-48 h-11 bg-dark-blue border border-dark-blue rounded-md px-4 py-2 mb-3 relative z-10"
            onPress={() => console.log("Friends clicked")}
          >
            <Text className="text-white font-bold text-center mt-1">
              Vrienden
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-gray-100 flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, minHeight: height + 150 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-6 mx-2 flex flex-row items-center">
            <Text className="text-lg font-bold text-left mt-1 ml-5 text-dark-blue">
              Friend Quests
            </Text>
            <Image
              source={require("../assets/icons/Clock.png")}
              style={{ width: 30, height: 30, marginLeft: 160 }}
            />
            <Text className="ml-2 text-dark-blue">16 dagen</Text>
          </View>

          {/* Nieuwe rechthoekige vorm */}
          <View
            style={{
              width: Dimensions.get("window").width - 40,
              marginHorizontal: 22,
            }}
            className="bg-white rounded-lg p-4 mt-4 relative"
          >
            <Text className="text-lg font-bold text-left mt-1 ml-2 text-black">
              Compleet 9 workouts
            </Text>

            <View className="flex flex-row items-center justify-center mt-2">
              <ProgressBar />
              <Image
                source={require("../assets/icons/Gift.png")}
                style={{ width: 40, height: 40, marginLeft: 14 }}
              />
            </View>

            <Text className=" ml-2 mt-2 font-extralight">3 / 9</Text>

            <View className="py-2 border-b border-light-blue w-full"></View>

            <View className="flex flex-col mt-4">
              <View className="flex flex-row items-center mb-3">
                <View className="w-10 h-10 bg-gray-300 rounded-full mr-2"></View>
                <Text className="font-semibold">Emma Roodwoud</Text>
                <Text className="font-semibold ml-auto w-4 text-right">1</Text>
              </View>

              <View className="flex flex-row items-center mb-3">
                <View className="w-10 h-10 bg-gray-300 rounded-full mr-2"></View>
                <Text className="font-semibold">Felicia de Berg</Text>
                <Text className="font-semibold ml-auto w-4 text-right">1</Text>
              </View>

              <View className="flex flex-row items-center">
                <View className="w-10 h-10 bg-gray-300 rounded-full mr-2"></View>
                <Text className="font-semibold">Kees Burger</Text>
                <Text className="font-semibold ml-auto w-4 text-right">1</Text>
              </View>
            </View>
          </View>

          <View className="mt-4 mb-32">
            <Text className="mx-2 text-lg font-bold text-left mt-1 ml-7 text-dark-blue">
              Berichten
            </Text>
            <NormalPosts />
            <NormalPosts />
            <NormalPosts />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Community_Friends;
