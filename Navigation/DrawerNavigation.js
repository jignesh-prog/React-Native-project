import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { signOut,onAuthStateChanged} from "firebase/auth";
import { auth} from '../config/firebaseConfig'
import {StyleSheet,Text,Pressable} from "react-native"
import Pokemon from "../Screen/Pokemon"
import HomePage from "../Screen/HomePage"


export default function DrawerNavigation({navigation}) {
  onAuthStateChanged(auth, (user) => {
    setUser(user)
})
  const LogOut = async() =>{
    try{ await signOut(auth);
   {navigation.navigate("Login")}
   }
    catch(err){
console.error("error 404 ")
    }
  }
   const Drawer = createDrawerNavigator();
  return (
 
      <Drawer.Navigator initialRouteName='Pokemon' screenOptions={{
      drawerActiveTintColor:"darkblue",
      drawerInactiveTintColor:"white",
      drawerActiveBackgroundColor:"white",
      fontWeight:"bold",
      headerShadowVisible:"false",
      drawerContentStyle:{
        backgroundColor:"rgb(63,80,147)",
      },
      headerStyle:{
       backgroundColor:"rgb(63,80,147)",
      },
    contentStyle:{
      backgroundColor:"rgb(176,185,221)",
      color:"red"
    },
      headerRight:() =>  <Pressable onPress={LogOut}><Text style={styles.HeaderRight}>SignOut</Text></Pressable>,
    }
  } >
        <Drawer.Screen name="HomePage"  component={HomePage} ></Drawer.Screen>
        <Drawer.Screen name="Pokemon" component={Pokemon}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
HeaderRight:{
  fontWeight:"bold",
  color:"white",
  marginRight:10
}
  
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
