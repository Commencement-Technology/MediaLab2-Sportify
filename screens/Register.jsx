import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import React, { useState } from 'react'
import { ArrowLeftIcon, ArrowUpIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'


export default function Register() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState(''); // Voeg displayName toe
  const [error, setError] = useState('');

  const handlesubmit = async () => {
    if(email && password && displayName) { // Controleer of displayName is ingevuld
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update profile met displayName
        await updateProfile(user, { displayName: displayName });
        navigation.navigate('Onboarding');

      } catch(err) {
        switch(err.code) {
          case 'auth/email-already-in-use':
            setError('This e-mail is already in use');
            break;
          case 'auth/invalid-email':
            setError('Invalid e-mail adress');
            break;
          case 'auth/weak-password':
            setError('Please create an password with at least 6 characters');
            break;
          default:
            setError('There has been an error, please try again');
        }
      }
    }
  }
     
  return (
    <View className="flex-1 py-20 px-10 bg-white">
      
      <Text>Register</Text>

       {/* Username */}
       <Animated.View entering={FadeInDown.delay(200).duration(3000).springify()}>
              {/* Text */}
              <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 18 }}
              className="text-black font-semibold pb-2">Username</Text>

              {/* Input */}
              <View className="flex-row px-4 py-2 bg-white text-gray-700 rounded-md border border-gray-200 text-l font-medium mb-4">
                  <Image className="w-4 h-4 mr-3" style={{ tintColor: "black"}}
                                              source={require('./../assets/icons/profile-full.png')} />
                  <TextInput 
                      className="flex-1"
                      placeholder=''
                      value={displayName}
                      onChangeText={value => setDisplayName(value)}
                  >
                  </TextInput>
                </View>

       </Animated.View>

      {/* Email input */}
      <Animated.View entering={FadeInDown.delay(300).duration(3000).springify()}>
              {/* Text */}
              <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 18 }}
              className="text-black font-semibold text-xl mt-5">E-mail</Text>

              {/* Input */}
              <View className="flex-row px-4 py-3 bg-white text-gray-700 rounded-md border border-gray-200 text-l font-medium mb-4 w-full">
                <Image className="w-4 h-4 mr-4" style={{ tintColor: "black"}}
                                            source={require('./../assets/icons/mail.png')} />
                <TextInput 
                    className="flex-1"
                    placeholder=''
                    value={email}
                    onChangeText={value => setEmail(value)}
                >
                </TextInput>
              </View>
      </Animated.View>

      {/* Wachtwoord input */}
      <Animated.View entering={FadeInDown.delay(400).duration(3000).springify()}>
              {/* Text */}
              <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 18 }}
              className="text-black font-semibold text-xl">Password</Text>

              {/* Input */}
              <View className="flex-row px-4 py-2.5 bg-white text-gray-700 rounded-md border border-gray-200 text-l font-medium mb-10 w-full">
                <Image className="w-5 h-5 mr-3" style={{ tintColor: "black"}}
                                            source={require('./../assets/icons/lock.png')} />
                <TextInput 
                    className="flex-1"
                    secureTextEntry
                    placeholder=''
                    value={password}
                    onChangeText={value => setPassword(value)}
                >
                </TextInput>
              </View>
      </Animated.View>

      {error ? <Text className="text-center text-black-500 mb-6 -mt-6">{error}</Text> : null}

      <Animated.View entering={FadeInDown.delay(500).duration(3000).springify()}>
                <TouchableOpacity className="py-3 bg-dark-blue rounded-full mb-5 w-60 flex mx-auto"
                                  onPress={handlesubmit}
                >
                    <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 20 }}
                    className="text-xl font-bold text-center text-white">Sign up</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(3000).springify()}>
              <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 20 }}
              className="text-center mb-5">Or</Text>
              <View className="flex-row justify-center space-x-8 mb-5">

                {/* Google */}
                <TouchableOpacity className="p-3 bg-gray-100 rounded-2xl">
                  <Image source={require('./../assets/icons/google.png')}
                    className="w-10 h-10" />
                </TouchableOpacity>

                {/* Facebook */}
                <TouchableOpacity className="p-3 bg-gray-100 rounded-2xl">
                  <Image source={require('./../assets/icons/facebook.png')}
                    className="w-10 h-10" />
                </TouchableOpacity>

                {/* Apple */}
                <TouchableOpacity className="p-3 bg-gray-100 rounded-2xl">
                  <Image source={require('./../assets/icons/apple.png')}
                    className="w-10 h-10" />
                </TouchableOpacity>
                
              </View>
            </Animated.View>

    </View>

  )
}