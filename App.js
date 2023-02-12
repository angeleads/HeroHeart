import React from "react";
import StackNavigator from './StackNavigator';
import { NavigationContainer } from "@react-navigation/native"
import { NativeWindStyleSheet } from "nativewind";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {

  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
