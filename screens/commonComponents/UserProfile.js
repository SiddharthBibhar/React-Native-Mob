import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function UserProfile({isLoggedin}){

    const name = "Siddharth";
    const element0 = <Text>Hello: {name}</Text>
    /**Expressing JavaScript Expression */
    const element1 = (
        <View>
            <Text>{isLoggedin ? element0:"Guest"}</Text>
            <Text>
                {isLoggedin && (
                    <View>
                        <Text>Log Out</Text>
                    </View>
                )}
            </Text>
        </View>
    )

   
    return element1;
}