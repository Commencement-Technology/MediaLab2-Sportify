import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function Profile() {

  const handleLogout = async ()=> {
    await signOut(auth);
  }

  return (
    <View className="my-20 mx-10">
      <Text>Profiel</Text>

      <TouchableOpacity className="border border-gray-200 p-3 mt-10" onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}