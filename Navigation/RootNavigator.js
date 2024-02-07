import 'react-native-gesture-handler';
import {StyleSheet,} from "react-native"
import MainStack from './MainStack';
export default function RootNavigator() {
  return (
   <> 
   <MainStack/>
   </>
     
   
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
  