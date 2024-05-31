import React from 'react';
import { View, Text, Button } from 'react-native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

export default function LevelOneDetail({ navigation, route }) {
  const { onComplete } = route.params;

  const completeLevel = () => {
    onComplete();
    navigation.navigate('Home');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Level 1 Detail</Text>
      <Button title="Voltooi Level" onPress={completeLevel} />
    </View>
  );
}
