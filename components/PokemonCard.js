import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
      </View>

      <Image
        resizeMode="contain"
        source={image}
        style={styles.image}
        accessibility={`${name} pokemon`}
      />

      <View style={styles.typeContainer}>
        <Text style={styles.type}>{type}</Text>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.moves}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknesses}>
          Weaknesses: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "lightgrey",
    borderWidth: 2,
    borderColor: "orange",
    width: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  type: {
    justifyContent: "center",
    fontWeight: "bold",
    color: "red",
    margin: 12,
    fontSize: 16,
  },
  movesContainer: {
    marginBottom: 16,
  },
  moves: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessesContainer: {
    marginBottom: 8,
  },
  weaknesses: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
