import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from 'react';
import {StyleSheet} from "react-native"
import Pokemon from "./Screen/Pokemon"
import HomePage from "./Screen/HomePage"
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
   const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
      drawerActiveTintColor:"darkblue",
      drawerInactiveTintColor:"orange",
      drawerActiveBackgroundColor:"white",
      drawerContentStyle:{
        backgroundColor:"black",
      }}
  } >
        <Drawer.Screen name="HomePage" component={HomePage}></Drawer.Screen>
        <Drawer.Screen name="Pokemon" component={Pokemon}></Drawer.Screen>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  
  /*box:{
    justifyContent:"center",
    backgroundColor:"plum",
  },
  Text:{
    ...Platform.select({
ios:{
  color: "red",
  fontSize:30,
  fontWeight:"bold"
},
android:{
  color: "orange",
  fontSize:200,
  fontWeight:"normal"
}
    })}*/
  }
)
  