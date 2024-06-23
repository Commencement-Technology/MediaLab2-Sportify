import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (email && password && displayName) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: displayName });
        navigation.navigate('Onboarding');
      } catch (err) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            setError('This e-mail is already in use');
            break;
          case 'auth/invalid-email':
            setError('Invalid e-mail address');
            break;
          case 'auth/weak-password':
            setError('Please create a password with at least 6 characters');
            break;
          default:
            setError('There has been an error, please try again');
        }
      }
    }
  };

  return (
    <NativeBaseProvider>
    <Center w="100%" flex={1} bg="white">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="xl" fontWeight="600" color="coolGray.800">
          Registeren
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="s">
          Registreer om gebruik te maken van Sportify!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Gebruikersnaam</FormControl.Label>
            <Input
              value={displayName}
              onChangeText={value => setDisplayName(value)}
            />
          </FormControl>

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
            Registreer
          </Button>

          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              Al een account?{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm"
              }}
              onPress={() => navigation.navigate('Login')}
            >
              Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    </NativeBaseProvider>
  );
}
