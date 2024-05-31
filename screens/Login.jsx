import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import React, { useState } from 'react'
import { ArrowUpIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if(email && password) { 
      try {
        await signInWithEmailAndPassword(auth, email, password);

        navigation.navigate('Home');
      } catch(err) {
        setError('Ongeldige gebruikersnaam of wachtwoord.');
      }

    }
  }

  return (
    <View className="flex-1 py-20 px-10 bg-white">
      <Text>Login</Text>

      {/* Email input */}
      <Animated.View entering={FadeInDown.delay(300).duration(3000).springify()}>
           {/* Text */}
           <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 18 }}
           className="text-black font-semibold text-xl mt-10">E-mail</Text>

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
                                onPress={handleSubmit}
              >
                  <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 20 }}
                  className="text-xl font-bold text-center text-white">Login</Text>
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

         <Animated.View entering={FadeInDown.delay(700).duration(3000).springify()}>
            {/* Nog geen account */}
            <View className="flex-row justify-center">
             <TouchableOpacity className="mt-3 flex-wrap text-center"
             onPress={() => navigation.navigate('Register')}>
               <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16 }} 
               className="text-center">Don't have an account yet?</Text>

               <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 16 }} 
               className="text-center text-dark-pink underline pt-1">Sign up here</Text>
             </TouchableOpacity>
             </View>
         </Animated.View>

    </View>
  )
}