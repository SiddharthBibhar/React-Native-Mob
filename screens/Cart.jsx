import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useCart } from "./CartContext";

const Cart = ({ navigation }) => {
  const { cartItems, increaseQuantity, decreaseQuantity, calculateTotalPrice, clearCart } = useCart();

  const handlePlaceOrder = () => {
    Alert.alert(
      "Order Placed",
      "Your order has been placed successfully!",
      [
        {
          text: "OK",
          onPress: () => {
            // Clear the cart
            clearCart();
            // Redirect to Successful.jsx or any other desired screen
            navigation.navigate("Successful");
          }
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Image source={{ uri: item.filename }} style={styles.image} />
          <View style={styles.itemDetails}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => decreaseQuantity(item.id)}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => increaseQuantity(item.id)}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>Price: Rs {item.price}</Text>
          </View>
        </View>
      ))}

      <View style={styles.totalContainer}>
        <Text style={styles.totalPrice}>Total Price: Rs {calculateTotalPrice()}</Text>
        <TouchableOpacity
          onPress={handlePlaceOrder}
          style={styles.placeOrderButton}
        >
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#EDF4F2",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 16,
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  placeOrderButton: {
    backgroundColor: "#DBD907",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default Cart;
