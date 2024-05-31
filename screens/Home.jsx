import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View className="my-20 mx-10">
      <Text>Home</Text>

      <TouchableOpacity className="mt-10 border border-gray-200 p-5" onPress={() => navigation.navigate('Onboarding')}>
        <Text>Onboarding</Text>
      </TouchableOpacity>

    </View>
  )
}