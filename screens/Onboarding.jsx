import { View, Text, ScrollView, Image, StatusBar, ImageBackground} from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from './../config/firebase'; 
import { useNavigation } from '@react-navigation/native'

export default function Onboarding() {
  const navigation = useNavigation()

  const [userId, setUserId] = useState(null);
  const [userSportPlace, setUserSportPlace] = useState('');
  const [userSportGoal, setUserSportGoal] = useState('');
  const [userSportTime, setUserSportTime] = useState('');
  const [userSportAct, setUserSportAct] = useState([]);
  const [userSportBles, setUserSportBles] = useState('');

  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const totalSteps = 6;

  const progress = (step / totalSteps) * 100;

  const renderStepIndicator = (currentStep) => {
    const indicators = [];
    for (let i = 1; i <= totalSteps - 1; i++) {
      indicators.push(
        <View key={i} className="flex-row items-center">
          <View
            className={`w-16 h-2.5 border-2 flex items-center justify-center mr-3 rounded-full ${
              i <= step ? 'border-dark-blue bg-dark-blue' : 'border-light-blue-v2 bg-light-blue-v2'
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
            setUserSportTime(userData.userSportTime || []);
            setUserSportAct(userData.userSportAct|| []);
            setUserSportBles(userData.userSportBles|| []);
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
      await setDoc(userPrefRef, { userId: userId, userSportPlace: userSportPlace, userSportGoal: userSportGoal, userSportTime: userSportTime, userSportAct: userSportAct }, { merge: true });
      navigation.navigate('Home')
      console.log('User preferences saved successfully!');
    } catch (error) {
      console.error('Error saving user preferences:', error);
    }
  };

  const iconPaths = {
    Thuis: require('./../assets/icons/home-icon.png'),
    Sportschool: require('./../assets/icons/sportschool-icon.png'),
    Buitenlucht: require('./../assets/icons/buiten-icon.png'),
    Overig: require('./../assets/icons/overig2-icon.png'),

    Afvallen: require('./../assets/icons/star-icon.png'),
    'Mentaal beter voelen': require('./../assets/icons/heart-icon.png'),
    'Spier aanmaken': require('./../assets/icons/spier-icon.png'),

    Niet: require('./../assets/icons/star-icon.png'),
    '1 of 2 keer per week': require('./../assets/icons/heart-icon.png'),
    '3 of 4 keer per week': require('./../assets/icons/spier-icon.png'),
    'Meer dan 4 keer per week': require('./../assets/icons/overig2-icon.png'),

    Voetbal: require('./../assets/icons/voetbal-icon.png'),
    Fietsen: require('./../assets/icons/biking-icon.png'),
    Tennis: require('./../assets/icons/tennis-icon.png'),
    Hardlopen: require('./../assets/icons/shoe-icon.png'),
    Dansen: require('./../assets/icons/dance-icon.png'),
    Boxen: require('./../assets/icons/boxing-icon.png'),
    Yoga: require('./../assets/icons/yoga-icon.png'),
    Tafeltennis: require('./../assets/icons/pingpong-icon.png'),
    Zwemmen: require('./../assets/icons/swimming-icon.png'),
    Wandelen: require('./../assets/icons/walking-icon.png'),
    Fitness: require('./../assets/icons/spier-icon.png'),
    Touwspringen: require('./../assets/icons/jump-icon.png'), 
    Basketbal: require('./../assets/icons/basketbal-icon.png'),

    'Pijnlijke voeten': require('./../assets/icons/foot-icon.png'),
    'Slechte knieën': require('./../assets/icons/leg-icon.png'),
    'Rugklachten': require('./../assets/icons/rug-icon.png'),
    'Gevoelige nek & schouders': require('./../assets/icons/nek-icon.png'),

  };

  return (
      <View className="flex-1 h-min-screen bg-white">
        <StatusBar/>
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
            
            {step === 6 ? (
              <Text style={{ fontFamily: 'Montserrat_700Bold' }} className="text-2xl mt-2">
                Je voorkeuren zijn opgeslagen. Deze kan je veranderen in settings.  
              </Text>
            ) : (
              <Text style={{ fontFamily: 'Montserrat_700Bold' }} className="text-2xl mt-2">
                Voordat we van start gaan, {"\n"}laten we eerst {"\n"}je voorkeuren instellen!
              </Text>
            )}
          </View>

        </View>

        {step === 1 && (
          <View className="bg-gray-100 px-5 py-5 h-full">
            <Text style={{ fontFamily: 'Montserrat_400Regular'}} className="text-base mt-4 mb-5">
              Waar wil je liever sporten?
            </Text>

            {/* Buttons */}
            <View>
              {['Thuis', 'Sportschool', 'Buitenlucht', 'Overig'].map((place) => (
                <TouchableOpacity
                  key={place}
                  className={`bg-white border-2 border-white py-3 px-5 rounded-md mb-4 ${userSportPlace === place ? 'border-2 border-light-blue' : ''}`}
                  onPress={() => setUserSportPlace(place)}
                >
                  <View className="flex-row">
                    <Image source={iconPaths[place]} style={{width: 18, height: 18}} className="mt-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular'}} className="text-lg ml-3">
                      {place}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Volgende Button */}
            <View className="flex justify-center items-center w-full mt-10">
              <TouchableOpacity 
                onPress={handleNext} 
                className={`py-5 rounded-lg w-96 ${userSportPlace ? 'bg-light-blue' : 'bg-[#D3EAFB]'}`}
                disabled={!userSportPlace}
              >
                <Text 
                  style={{ fontFamily: 'Montserrat_700Bold', fontSize: 20 }} 
                  className={`text-xl font-bold text-white text-center ${userSportPlace ? 'text-dark-blue' : 'text-gray-400'}`}
                >
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
              {['Afvallen', 'Mentaal beter voelen', 'Spier aanmaken', 'Overig'].map((goal) => (
                <TouchableOpacity
                  key={goal}
                  className={`bg-white border-2 border-white py-3 px-5 rounded-md mb-4 ${userSportGoal === goal ? 'border-2 border-light-blue' : ''}`}
                  onPress={() => setUserSportGoal(goal)}
                >
                  <View className="flex-row">
                    <Image source={iconPaths[goal]} style={{width: 18, height: 18}} className="mt-1"/>
                    <Text style={{ fontFamily: 'Montserrat_400Regular'}} className="text-lg ml-3">
                      {goal}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Volgende Button */}
            <View className="flex justify-center items-center w-full mt-10">
              <TouchableOpacity 
                onPress={handleNext} 
                className={`py-5 rounded-lg w-96 ${userSportGoal ? 'bg-light-blue' : 'bg-[#D3EAFB]'}`}
                disabled={!userSportGoal}
              >
                <Text 
                  style={{ fontFamily: 'Montserrat_700Bold', fontSize: 20 }} 
                  className={`text-xl font-bold text-white text-center ${userSportGoal ? 'text-dark-blue' : 'text-gray-400'}`}
                >
                  Volgende
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {step === 3 && ( 
         <View className="bg-gray-100 px-5 py-5 h-full">
         <Text style={{ fontFamily: 'Montserrat_400Regular'}}
         className="text-base mt-4 mb-5">
           Hoe vaak beweeg je momenteel per week?
         </Text>

         {/* Buttons */}
         <View>
           {['Niet', '1 of 2 keer per week', '3 of 4 keer per week', 'Meer dan 4 keer per week'].map((times) => (
             <TouchableOpacity
               key={times}
               className={`bg-white border-2 border-white py-3 px-5 rounded-md mb-4 ${userSportTime === times ? 'border-2 border-light-blue' : ''}`}
               onPress={() => setUserSportTime(times)}
             >
               <View className="flex-row">
                 <Image source={iconPaths[times]} style={{width: 18, height: 18}} className="mt-1"/>
                 <Text style={{ fontFamily: 'Montserrat_400Regular'}} className="text-lg ml-3">
                   {times}
                 </Text>
               </View>
             </TouchableOpacity>
           ))}
         </View>

         {/* Volgende Button */}
         <View className="flex justify-center items-center w-full mt-10">
           <TouchableOpacity 
             onPress={handleNext} 
             className={`py-5 rounded-lg w-96 ${userSportTime ? 'bg-light-blue' : 'bg-[#D3EAFB]'}`}
             disabled={!userSportTime}
           >
             <Text 
               style={{ fontFamily: 'Montserrat_700Bold', fontSize: 20 }} 
               className={`text-xl font-bold text-white text-center ${userSportTime ? 'text-dark-blue' : 'text-gray-400'}`}
             >
               Volgende
             </Text>
           </TouchableOpacity>
         </View>
       </View>
        )}

        {step === 4 && ( 
          <View className="bg-gray-100 px-5 py-5 h-full">
          <Text style={{ fontFamily: 'Montserrat_400Regular'}} className="text-base mt-4 mb-5">
            Welke activiteiten vind je op dit moment leuk om te doen?
          </Text>

           {/* Buttons */}
           <View style={{ height: 270 }}> 
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View className="flex-row flex-wrap">
                {['Voetbal', 'Fietsen', 'Tennis', 'Hardlopen', 'Dansen', 'Boxen', 'Yoga', 'Tafeltennis', 'Zwemmen', 'Wandelen', 'Fitness', 'Touwspringen', 'Basketbal'].map((act) => (
                  <TouchableOpacity
                    key={act}
                    className={`bg-white border-2 border-white py-2 px-5 rounded-md mb-4 mr-4 ${userSportAct.includes(act) ? 'border-2 border-light-blue' : ''}`}
                    onPress={() => {
                      setUserSportAct(prevAct => {
                        if (prevAct.includes(act)) {
                          return prevAct.filter(g => g !== act);
                        } else {
                          return [...prevAct, act];
                        }
                      });
                    }}
                  >
                    <View className="flex-row">
                      <Image source={iconPaths[act]} style={{ width: 18, height: 18 }} className="mt-1" />
                      <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="text-lg ml-3">
                        {act}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Volgende Button */}
          <View className="flex justify-center items-center w-full mt-10">
           <ImageBackground source={require('./../assets/images/button-shadow.png')} resizeMode="cover" 
           style={{ height: '100%'}}>
            <TouchableOpacity 
              onPress={handleNext} 
              className={`py-5 rounded-lg w-96 mb-10 ${userSportAct.length > 0 ? 'bg-light-blue' : 'bg-[#D3EAFB]'}`}
              disabled={userSportAct.length === 0}
            >
              <Text 
                style={{ fontFamily: 'Montserrat_700Bold', fontSize: 20 }} 
                className={`text-xl font-bold text-white text-center ${userSportAct.length > 0 ? 'text-dark-blue' : 'text-gray-400'}`}
              >
                Volgende
              </Text>
            </TouchableOpacity>
            </ImageBackground>
          </View>


        </View>
        )}

        {step === 5 && ( 
         <View className="bg-gray-100 px-5 py-5 h-full">
         <Text style={{ fontFamily: 'Montserrat_400Regular'}}
         className="text-base mt-4 mb-5">
           Heb je blessures of gezondheidsproblemen?
         </Text>

         {/* Buttons */}
         <View>
           {['Pijnlijke voeten', 'Slechte knieën', 'Rugklachten', 'Gevoelige nek & schouders', 'Overig'].map((bles) => (
             <TouchableOpacity
               key={bles}
               className={`bg-white border-2 border-white py-3 px-5 rounded-md mb-4 ${userSportBles === bles ? 'border-2 border-light-blue' : ''}`}
               onPress={() => setUserSportBles(bles)}
             >
               <View className="flex-row">
                 <Image source={iconPaths[bles]} style={{width: 18, height: 18}} className="mt-1"/>
                 <Text style={{ fontFamily: 'Montserrat_400Regular'}} className="text-lg ml-3">
                   {bles}
                 </Text>
               </View>
             </TouchableOpacity>
           ))}
         </View>

         {/* Volgende Button */}
         <View className="flex justify-center items-center w-full mt-10">
           <TouchableOpacity 
             onPress={handleNext} 
             className={`py-5 rounded-lg w-96 ${userSportBles ? 'bg-light-blue' : 'bg-[#D3EAFB]'}`}
             disabled={!userSportBles}
           >
             <Text 
               style={{ fontFamily: 'Montserrat_700Bold', fontSize: 20 }} 
               className={`text-xl font-bold text-white text-center ${userSportBles ? 'text-dark-blue' : 'text-gray-400'}`}
             >
               Volgende
             </Text>
           </TouchableOpacity>
         </View>
       </View>
        )}

        {step === 6 && ( 
         <View className="bg-gray-100 px-5 py-5 h-full">
         <Text style={{ fontFamily: 'Montserrat_400Regular'}}
         className="text-base mt-4 mb-5">
           Zet je zelfverzekerde schoenen aan en laten we samen beginnen. 👟 Elke stap telt, en samen maken we bewegen weer leuk!
         </Text>

         <Image source={require('./../assets/images/onboarding-kat.png')} className="w-[390] h-[240] rounded-xl"/>


         {/* Volgende Button */}
         <View className="flex justify-center items-center w-full mt-10">
           <TouchableOpacity 
             onPress={() => navigation.navigate('Home')} 
             className={`py-5 rounded-lg w-96 ${userSportTime ? 'bg-light-blue' : 'bg-[#D3EAFB]'}`}
             disabled={!userSportTime}
           >
             <Text 
               style={{ fontFamily: 'Montserrat_700Bold', fontSize: 20 }} 
               className={`text-xl font-bold text-white text-center ${userSportTime ? 'text-dark-blue' : 'text-gray-400'}`}
             >
               Lets go!
             </Text>
           </TouchableOpacity>
         </View>
       </View>
        )}

      </View>
  )
}