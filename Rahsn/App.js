import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bike from './screens/commonComponents/Bike';
import  Car  from './screens/commonComponents/Car';
import UserProfile from './screens/commonComponents/UserProfile';
import Welcome from "./screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Buttons from "./screens/commonComponents/Buttons";
import Textinput from './screens/commonComponents/Textinput';
import MyTabs from './screens/MyTabs';
import ProductDetails from './screens/ProductDetails';
import { CartProvider } from "./screens/CartContext";

export default function App() {
  //for object props/activity
  // const car = {
  //   brand : 'Suzuki',
  //   color : 'red',
  //   year : 2021
  // };
  // return (
  //   <View style={styles.container}>
  //     <UserProfile isLoggedin={true}/>
  //     <Text>Open up App.js to start working on your app by sidd!</Text>
  //     <Text>Open up App.js to start working on your app by sidd!</Text>
  //     <Text>Open up App.js to start working on your app by sidd!</Text>
  
  //       <Car car={car}/>
      
  //     <Bike/>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return (
  <GestureHandlerRootView>
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name='Textinput' component={Textinput}/> */}
          {/* <Stack.Screen name='Buttons' component={Buttons}/> */}
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen  name="MyTabs" component={MyTabs} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider> 
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
