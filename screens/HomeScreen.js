import React from 'react'
import { useNavigation } from "@react-navigation/core"
import { Button, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    firstName: "Theo",
    lastName: "Pawelec",
    occupation: "Software Developer",
    photoURL: "https://media.licdn.com/dms/image/C4D03AQETd0DNFHIudg/profile-displayphoto-shrink_200_200/0/1596456033039?e=1681344000&v=beta&t=OiRh28DvRlu9LGt_tB6RdAmdFoDpzXn8F4bDqD5nstY",
    interests: "I love playing LOL and I can't help but be the best APE ever made",
    age: 27,
    id: 1,
  },
  {
    firstName: "Rosa",
    lastName: "Barchein",
    occupation: "Bitch idk at this point",
    photoURL: "https://www.epitech-it.es/wp-content/uploads/2022/11/Rosa-Barchein-BW.jpg",
    interests: "I hate my life so I have to make everyone else's worse than mine",
    age: 86,
    id: 2,
  },
  {
    firstName: "Corentin",
    lastName: "Coutret-Rozet",
    occupation: "The queen herself",
    photoURL: "https://i.pinimg.com/280x280_RS/78/f1/2a/78f12adca94da4621638d8a9736fed56.jpg",
    interests: "Gay and slay",
    age: 22,
    id: 3,
  },
]

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
      <SafeAreaView className="flex-1">

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

          <View className="flex-1 -mt-6">
            <Swiper containerStyle={{ backgroundColor: "transparent" }}
              cards={DUMMY_DATA}
              renderCard={(card) => (
                <View key={card.id} className="relative bg-white h-3/4 rounded-xl" >
                  <Image className="absolute top-0 h-full w-full rounded-xl"
                  source={{ uri: card.photoURL }}/>
                  <Text>{card.firstName}</Text>
                </View>
              )}
            />
          </View>


      </SafeAreaView>
    );
};

export default HomeScreen
