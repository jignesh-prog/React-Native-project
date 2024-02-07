import 'react-native-gesture-handler';
import {StyleSheet,} from "react-native"
import RootNavigator from './Navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
 return (
  <NavigationContainer style={styles.Container} >
  <RootNavigator/>
 </NavigationContainer>    
  )
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
  