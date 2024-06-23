import React, { useState } from "react";
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

const PopulairPosts = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{ width: screenWidth - 40, marginHorizontal: 12.5 }}
      className="bg-light-blue rounded-lg px-5 pb-7 pt-2 mt-4 relative"
    >
      <View className="bg-light-blue-v2 rounded-full px-4 py-1 absolute top-4 left-4">
        <Text className="text-black text-xs"
        style={{ fontFamily: 'Montserrat_600SemiBold' }}>Populair</Text>
      </View>

      <View className="flex flex-row items-start mt-12">
        <View className="mr-4 -mt-1">
          <Image source={require('./../assets/icons/person-pf1.png')} className="w-10 h-10"/>
        </View>
        <View className="flex flex-col mr-auto">
          <Text className="text-black-blue text-md" style={{ fontFamily: 'Montserrat_500Medium' }}>Nayif Wasif</Text>
          <Text className="font-light text-xs" style={{ fontFamily: 'Montserrat_400Regular' }}>13 min geleden</Text>
        </View>

        {/* Comments */}
        <Image source={require('./../assets/icons/ChatDots.png')} className="w-5 h-5 ml-4 -m-1"/>
        <Text className="ml-2 mr-4 text-gray-800" style={{ fontFamily: 'Montserrat_500Medium' }}>49</Text>

        {/* Views */}
        <Image source={require('./../assets/icons/Eye.png')} className="w-5 h-5 ml-4 -m-1"/>
        <Text className="ml-2 text-gray-800" style={{ fontFamily: 'Montserrat_500Medium' }}>400</Text>
      </View>

        <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="mt-4 text-gray-800 font-light">Nieuwe badge behaald! 🏅</Text>
          <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="mt-1 text-gray-800 font-light">
          Vandaag een nieuwe badge behaald voor 5 dagen achter elkaar actief zijn. Voelt goed om beloond te worden voor mijn inspanningen. Dank aan iedereen voor de motivatie en aan Sportify voor de leuke uitdagingen. Wat is jullie nieuwste badge?
          </Text>
    </View>
  );
};

const NormalPosts = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{ width: screenWidth - 40, marginHorizontal: 22 }}
      className="bg-white rounded-lg px-5 pb-7 pt-2 mt-4 relative"
    >
      <View className="flex flex-row items-start mt-5">
        <View className="mr-4 -mt-1">
          <Image source={require('./../assets/icons/person-pf2.png')} className="w-10 h-10"/>
        </View>
        <View className="flex flex-col mr-auto">
          <Text className="text-black-blue text-md" style={{ fontFamily: 'Montserrat_500Medium' }}>Sophia Sheshy</Text>
          <Text className="font-light text-xs" style={{ fontFamily: 'Montserrat_400Regular' }}>13 min geleden</Text>
        </View>

        {/* Comments */}
        <Image source={require('./../assets/icons/ChatDots.png')} className="w-5 h-5 ml-4 -m-1"/>
        <Text className="ml-2 mr-4 text-gray-800" style={{ fontFamily: 'Montserrat_500Medium' }}>49</Text>

        {/* Views */}
        <Image source={require('./../assets/icons/Eye.png')} className="w-5 h-5 ml-4 -m-1"/>
        <Text className="ml-2 text-gray-800" style={{ fontFamily: 'Montserrat_500Medium' }}>400</Text>
      </View>

        <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="mt-4 text-gray-800 font-light">Dansles geprobeerd 💃</Text>
          <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="mt-1 text-gray-800 font-light">
          Ik had vandaag geen zin in Zumba, dus ik besloot een keer de dansles te proberen. Wat een plezier! De muziek en de bewegingen waren precies wat ik nodig had om me op te vrolijken. Misschien wordt dit wel mijn nieuwe favoriete activiteit. Zijn er anderen die dansen?
          </Text>
    </View>
  );
};

