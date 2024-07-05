import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useCart } from "./CartContext";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log(`Added product ${product.id} to cart`);
  };

  const handleToggleWishlist = () => {
    console.log(`Toggled wishlist for product ${product.id}`);
  };

  const reviews = [
    { id: '1', user: 'Prayas', rating: 5, comment: 'Kya Cheez HAi Bhai !' },
    { id: '2', user: 'Sk Shyam', rating: 4, comment: 'Excellent .' },
    { id: '3', user: 'Manu', rating: 1, comment: 'Worst.' },
  ];

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <FontAwesome name="user-circle-o" size={24} color="#31473A" style={{ marginRight: 8 }} />
        <Text style={styles.reviewUser}>{item.user}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={16} color="#31473A" style={{ marginRight: 4 }} />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.reviewComment}>{item.comment}</Text>
    </View>
  );

  return (
    <FlatList
      data={reviews}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Image source={{ uri: product.filename }} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Price: Rs {product.price}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleToggleWishlist}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.reviewsTitle}>Customer Reviews</Text>
        </View>
      )}
      renderItem={renderReviewItem}
      contentContainerStyle={styles.reviewsContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF4F2',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#31473A',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#31473A',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#31473A',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
    marginTop: 10,
    color: '#31473A',
    textAlign: 'center',
  },
  reviewItem: {
    backgroundColor: '#DCD098',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#31473A',
  },
  reviewComment: {
    fontSize: 14,
    color: '#333',
  },
  back: {
    marginTop: 30,
    height: 40,
  },
});
