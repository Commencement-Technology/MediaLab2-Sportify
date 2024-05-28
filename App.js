import React from "react";
import { NativeBaseProvider, Box, Input, Button, IconButton } from "native-base";
import { View } from "react-native";

export default function App() {
  const Example = () => {
    return (
      <Box alignItems="center">
        <Input mx="3" placeholder="Input" w="100%" />
      </Box>
    );
  };

  const Hallo = () => {
    return <Box alignItems="center">
        <Button onPress={() => console.log("hello world")}>Click Me</Button>
      </Box>;
  };

  return (
    <NativeBaseProvider>
      <View className="flex-1 mt-20 mx-10">
        <Example />
        <Hallo />
      </View>
    </NativeBaseProvider>
  );
}