const FriendPosts = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{ width: screenWidth - 40, marginHorizontal: 22 }}
      className="bg-white rounded-lg px-5 pb-7 pt-2 mt-4 relative"
    >
      <View className="flex flex-row items-start mt-5">
        <View className="mr-4 -mt-1">
          <Image source={require('./../assets/icons/person-pf5.png')} className="w-10 h-10"/>
        </View>
        <View className="flex flex-col mr-auto">
          <Text className="text-black-blue text-md" style={{ fontFamily: 'Montserrat_500Medium' }}>Felicia de Berg</Text>
          <Text className="font-light text-xs" style={{ fontFamily: 'Montserrat_400Regular' }}>13 min geleden</Text>
        </View>

        {/* Comments */}
        <Image source={require('./../assets/icons/ChatDots.png')} className="w-5 h-5 ml-4 -m-1"/>
        <Text className="ml-2 mr-4 text-gray-800" style={{ fontFamily: 'Montserrat_500Medium' }}>49</Text>

        {/* Views */}
        <Image source={require('./../assets/icons/Eye.png')} className="w-5 h-5 ml-4 -m-1"/>
        <Text className="ml-2 text-gray-800" style={{ fontFamily: 'Montserrat_500Medium' }}>400</Text>
      </View>

        <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="mt-4 text-gray-800 font-light">Eerste yoga sessie gedaan! 🧘‍♀️</Text>
          <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="mt-1 text-gray-800 font-light">
          Vandaag mijn eerste yogales gevolgd en ik moet zeggen, het was geweldig! Voel me zo ontspannen en mijn rug voelt minder gespannen. Bedankt Sportify voor de suggestie. Zijn er anderen die ook aan yoga doen? Tips voor beginners zijn welkom!
          </Text>

          <View>
          {/* <Image source={require('./../assets/icons/ChatDots.png')} className=""/> */}
          </View>
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

