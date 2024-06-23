import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate('Home');
      } catch (err) {
        setError('Ongeldige gebruikersnaam of wachtwoord.');
      }
    }
  };

  return (
    <NativeBaseProvider>
    <Center w="100%" flex={1} bg="white">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="xl" fontWeight="600" color="coolGray.800">
          Welkom bij Sportify
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="s">
          Log in om verder te gaan
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Wachtwoord</FormControl.Label>
            <Input
              type="password"
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <Link 
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500"
              }} 
              alignSelf="flex-end" 
              mt="1"
            >
              Wachtwoord vergeten?
            </Link>
          </FormControl>
          
          {error ? (
            <Text color="red.500" textAlign="center" mb={4}>
              {error}
            </Text>
          ) : null}

          <Button 
            mt="2" 
            colorScheme="indigo" 
            onPress={handleSubmit}
          >
            Inloggen
          </Button>

          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              Ik ben een nieuw gebruiker.{" "}
            </Text>
            <Link 
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm"
              }} 
              onPress={() => navigation.navigate('Register')}
            >
              Registreren
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    </NativeBaseProvider>
  );
}

