import { View, Text, Image } from 'react-native'
import React from 'react'


export default function Trend() {
  const ProgressBar = () => {
    return (
      <View className='h-2 w-[200] bg-gray-300 rounded-full overflow-hidden'>
        <View className='h-full bg-dark-blue w-20 rounded-full'  />
      </View>
    );
  };

  return (
    <View className="bg-gray-100 h-screen">

      {/* Top */}
      <View className="bg-white pt-24 px-5 pb-5">
          <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-2xl font-bold text-left mb-0">
            Statistieken
          </Text>
      </View>

       {/* Score */}
      <View className="bg-white px-5 py-5 pb-7 m-5 rounded-xl">
        <View className="flex-row items-center">
         <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-lg font-bold text-left mb-0">
            Score
         </Text>

         <Image source={require('./../assets/icons/info.png')} className="w-4 h-4 ml-2"/>
        </View>

        <View className="flex-row items-center mt-4 justify-between">
         <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-md font-bold text-left mb-0">
            350P
         </Text>

         <ProgressBar/>

         <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-md font-bold text-left mb-0">
            Total 721P
         </Text>
        </View>
      </View>

      {/* Calorieen */}
      <View className="bg-white px-5 py-5 pb-7 mx-5 mt-2 rounded-xl">
        <View className="flex-row items-center">
         <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-lg font-bold text-left mb-0">
            Calorieën deze maand
         </Text>

         <Image source={require('./../assets/icons/info.png')} className="w-4 h-4 ml-2"/>
        </View>

        <View className="flex-row items-center mt-4 justify-between">
         <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-md font-bold text-left mb-0">
            350kcal
         </Text>

         <ProgressBar/>

         <Text style={{ fontFamily: 'Montserrat_400Regular' }}
            className="text-md font-bold text-left mb-0">
            900kcal
         </Text>
        </View>
      </View>

      <View className="mx-5 mt-5">
        <View className="flex-row items-center">
         <Text style={{ fontFamily: 'Montserrat_700Bold' }}
            className="text-lg font-bold text-left mb-0">
            Prestaties
         </Text>

         <Image source={require('./../assets/icons/info.png')} className="w-4 h-4 ml-2"/>
        </View>
      </View>

    </View>
  )
}