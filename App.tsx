import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./components/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./components/HomeScreen";
import EditProfileScreen from "./components/tabs/profile/editProfile/EditProfileScreen";
import OrderScreen from "./components/tabs/profile/orders/OrderScreen";
import WishlistScreen from "./components/tabs/profile/wishlist/WishlistScreen";
import SettingScreen from "./components/tabs/profile/setting/SettingScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Order"
            component={OrderScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Wishlist"
            component={WishlistScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontSize: 20,
  },
});
