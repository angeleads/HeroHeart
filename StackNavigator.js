import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={ HomeScreen } />
            <Stack.Screen name="Chat" component={ ChatScreen } />
            <Stack.Screen name="Login" component={ LoginScreen } />
        </Stack.Navigator>
    );
};

export default StackNavigator