const Community = () => {
  const [activeTab, setActiveTab] = useState('Forum');
  const [activeIndex, setActiveIndex] = useState(0);
  const { height } = Dimensions.get("window")
  const navigation = useNavigation();
  const berichtCount = 5;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const selectedIndex = Math.floor(contentOffsetX / viewSize);
    setActiveIndex(selectedIndex);
  };

  const renderContent = () => {
    if (activeTab === 'Forum') {
      return (
        <>
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
                    <View className="ml-2">
                      <Image source={require('./../assets/icons/emma-pf.png')} className="w-8 h-8"/>
                    </View>
                    <Text className="ml-6 text-gray-400 italic font-light">
                      Stel een vraag of geef je mening...
                    </Text>
                  </View>
                  <Text className="text-dark-blue font-bold mr-1"
                    style={{ fontFamily: 'Montserrat_700Bold' }}
                  >Post</Text>
                </TouchableOpacity>
              </View>
    
              <View className="mt-5 mx-2">
                <Text className="text-lg font-bold text-left mt-1 ml-3 text-black-blue
                style={{ fontFamily: 'Montserrat_700Bold' }}">
                  Berichten
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
                {/* <Text className="mx-2 text-lg font-bold text-left mt-1 ml-7 text-dark-blue">
                  Berichten
                </Text> */}
                <NormalPosts />
                <NormalPosts />
                <NormalPosts />
              </View>
            </ScrollView>
          </View>
        </>
      );
    } else {
      return (
        <>
          <View className="bg-gray-100 flex-1">
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, minHeight: height + 150 }}
              showsVerticalScrollIndicator={false}
            >
              <View className="mt-6 mx-2 flex flex-row items-center">
                <Text className="text-lg font-bold text-left mt-1 ml-5 text-black-blue"
                style={{ fontFamily: 'Montserrat_700Bold' }}>
                  Friend Quests
                </Text>
                <Image
                  source={require("../assets/icons/Clock.png")}
                  style={{ width: 24, height: 24, marginLeft: 155 }}
                />
                <Text className="mr-3 text-black-blue ml-1"
                style={{ fontFamily: 'Montserrat_600SemiBold' }}>16 dagen</Text>
              </View>
    
              {/* Nieuwe rechthoekige vorm */}
              <View
                style={{
                  width: Dimensions.get("window").width - 40,
                  marginHorizontal: 22,
                }}
                className="bg-white rounded-lg p-4 mt-4 relative"
              >
                <Text className="text-lg font-bold text-left mt-1 ml-2 text-black"
                style={{ fontFamily: 'Montserrat_700Bold' }}>
                  Compleet 9 workouts
                </Text>
    
                <View className="flex flex-row items-center justify-center mt-2">
                  <ProgressBar />
                  <Image
                    source={require("../assets/icons/Gift.png")}
                    style={{ width: 35, height: 35, marginLeft: 14 }}
                  />
                </View>
    
                <Text className=" ml-2 mt-2 font-extralight" style={{ fontFamily: 'Montserrat_400Regular'}}>3 / 9</Text>
    
                <View className="py-2 border-b border-light-blue w-full"></View>
    
                <View className="flex flex-col mt-4 ml-3 py-2">
                  <View className="flex flex-row items-center mb-3">
                    <Image source={require('./../assets/icons/emma-pf.png')} className="w-10 h-10 mr-4"/>
                    <Text className="font-semibold" style={{ fontFamily: 'Montserrat_500Medium' }}>Emma Roodwoud</Text>
                    <Text className="font-semibold ml-auto w-4 text-right mr-8" style={{ fontFamily: 'Montserrat_400Regular'}}>1</Text>
                  </View>
    
                  <View className="flex flex-row items-center mb-3">
                    <Image source={require('./../assets/icons/person-pf5.png')} className="w-10 h-10 mr-4"/>
                    <Text className="font-semibold" style={{ fontFamily: 'Montserrat_500Medium' }}>Felicia de Berg</Text>
                    <Text className="font-semibold ml-auto w-4 text-right mr-8" style={{ fontFamily: 'Montserrat_400Regular'}}>1</Text>
                  </View>
    
                  <View className="flex flex-row items-center">
                    <Image source={require('./../assets/icons/person-pf3.png')} className="w-10 h-10 mr-4"/>
                    <Text className="font-semibold" style={{ fontFamily: 'Montserrat_500Medium' }}>Kees Burger</Text>
                    <Text className="font-semibold ml-auto w-4 text-right mr-8" style={{ fontFamily: 'Montserrat_400Regular'}}>1</Text>
                  </View>
                </View>
              </View>
    
              <View className="mt-4 mb-32">
                <Text className="mx-2 text-lg font-bold text-left mt-1 ml-7 text-black-blue">
                  Berichten
                </Text>
                <FriendPosts />
                <FriendPosts />
                <FriendPosts />
              </View>
            </ScrollView>
          </View>
        </>
      );
    }
  };

  return (
    <View className="h-full bg-white">
    <View className="border-b border-gray-200">
      <View className="h-32 flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-left pt-24 px-5 text-black"
        style={{ fontFamily: 'Montserrat_700Bold' }}>
          Community
        </Text>
        <TouchableOpacity
          onPress={() => console.log("Search icon clicked")}
          className="text-2xl font-bold text-right mt-24 mr-6 text-dark-blue ml-4"
        >
          <Image source={require('./../assets/icons/searchglass.png')} className="w-6 h-6"/>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row justify-center items-center mt-6">
        <TouchableOpacity
          className={`${activeTab === 'Forum' ? 'bg-dark-blue rounded-xl w-48 h-11 bg-dark-blue border border-gray-300 px-4 py-2 mb-3 relative z-10' : 'w-48 h-11 bg-gray-100 border border-gray-100 rounded-l-md px-4 py-2 mb-3 left-1'}`}
          onPress={() => setActiveTab('Forum')}
        >
          <Text 
          className={`font-bold text-center mt-1 ${activeTab === 'Forum' ? 'text-white' : 'text-gray-500'}`}
          style={{ fontFamily: 'Montserrat_700Bold' }}>Forum</Text>
        </TouchableOpacity>
        <TouchableOpacity
           className={`${activeTab === 'Vrienden' ? 'w-48 h-11 bg-dark-blue border border-dark-blue rounded-md px-4 py-2 mb-3 relative z-10' : 'w-48 h-11 bg-gray-100 border border-gray-100 rounded-r-xl px-4 py-2 mb-3 right-1'}`}
          onPress={() => setActiveTab('Vrienden')}
        >
          <Text 
          // className="text-gray-300 font-bold text-center mt-1"
          className={`font-bold text-center mt-1 ${activeTab === 'Vrienden' ? 'text-white' : 'text-gray-500'}`}
          style={{ fontFamily: 'Montserrat_700Bold' }}>
            Vrienden
          </Text>
        </TouchableOpacity>
      </View>
    </View>
     <ScrollView style={{ height }}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

export default Community;
