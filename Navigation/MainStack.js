import 'react-native-gesture-handler';
import {StyleSheet,} from "react-native"
import SignInScreen from "../Screen/SignInScreen/SignInScreen"
import { createStackNavigator } from "@react-navigation/stack";
import  SignUpScreen  from "../Screen/SignInScreen/SignUpScreen";
import DrawerNavigation from "./DrawerNavigation";
export default function MainStack() {
  const Stack = createStackNavigator()
  return (
      <Stack.Navigator initialRouteName='Login'screenOptions={{ headerShown:false}} >
     <Stack.Screen name="Login"  component={SignInScreen} />  
     <Stack.Screen name="Drawer" component={DrawerNavigation} /> 
     <Stack.Screen name="SignUp" component={SignUpScreen} /> 
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
Container:{
 flex:1,
},
signin:{
  color:"black"
},
signup:{
  color:"green"
},

  
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
  