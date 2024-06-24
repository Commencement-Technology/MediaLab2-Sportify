import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Progress, Box, Center, NativeBaseProvider } from 'native-base';

export default function Trend() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState({ title: '', description: '', image: null });
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const badges = [
    {
      title: 'Rust dag',
      description: 'Door regelmatig rust te nemen, voorkom je blessures en blijf je op lange termijn fit en gezond. Luister naar je lichaam en geef het de rust die het nodig heeft. ',
      image: require('./../assets/images/badge-rust.png'),
    },
    {
      title: 'Afmaker',
      description: 'Een afmaker doe je na de main work-out. Door een afmaker te doen kun je de spieren de volgende dag meer rust geven. ',
      image: require('./../assets/images/badge-afmaker.png'),
    },
    {
      title: 'Kcal',
      description: 'Je hebt de kcal badge behaald!',
      image: require('./../assets/images/badge-kcal.png'),
    },
    {
      title: 'Uitdaging',
      description: 'Je hebt de uitdaging badge behaald!',
      image: require('./../assets/images/badge-uitdaging.png'),
    },
    {
      title: 'Community',
      description: 'Je hebt de community badge behaald!',
      image: require('./../assets/images/badge-community.png'),
    },
    {
      title: 'Fietsen',
      description: 'Je hebt de fietsen badge behaald!',
      image: require('./../assets/images/badge-fietsen.png'),
    },
    {
      title: 'Punten',
      description: 'Je hebt de punten badge behaald!',
      image: require('./../assets/images/badge-punten.png'),
    },
    {
      title: 'Tennis',
      description: 'Je hebt de tennis badge behaald!',
      image: require('./../assets/images/badge-tennis.png'),
    },
    {
      title: 'Friends',
      description: 'Je hebt de friends badge behaald!',
      image: require('./../assets/images/badge-friends.png'),
    },
  ];

  const openBadgeModal = (badge) => {
    setSelectedBadge(badge);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const ProgressOne = () => {
    return <Center w="100%">
        <Box w="90%" maxW="400">
          <Progress bg="coolGray.100" _filledTrack={{
          bg: "#122D71"
        }} value={50} mx="4" />
        </Box>
      </Center>;
  };

  const ProgressTwo = () => {
    return <Center w="100%">
        <Box w="90%" maxW="400">
          <Progress bg="coolGray.100" _filledTrack={{
          bg: "#122D71"
        }} value={30} mx="4" />
        </Box>
      </Center>;
  };

  return (
    <View className="bg-gray-100 h-screen">
      {/* Top */}
      <View className="bg-white pt-24 px-5 pb-5 text-black-blue">
        <Text style={{ fontFamily: 'Montserrat_700Bold' }}
          className="text-2xl font-bold text-left mb-0">
          Statistieken
        </Text>
      </View>

      <ScrollView>
        {/* Score */}
        <View className="bg-white px-5 py-5 pb-7 m-5 rounded-xl">
          <View className="flex-row items-center">
            <Text style={{ fontFamily: 'Montserrat_700Bold' }}
              className="text-lg font-bold text-left mb-0">
              Score
            </Text>
            <Image source={require('./../assets/icons/info.png')} className="w-4 h-4 ml-2" />
          </View>
          <View className="flex-row items-center mt-4 justify-between">
            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
              className="text-md font-bold text-left mb-0">
              350P
            </Text>

            <NativeBaseProvider>
              <ProgressOne />
            </NativeBaseProvider>

            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
              className="text-md font-bold text-left mb-0">
              Total 721P
            </Text>
          </View>
        </View>

        {/* Calorieën */}
        <View className="bg-white px-5 py-5 pb-7 mx-5 mt-2 rounded-xl">
          <View className="flex-row items-center">
            <Text style={{ fontFamily: 'Montserrat_700Bold' }}
              className="text-lg font-bold text-left mb-0">
              Calorieën deze maand
            </Text>
            <Image source={require('./../assets/icons/info.png')} className="w-4 h-4 ml-2" />
          </View>
          <View className="flex-row items-center mt-4 justify-between">
            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
              className="text-md font-bold text-left mb-0">
              350kcal
            </Text>

            <NativeBaseProvider>
              <ProgressTwo/>
            </NativeBaseProvider>
           
            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
              className="text-md font-bold text-left mb-0">
              900kcal
            </Text>
          </View>
        </View>

        {/* Prestaties */}
        <View className="mx-5 mt-5">
          {/* Title */}
          <View className="flex-row items-center">
            <Text style={{ fontFamily: 'Montserrat_700Bold' }}
              className="text-lg font-bold text-left mb-0">
              Prestaties
            </Text>
            <TouchableOpacity onPress={toggleDescriptionVisibility}>
              <Image source={require('./../assets/icons/info.png')} className="w-4 h-4 ml-2" />
            </TouchableOpacity>
          </View>
          {isDescriptionVisible && (
            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
              className="mt-2 text-xs">
             Tijdens de verschillende uitdagingen die je doet, kan je badges verdienen. Deze kun je hieronder terugvinden. Klik op een prestatie om te zien hoe je hem verdient hebt. 
            </Text>
          )}

          <View className="flex-row mt-5">
            <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}>Behaald</Text>
            <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}
              className="text-md font-bold text-left text-dark-blue-v2 mb-0"> 6/9</Text>
          </View>

          {/* Badges part 1 */}
          <View className="flex-row justify-between mt-5">
            <TouchableOpacity onPress={() => openBadgeModal(badges[0])}>
              <Image source={require('./../assets/images/badge-rust.png')} className="w-[110] h-[125]" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openBadgeModal(badges[1])}>
              <Image source={require('./../assets/images/badge-afmaker.png')} className="w-[110] h-[125]" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openBadgeModal(badges[2])}>
              <Image source={require('./../assets/images/badge-kcal.png')} className="w-[120] h-[120]" />
            </TouchableOpacity>
          </View>

          {/* Badges part 2 */}
          <View className="flex-row justify-between mt-5">
            <TouchableOpacity onPress={() => openBadgeModal(badges[3])}>
              <Image source={require('./../assets/images/badge-uitdaging.png')} className="w-[110] h-[125]" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openBadgeModal(badges[4])}>
              <Image source={require('./../assets/images/badge-community.png')} className="w-[120] h-[125]" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openBadgeModal(badges[5])}>
              <Image source={require('./../assets/images/badge-fietsen.png')} className="w-[120] h-[130]" />
            </TouchableOpacity>
          </View>

          <View className="flex-row mt-5">
            <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}>Nog te behalen</Text>
            <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}
              className="text-md font-bold text-left text-dark-blue-v2 mb-0"> 3/9</Text>
          </View>

          {/* Badges part 3 */}
          <View className="flex-row justify-between mt-5 mb-32">
            <TouchableOpacity onPress={() => openBadgeModal(badges[6])}>
              <Image source={require('./../assets/images/badge-punten.png')} className="w-[120] h-[125]" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openBadgeModal(badges[7])}>
              <Image source={require('./../assets/images/badge-tennis.png')} className="w-[120] h-[125]" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openBadgeModal(badges[8])}>
              <Image source={require('./../assets/images/badge-friends.png')} className="w-[120] h-[130]" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          className="flex-1 justify-center items-center">
          <View className="bg-gray-100 mx-5 rounded-xl">

            <View className="p-5 text-center justify-center items-center bg-light-blue-v2 rounded-t-xl">
              <Text style={{ fontFamily: 'Montserrat_700Bold' }}
                className="text-xl font-bold text-left mb-0 text-black-blue">
                {selectedBadge.title}
              </Text>
              <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}
                className="text-xs font-bold text-left mt-2 text-black-blue">
                Behaald op 21 juni 2024
              </Text>
            </View>

            <View className="justify-center items-center bg-white mx-5 rounded-xl mb-1 mt-5 p-5 w-[300]">
              <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="text-center">{selectedBadge.description}</Text>

              <Image source={selectedBadge.image} className="w-[120] h-[130] mt-5" />
            </View>
            <TouchableOpacity onPress={handleModalClose} className="bg-light-blue mx-5 py-4 mb-5 mt-3 rounded-xl">
              <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}
                className="text-black-blue font-semibold text-center text-xl">Begrepen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
