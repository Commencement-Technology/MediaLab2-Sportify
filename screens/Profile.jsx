import { View, Text, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const user = auth.currentUser;

  const handleLogout = async ()=> {
    await signOut(auth);
  }

  return (
    <View className="bg-gray-100 h-screen">
      <View className="bg-white pt-24 px-5 pb-5">
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-2xl font-bold text-left mb-0">
            Account
          </Text>
      </View>

      <View className="flex-row bg-light-blue-v2 mt-5 mx-5 rounded-xl p-5 items-center">
          <View>
            <Image
              className="w-28 h-28"
              source={require('../assets/icons/emma-pf.png')}
            />
          </View>

          <View className="flex-wrap pl-8">
            <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-base">
            {auth.currentUser.displayName}
            </Text>

            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-base">
            {auth.currentUser.email}
            </Text>

            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-base">
            3 work-outs
            </Text>

            <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-base">
            350 punten
            </Text>

          </View>
      </View>

      <View className="bg-white mt-5 mx-5 rounded-xl p-5">
        <TouchableOpacity className="flex-row justify-between items-between">
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
          className="text-base">
            Contact Support
          </Text>

          <Image
              className="w-5 h-5"
              source={require('../assets/icons/right.png')}
          />
        </TouchableOpacity>
      </View>

      <View className="bg-white mt-5 mx-5 rounded-xl p-5">
        <TouchableOpacity className="flex-row justify-between items-between" onPress={() => navigation.navigate('ChallengeCompleet')}>
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
          className="text-base">
            Settings
          </Text>

          <Image
              className="w-5 h-5"
              source={require('../assets/icons/right.png')}
          />
        </TouchableOpacity>
      </View>

      <View className="bg-white mt-5 mx-5 rounded-xl p-5">
        <TouchableOpacity className="flex-row justify-between items-between" onPress={handleLogout}>
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
          className="text-base">
            Sign out
          </Text>

          <Image
              className="w-5 h-5"
              source={require('../assets/icons/right.png')}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}