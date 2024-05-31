import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View className="my-20 mx-10">
      <Text>Welcome</Text>

      <TouchableOpacity className="mt-10 border border-gray-200 p-5" onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-10 border border-gray-200 p-5" onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-10 border border-gray-200 p-5" onPress={() => navigation.navigate('Onboarding')}>
        <Text>Onboarding</Text>
      </TouchableOpacity>
    </View>
  )
}