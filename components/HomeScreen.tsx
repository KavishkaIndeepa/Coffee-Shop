import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from "./tabs/main/MainScreen";
import CartScreen from "./tabs/cart/CartScreen";
import MenuScreen from "./tabs/menu/MenuScreen";
import ProfileScreen from "./tabs/profile/ProfileScreen";


const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Main':
              iconName = focused ? 'home' : 'home-outline';
              break;
            // case 'Cart':
            //   iconName = focused ? 'cart' : 'cart-outline';
            //   break;
            case 'Menu':
                iconName = focused ? 'grid' : 'grid-outline';
                break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }
          // @ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#523712',
        tabBarInactiveTintColor: '#0c0803',
        headerShown: false, // Hide the header for all tab screens
      })}
    >
      
      <Tab.Screen name="Main" component={MainScreen} />
      {/* <Tab.Screen name="Cart" component={CartScreen} /> */}
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
