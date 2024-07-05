// MyTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Home from "./Home";
import Explore from "./Explore";
import Cart from "./Cart";
import Account from "./Account";
import CustomHeader from "../screens/commonComponents/CustomHeader"; // Import the custom header

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#31473A",
          color: "white",
        },
        headerTitle: (props) => <CustomHeader {...props} />, // Set the custom header
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={"white"} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={"white"} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" color={"white"} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={"white"} size={18} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
