import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserProfile from './UserProfile';

        // export default function Car({brand, color, year}){
        //     const isLoggedin = false;

        //     /**Expressing JavaScript Expression */
        //     const element1 = (
        //         <View>
        //             <Text>Hello, {isLoggedin ? "User":"Guest"}!</Text>
        //             <Text>
        //                 {isLoggedin && (
        //                     <View>
        //                         <Text>Log Out</Text>
        //                     </View>
        //                 )}
        //             </Text>
        //         </View>
        //     )

        //     /**Expressing Children */                
        //     const element2 = (
        //         <View>
        //             <Text>
        //                 JSX Element
        //             </Text>
        //         </View>
        //     )
        //     return (<View>
        //         <Text>Brand : {brand}</Text>
        //         <Text>Color : {color}</Text>
        //         <Text>Years : {year}</Text>
        //     </View>)
        // }
    export default function Car({car}){
        const { brand, color, year } = car;
        const element3 = (
            <View>
                <Text>Brand : {brand}</Text>
               <Text>Color : {color}</Text>
               <Text>Years : {year}</Text>
           </View>
        );
        return (
            <View>
                {element3}
            </View>
        )
            
        }

    