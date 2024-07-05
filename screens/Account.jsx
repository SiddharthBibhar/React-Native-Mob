import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { SimpleLineIcons } from '@expo/vector-icons';

const Account = () => {
  const [name, setName] = useState('Siddharth');
  const [email, setEmail] = useState('sidd@gmail.com');
  const [contactNumber, setContactNumber] = useState('123-456-7890');
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const navigation = useNavigation();

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Success', 'Your details have been updated.', [
      { text: 'OK' }
    ]);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.', [
      { text: 'OK', onPress: () => navigation.navigate('Welcome') }
    ]);
  };

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  const handleSupport = () => {
    Alert.alert('Customer Support', 'You will be connected to customer support.', [
      { text: 'OK' }
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handlePickImage}>
        <Image
          source={profilePicture ? { uri: profilePicture } : require('../assets/Profile.jpg')}
          style={styles.profilePicture}
        />
      </TouchableOpacity>
      {isEditing ? (
        <>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
          <TextInput style={styles.input} value={contactNumber} onChangeText={setContactNumber} placeholder="Contact Number" keyboardType="phone-pad" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.label}>Contact Number:</Text>
            <Text style={styles.text}>{contactNumber}</Text>
          </View>
          <View style={styles.buttonStack}>
            <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.navigationButton}>
              <AntDesign name="edit" size={24} color="black" />
              <Text style={styles.navigationButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.navigationButton}>
              <AntDesign name="shoppingcart" size={24} color="black" />
              <Text style={styles.navigationButtonText}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={styles.navigationButton}>
              <AntDesign name="hearto" size={24} color="black" />
              <Text style={styles.navigationButtonText}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSupport} style={styles.supportButton}>
              <AntDesign name="customerservice" size={24} color="black" />
              <Text style={styles.supportText}>Customer Support</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <SimpleLineIcons name="logout" size={24} color="black" />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EDF4F2',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoBox: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#495057',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#6c757d',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonStack: {
    width: '80%',
    marginTop: 20,
  },
  navigationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DBD907',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    //color: "black",
  },
  navigationButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17a2b8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
  },
  supportText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Account;
