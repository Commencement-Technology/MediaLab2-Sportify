import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function MotivationBetween() {
    const navigation = useNavigation();

  return (
    <View className="bg-white justify-center  h-screen">
      <Text style={{ fontFamily: 'Montserrat_700Bold' }}
      className="mx-auto text-3xl mb-3">Goed bezig!</Text>

        <Image
              className="w-28 h-28 mx-auto my-8"
              source={require('../../assets/images/circle.png')}
          />

      <Text style={{ fontFamily: 'Montserrat_700Bold' }}
      className="mx-auto text-2xl mb-3">Warming-up compleet</Text>
      
      <Text style={{ fontFamily: 'Montserrat_400Regular' }}
      className="mx-auto text-base mb-10 w-64 text-center">Kom op adem en ga verder als je er klaar voor bent</Text>

      <TouchableOpacity className="bg-gray-300 py-5 rounded-xl mx-5" onPress={() => navigation.navigate('ActivateStart')}>
                <Text style={{ fontFamily: 'Montserrat_600SemiBold'}}
                  className="text-black font-semibold text-center text-xl">Start</Text>
      </TouchableOpacity>
    </View>
  )
}