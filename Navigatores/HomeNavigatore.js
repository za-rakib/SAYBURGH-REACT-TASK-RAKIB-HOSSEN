import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import SingleMovie from "../components/singleMovie/SingleMovie";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  
  return (
      
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Single Movie" component={SingleMovie} />
    </Stack.Navigator>
  );
}


