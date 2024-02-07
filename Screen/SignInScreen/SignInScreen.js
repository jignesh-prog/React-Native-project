import { Text, View, TextInput, ActivityIndicator,StyleSheet, KeyboardAvoidingView,Pressable} from "react-native";
import { auth} from '../../config/firebaseConfig'
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect, useRef } from 'react'


export default function SignInScreen({navigation}) {
  const [email,setEmail] = useState("")
  const[password,setPassword]= useState("")
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef();

 onAuthStateChanged(auth, (user) => {
    setUser(user)
})
console.log(user?.userName)

useEffect(() => {
   inputRef.current.focus()
}, [])



const signIn = async () => {
  {setIsLoading(true)}
    try {
        await signInWithEmailAndPassword(auth, email, password);
        {user? navigation.navigate("Drawer") : alert("invalid user")}
    }
    catch (err) {
        console.error('Invalid email or password')
    }{setIsLoading(false)}
}

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.Container}>
        
        <Text style={styles.Title}>
            Add you Credential
        </Text>
    <View style={styles.SignInScreen}>
          <TextInput
            ref={inputRef}  
            placeholderTextColor={"white"}
            value={email}
             onChangeText={(text) => setEmail(text)}
          style={styles.TextInput}
            placeholder="email"
            />
          <TextInput
          style={styles.TextInput}
            placeholder="password"
            placeholderTextColor={"white"}
            value={password}
           
            onChangeText={(text) => setPassword(text)}
          />{ isLoading ? <ActivityIndicator></ActivityIndicator> :
          <Pressable onPress={signIn}>
          <Text style={styles.signUp} > Login</Text>
          </Pressable>}
  
      <Text style={styles.Text}>Not an existing member ?</Text>
         <Pressable onPress={() => {navigation.navigate("SignUp")}}>
          <Text style={styles.signUp} > signup</Text>
          </Pressable>
    </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  Container:{
      flex:1,
      justifyContent:"center",
      paddingHorizontal:20,
      backgroundColor:"rgb(52, 58, 78)",
      
    },
  SignInScreen:{
     width:"100%",
    alignSelf:"center",
   padding:15,
    },
    Text:{
      fontWeight:"bold",
   color:"white",
      fontSize:16,
      paddingTop:15,
      textAlign:"center"
    },
    signUp:{
      fontWeight:"bold",
      paddingTop:25,
      color:"plum",
      fontSize:20,
      alignSelf:"center"
    },
    TextInput:{
height:40,
backgroundColor:"rgb(78, 68, 112)",
borderColor:"black",
borderWidth:0.5,
borderRadius:16,
marginVertical:10,
paddingHorizontal:10,
fontSize:18
    },
    Title:{
      alignSelf:"center",
      fontWeight:"bold",
      fontSize:22,
      padding:16,
      color:"white"
    },
    GoogleButton:{
      height:40,
backgroundColor:"rgb(78, 68, 112)",
borderRadius:16,
marginVertical:10,
paddingHorizontal:10,
fontSize:18,
color:"white",
textAlign:"center",
justifyContent:"center",paddingTop:10
    }

  })