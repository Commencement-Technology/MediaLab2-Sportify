import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Community_Post = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");

  return (
    <View className="relative flex-1 justify-center items-center bg-white">
      <TouchableOpacity
        style={{ left: 20 }}
        className="absolute top-28"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-gray-500">Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ right: 20 }}
        className="absolute top-28"
        onPress={() => console.log("Post pressed")}
      >
        <Text className="text-black-500 font-bold">Post</Text>
      </TouchableOpacity>
      <View
        style={{
          width: width - 40,
          marginTop: -150, // Adjust the margin to place the rectangle below the buttons
        }}
        className="bg-gray-100 rounded-lg h-96"
      >
        <View style={{ margin: 16 }}>
          <TouchableOpacity
            className="flex flex-row items-center"
            onPress={() => navigation.navigate("Community_Post")}
          >
            <View className="flex flex-row items-center">
              <View className="w-10 h-10 bg-gray-300 rounded-full"></View>
              <Text className="ml-6 text-gray-400 italic font-light">
                Stel een vraag of geef je mening...
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20, // Adjust the margin to place this container below the main rectangle
          width: width - 40,
        }}
      >
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={{
              width: (width - 60) / 4, // Adjust the width based on the container's width
              height: 100, // Set a fixed height for the rectangles
              backgroundColor: "#F4F4F4",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Image
              source={require("../assets/icons/Camera.png")}
              style={{ width: 35, height: 35 }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Community_Post;
