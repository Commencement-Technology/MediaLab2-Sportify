import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LevelTwoDetail({ navigation, route }) {
  const { onComplete } = route.params;

  const completeLevel = () => {
    onComplete();
    navigation.navigate('Home');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Level 2 Detail</Text>
      <Button title="Voltooi Level" onPress={completeLevel} />
    </View>
  );
}
