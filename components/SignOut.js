import { signOut } from "firebase/auth";
import { Pressable,Text } from "react-native";

export default function SignOut({navigation}) {
    
    const LogOut = async() =>{
     try{ await signOut(auth)
    {navigation.navigate("SignInScreen")}
    }
     catch(err){
console.error("error")
     }
    }
    return (
        <Pressable onPress={LogOut}><Text>SignOut</Text></Pressable>
    )
}