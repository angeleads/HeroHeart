import React from 'react'
import { useNavigation } from "@react-navigation/core"
import { Button, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
      <SafeAreaView >

        <View className="flex-row items-center justify-between px-5">
          <TouchableOpacity>
            <Image
            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROx3cUIyo9522ymTIlJPScWQeVpC5iKnimg&usqp=CAU"}}
            className="h-10 w-10 rounded-full"/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
            source={ require('../public/logo.png')}
            className="h-14 w-14"/>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => navigation.navigate("Chat") }>
            <Ionicons name='chatbubbles-sharp' size={ 30 } color="#e84878"/>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
};

 /*<Text className="text-rose-700"> I am the Home Screen </Text>
<Button  title="Go to chat screen" onPress={() => navigation.navigate('Chat')}/>*/

export default HomeScreen
