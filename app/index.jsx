import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import icedCoffeeImg from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        style={styles.image}
        resizeMode="cover"
      >
        <Text style={styles.title}>coffee shop</Text>
        <Link href="/explore" style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text>Explore</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 42,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",

    flex: 1,
    resizeMode: "cover",
  },
  link: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: "center",
  },
});
