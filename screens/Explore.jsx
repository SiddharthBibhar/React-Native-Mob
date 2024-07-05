
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import localProducts from './commonComponents/Productdata.json';
import { useNavigation } from '@react-navigation/native';
import { useCart } from "./CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const [numColumns, setNumColumns] = useState(2); // Adjust number of columns as needed

  useEffect(() => {
    setProducts(localProducts);
  }, []);

  const handleToggleWishlist = (productId) => {
    console.log(`Toggled wishlist for product ${productId}`);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    addToCart(productToAdd);
    console.log(`Added product ${productId} to cart`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <View style={styles.productCardTop}>
        <Image
          style={styles.productImage}
          source={{ uri: item.filename }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.productCardBottom}>
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
        </View>
        <View style={styles.productCart}>
          <Text style={styles.productPrice}>Rs {item.price}</Text>
          <TouchableOpacity onPress={() => handleToggleWishlist(item.id)}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleAddToCart(item.id)}>
          <Text style={styles.addToCartButton}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={numColumns}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF4F2',
    paddingHorizontal: 8,
    paddingTop: 1,
  },
  gridContainer: {
    justifyContent: 'space-between',
    flexDirection: 'vertical',
    //flexWrap: 'wrap',
    paddingHorizontal: 6,
  },
  productCard: {
    width: "50%", // Adjust based on desired spacing between cards
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: "#EEEEEE",
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  productCardTop: {
    flex: 1,
    justifyContent: 'center',
    padding: 6,
  },
  productImage: {
    width: "100%",
   height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productCardBottom: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  productDetails: {
    flex: 1,
    marginBottom: 9,
  },
  productTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 2,
    color: "#333",
  },
  productCart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 10,
    width: "100%",
  },
  addToCartButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
    backgroundColor: "#DBD907",
    paddingHorizontal: 19,
    paddingVertical: 10,
    borderRadius: 100,
    marginTop: 10,
  },
});

export default Home;
