import React from 'react'
import { useNavigation } from "@react-navigation/core"
import { Button, Text, View } from 'react-native'

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
      <View>
        <Text> I am the Home Screen </Text>
        <Button title="Go to chat screen" onPress={() => navigation.navigate('Chat')}/>
      </View>
    );
};

export default HomeScreen
