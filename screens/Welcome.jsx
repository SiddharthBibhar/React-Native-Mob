import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Login from "./Login";
import Signup from "./Signup";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
const Welcome = ({ navigation }) => {
  const handleSignupPress = () => {
    navigation.navigate("Signup");
  };

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.view0}>
        <Image
          source={require("../assets/Rahsn_Logo-removed.png")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>

      <View style={styles.view2}>
        <Image
          source={require("../assets/Welcome-shop-cart.jpg")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>

      <View style={styles.view3}>
        <TouchableHighlight
          style={{
            backgroundColor: "#31473A",
            width: 280,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginBottom: 20,
            marginLeft: 2,
          }}
          onPress={handleSignupPress}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            New User !! Create A New Account
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: "#31473A",
            width: 280,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginBottom: 20,
            marginLeft: 2,
          }}
          onPress={handleLoginPress}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Already Created ? Log In
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: "#EDF4F2",
  },
  img: {
    width: 300,
    height: 300,
  },
  view0: {
    position: "absolute",
    top: 1,
    alignItems: "center"
  },
  view1: {
    marginTop: 100,
    position: "absolute",
    top: 0,
  },
  view2: {
    marginTop: "10%",
    marginBottom: "10%",
    position: "relative",
    top: "25%",
  },
  view3: {
    marginBottom: "10%",
    position: "absolute",
    bottom: 0,
  },
  titleTxt1: {
    textAlign: "center",
    color: "#13245f",
    fontSize: 25,
    fontWeight: "500",
  },
  titleTxt2: {
    textAlign: "center",
    color: "#7F50DE",
    fontSize: 25,
    fontWeight: "800",
  },
});