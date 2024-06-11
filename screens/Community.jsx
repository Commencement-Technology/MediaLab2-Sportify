import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PopulairPosts = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{ width: screenWidth - 40, marginHorizontal: 12.5 }}
      className="bg-light-blue rounded-lg p-4 mt-4 relative"
    >
      <View className="bg-light-blue-v2 rounded-full px-3 py-1 absolute top-4 left-4">
        <Text className="text-black font-normal">Populair</Text>
      </View>

      <View className="flex flex-row items-start mt-12">
        <View className="w-10 h-10 bg-gray-300 rounded-full mr-2"></View>
        <View className="flex flex-col mr-auto">
          <Text className="text-gray-800 font-midium">Kees Burger</Text>
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
          <Text className="text-gray-800 font-midium font-midium">
            Felicia de Berg
          </Text>
          <Text className="font-light">22 min geleden</Text>
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

const Community = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const berichtCount = 5;
  const { height } = Dimensions.get("window");

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const selectedIndex = Math.floor(contentOffsetX / viewSize);
    setActiveIndex(selectedIndex);
  };

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
            className="w-48 h-11 bg-dark-blue border border-gray-300 rounded-md px-4 py-2 mb-3 relative z-10"
            onPress={() => console.log("Forum clicked")}
          >
            <Text className="text-white font-bold text-center mt-1">Forum</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-48 h-11 bg-gray-100 border border-gray-100 rounded-r-md px-4 py-2 mb-3 right-1"
            onPress={() => navigation.navigate("Community_Friends")}
          >
            <Text className="text-gray-300 font-bold text-center mt-1">
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
          <View className="flex flex-row items-center justify-between bg-white rounded-lg p-4 mt-6 mx-6">
            <TouchableOpacity
              className="flex flex-row items-center justify-between w-full"
              onPress={() => navigation.navigate("Community_Post")}
            >
              <View className="flex flex-row items-center">
                {/* Hier kun je de profielfoto invoegen */}
                <View className="w-10 h-10 bg-gray-300 rounded-full"></View>
                <Text className="ml-6 text-gray-400 italic font-light">
                  Stel een vraag of geef je mening...
                </Text>
              </View>
              <Text className="text-dark-blue font-bold mr-1">Post</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-4 mx-2">
            <Text className="text-lg font-bold text-left mt-1 ml-5 text-dark-blue">
              Populaire Berichten
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              contentContainerStyle={{ alignItems: "center" }}
            >
              <PopulairPosts />
              <PopulairPosts />
              <PopulairPosts />
              <PopulairPosts />
              <PopulairPosts />
            </ScrollView>
            <View className="flex flex-row justify-center mt-2">
              {Array.from({ length: berichtCount }).map((_, index) => (
                <View
                  key={index}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
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

export default Community;
