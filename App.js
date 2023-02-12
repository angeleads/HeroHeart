import React from "react";
import StackNavigator from './StackNavigator';
import { NavigationContainer } from "@react-navigation/native"
import { NativeWindStyleSheet } from "nativewind";

export default function App() {

  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
