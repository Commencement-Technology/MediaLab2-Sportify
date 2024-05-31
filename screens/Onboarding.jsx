import { View, Text, ScrollView, Image, StatusBar} from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from './../config/firebase'; 
import { useNavigation } from '@react-navigation/native'

export default function Onboarding() {
  const navigation = useNavigation()

  const [userId, setUserId] = useState(null);
  const [userSportPlace, setUserSportPlace] = useState('');
  const [userSportGoal, setUserSportGoal] = useState([]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: '',
    step2Data: '',
    step3Data: '',
  });

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const totalSteps = 3;

  const progress = (step / totalSteps) * 100;

  const renderStepIndicator = (currentStep) => {
    const indicators = [];
    for (let i = 1; i <= totalSteps; i++) {
      indicators.push(
        <View key={i} className="flex-row items-center">
          <View
            className={`w-14 h-2.5 border-2 flex items-center justify-center mr-3 rounded-full ${
              i <= step ? 'border-gray-500 bg-gray-500' : 'border-gray-200 bg-gray-200'
            }`}
          >
          </View>
        </View>
      );
    }
    return indicators;
  };

  useEffect(() => {
    // Haal de gebruikers-id op zodra de gebruiker is ingelogd
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
  
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Haal de voorkeuren van de gebruiker op uit de database wanneer de component wordt geladen
    const fetchUserPreferences = async () => {
      try {
        if (userId) { // Controleer of userId niet null is
          const userPrefRef = doc(db, 'userPreferences', userId);
          const userPrefDoc = await getDoc(userPrefRef);
          if (userPrefDoc.exists()) {
            const userData = userPrefDoc.data();
            setUserSportPlace(userData.userSportPlace || []);
            setUserSportGoal(userData.userSportGoal || []);
          }
        }
      } catch (error) {
        console.error('Error getting user preferences:', error);
      }
    };
  
    fetchUserPreferences();
  }, [userId]);

  const handleSavePreferences = async () => {
    try {
      const userPrefRef = doc(db, 'userPreferences', userId);
      await setDoc(userPrefRef, { userId: userId, userSportPlace: userSportPlace, userSportGoal: userSportGoal }, { merge: true });
      navigation.navigate('Home')
      console.log('User preferences saved successfully!');
    } catch (error) {
      console.error('Error saving user preferences:', error);
    }
  };

  return (
    <ScrollView className="bg-white">
      <StatusBar/>
      <View className="flex-1 h-min-screen">
        <View className="pt-10 pb-10 px-5">
          
          {/* Progress Bar */}
          <View className="flex-row mt-14 mb-9">
            {renderStepIndicator(step)}
          </View>

          <View>
            <TouchableOpacity onPress={handlePrevious}>
              <Image source={require('../assets/icons/arrow-left.png')} style={{width: 19, height: 15}}/>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{ fontFamily: 'Montserrat_400Regular'}}
            className="text-base mt-8">
              Welkom bij Sportify!
            </Text>
            
            <Text style={{ fontFamily: 'Montserrat_700Bold'}}
            className="text-2xl mt-2">
              Voordat we van start gaan, {"\n"} laten we eerst {"\n"} je voorkeuren instellen!
            </Text>
          </View>

        </View>

        {step === 1 && ( 
          <View className="bg-gray-100 px-5 py-5 h-full">
            <Text style={{ fontFamily: 'Montserrat_400Regular'}}
            className="text-base mt-4 mb-5">
              Waar wil je liever sporten?
            </Text>

            {/* Buttons */}
            <View>
              <TouchableOpacity 
              className={`bg-white py-4 px-5 rounded-md mb-4 mb-2" ${userSportPlace === 'Thuis' && 'border-2 border-light-blue'}`}
              onPress={() => setUserSportPlace('Thuis')}>
                <View className="flex-row">
                  <Image source={require('./../assets/icons/home-icon.png')} style={{width: 18, height: 18}}/>

                  <Text style={{ fontFamily: 'Montserrat_400Regular'}}
                  className="text-lg ml-3">
                    Thuis
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
              className={`bg-white py-4 px-5 rounded-md mb-4 mb-2" ${userSportPlace === 'Sportschool' && 'border-2 border-light-blue'}`}
              onPress={() => setUserSportPlace('Sportschool')}>
                <View className="flex-row">
                  <Image source={require('./../assets/icons/sportschool-icon.png')} style={{width: 18, height: 18}}/>

                  <Text style={{ fontFamily: 'Montserrat_400Regular'}}
                  className="text-lg ml-3">
                    In de sportschool
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
              className={`bg-white py-4 px-5 rounded-md mb-4 mb-2" ${userSportPlace === 'Buitenlucht' && 'border-2 border-light-blue'}`}
              onPress={() => setUserSportPlace('Buitenlucht')}>
                <View className="flex-row">
                  <Image source={require('./../assets/icons/buiten-icon.png')} style={{width: 18, height: 18}}/>

                  <Text style={{ fontFamily: 'Montserrat_400Regular'}}
                  className="text-lg ml-3">
                    In de buitenlucht
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
              className={`bg-white py-4 px-5 rounded-md mb-4 mb-2" ${userSportPlace === 'Overig' && 'border-2 border-light-blue'}`}
              onPress={() => setUserSportPlace('Overig')}>
                <View className="flex-row">
                  <Image source={require('./../assets/icons/overig-icon.png')} style={{width: 18, height: 18}}/>

                  <Text style={{ fontFamily: 'Montserrat_400Regular'}}
                  className="text-lg ml-3">
                    Overig
                  </Text>
                </View>
              </TouchableOpacity>
              
            </View>

            {/* Volgende Button */}
            <View className="flex justify-center items-center w-full mt-10">
              <TouchableOpacity 
                onPress={handleNext} 
                className="py-5 bg-gray-300 rounded-lg w-96">
                <Text 
                  style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 20 }} 
                  className="text-xl font-bold text-black text-center">
                  Volgende
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {step === 2 && ( 
        <View className="bg-gray-100 px-5 py-5 h-full">
            <Text style={{ fontFamily: 'Montserrat_400Regular'}}
            className="text-base mt-4 mb-5">
              Wat is je doel met het bewegen?
            </Text>

            {/* Buttons */}
            <View>
              <TouchableOpacity 
              className={`bg-white py-4 px-5 rounded-md mb-4 mb-2" ${userSportGoal === 'Afvallen' && 'border-2 border-light-blue'}`}
              onPress={() => setUserSportGoal('Afvallen')}>
                <View className="flex-row">
                  <Image source={require('./../assets/icons/star-icon.png')} style={{width: 18, height: 18}}/>

                  <Text style={{ fontFamily: 'Montserrat_400Regular'}}
                  className="text-lg ml-3">
                    Afvallen
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
              className={`bg-white py-4 px-5 rounded-md mb-4 mb-2" ${userSportGoal === 'Mentaal' && 'border-2 border-light-blue'}`}
              onPress={() => setUserSportGoal('Mentaal')}>
                <View className="flex-row">
                  <Image source={require('./../assets/icons/heart-icon.png')} style={{width: 18, height: 18}}/>

                  <Text style={{ fontFamily: 'Montserrat_400Regular'}}
                  className="text-lg ml-3">
                    Mentaal beter voelen
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
              className={`bg-white py-4 px-5 rounded-md mb-4 mb-2" ${userSportGoal === 'Spieren' && 'border-2 border-light-blue'}`}
              onPress={() => setUserSportGoal('Spieren')}>
                <View className="flex-row">
                  <Image source={require('./../assets/icons/spier-icon.png')} style={{width: 18, height: 18}}/>

                  <Text style={{ fontFamily: 'Montserrat_400Regular'}}
                  className="text-lg ml-3">
                    Spieren aanmaken
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
              className={`bg-white py-4 px-5 rounded-md mb-4 mb-2" ${userSportGoal === 'Overig' && 'border-2 border-light-blue'}`}
              onPress={() => setUserSportGoal('Overig')}>
                <View className="flex-row">
                  <Image source={require('./../assets/icons/overig2-icon.png')} style={{width: 18, height: 18}}/>

                  <Text style={{ fontFamily: 'Montserrat_400Regular'}}
                  className="text-lg ml-3">
                    Overig
                  </Text>
                </View>
              </TouchableOpacity>
              
            </View>

            {/* Volgende Button */}
            <View className="flex justify-center items-center w-full mt-10">
              <TouchableOpacity 
                onPress={handleNext} 
                className="py-5 bg-gray-300 rounded-lg w-96">
                <Text 
                  style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 20 }} 
                  className="text-xl font-bold text-black text-center">
                  Volgende
                </Text>
              </TouchableOpacity>
            </View>

            {/* <View className="flex justify-center items-center w-full mt-5">
              <TouchableOpacity 
                onPress={handlePrevious} 
                className="py-5 bg-gray-200 rounded-lg w-96">
                <Text 
                  style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 20 }} 
                  className="text-xl font-bold text-black text-center">
                  Vorige
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        )}

        {step === 3 && ( 
        <View>
          <Text className="text-center">Testing 3</Text>

          <View className="flex justify-center items-center">
            <TouchableOpacity 
              onPress={handleNext} 
              className="py-2.5 bg-dark-pink rounded-full mt-10 w-60 shadow-md">
              <Text 
                style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 17 }} 
                className="text-xl font-bold text-center text-black">
                Next
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePrevious} className="mx-auto shadow-md">
              <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 17 }} className="pt-0 color-gray-500">
                Go back
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex justify-center items-center w-full mt-10">
              <TouchableOpacity 
                onPress={handleSavePreferences} 
                className="py-5 bg-gray-300 rounded-lg w-96">
                <Text 
                  style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 20 }} 
                  className="text-xl font-bold text-black text-center">
                  Save
                </Text>
              </TouchableOpacity>
            </View>
       </View>
        )}

      </View>
    </ScrollView>
  )
}