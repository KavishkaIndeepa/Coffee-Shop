import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
//@ts-ignore
import { RootStackParamList } from '../Common/StackNavigator';
import { LinearGradient } from "expo-linear-gradient";

const image = require("../../assets/home/coffee.png");
type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

function MainScreen() {
  const navigation = useNavigation<MainScreenNavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#694617", "#3b270d"]} style={styles.gradient}>
        <Text style={styles.title}>Welcome to Hikka Coffee</Text>
        <View style={styles.mainBg}>
          <View style={styles.leftSide}>
            <Text style={styles.text}>
              Freshly Brewed Coffee at Unbeatable Prices!
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Menu")}
            >
              <Text style={styles.buttonText}>Explore Menu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightSide}>
            <Image source={image} style={styles.image} />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  mainBg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  leftSide: {
    flex: 1,
    justifyContent: "center",
  },
  rightSide: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#444",
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#523712",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MainScreen;
