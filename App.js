
import {Text,View,SafeAreaView,StyleSheet,Platform,ScrollView} from 'react-native';
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
        <SafeAreaView  style={styles.container}>
          <ScrollView>
           <PokemonCard {...charmanderData} />
           <PokemonCard {...squirtleData} />
           <PokemonCard {...bulbasaurData} />
           <PokemonCard {...pikachuData} />
           </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"lightgrey",
    paddingTop: Platform.OS === "android" ? 25 : 0,
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
  