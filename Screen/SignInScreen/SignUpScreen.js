import { Text, View, TextInput, Button,StyleSheet, KeyboardAvoidingView, ActivityIndicator, Pressable} from "react-native";
import { auth } from '../../config/firebaseConfig'
import { createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect, useRef } from 'react'

export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user,setUser] = useState({})
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
  
const inputRef = useRef();

onAuthStateChanged(auth, (user) => {
    setUser(user)
})
console.log(user?.userName)

useEffect(() => {
inputRef.current.focus()
}, []);

const signUp = async () => {
    {setIsLoading(true)}
    if(confirmPassword === password)
    try {
        await createUserWithEmailAndPassword(auth,email, password);
        {alert("signed up successfully Login to continue")}
        {navigation.navigate("Login")}
    }
    catch (err) {
       console.log('password does not match')
    }
   { setIsLoading (false)}
}



  return (
    <KeyboardAvoidingView behavior="padding" style={styles.Container}>
        
        <Text style={styles.Title}>
            Add your Credential
        </Text>
    <View style={styles.SignInScreen}>
          <TextInput
            ref={inputRef}   require
            value={email}
             onChangeText={(text) => setEmail(text)}
          style={styles.TextInput}
            placeholder="email"
            placeholderTextColor="white"
          />
          <TextInput
          style={styles.TextInput}
            placeholder="password"
            placeholderTextColor={"white"}
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
          style={styles.TextInput}
            placeholder="Confirm password"
            placeholderTextColor={"white"}
            value={confirmPassword}
            secureTextEntry
            onChangeText={(confirmText) => setConfirmPassword(confirmText)}
          />
           {isLoading ?  <ActivityIndicator /> :<>
      <Button color="plum" title="SignUp" onPress={signUp}  />
      </>  }
      <Text style={styles.text}>Already have an Account ?</Text>
      <Pressable onPress={() => navigation.navigate("Login")}><Text style={styles.backLogin}>Go back to Login</Text></Pressable>
    </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",  
        paddingHorizontal:20,
        backgroundColor:"rgb(52, 58, 78)"
      },
    SignInScreen:{
       width:"100%",
      alignSelf:"center",
     padding:15,
      },
      TextInput:{
height:40,
backgroundColor:"rgb(78, 68, 112)",
borderColor:"black",
borderWidth:0.5,
borderRadius:16,
marginVertical:10,
paddingHorizontal:10,

color:"black",
fontWeight:"bold",
fontSize:18
      },
      Title:{
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:22,
        padding:16,
        color:"white"
      },
backLogin:{
  fontSize:"bolds",
  color:"white",
  alignSelf:"center",
  marginVertical:25,
  fontSize:18,
  padding:10,
  borderWidth:0.5,
  borderRadius:16,
  backgroundColor:"rgb(78, 68, 112)",
},
text:{
  color:"white",
  fontSize:18,
  alignSelf:"center",
  marginTop:20
}
    })