import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const WishlistScreen = ({ navigation }: { navigation: any }) => {
  const [wishlistData, setWishlistData] = useState([
    {
      id: "1",
      name: "Burlap Coffee",
      description: "A rustic coffee experience.",
      price: 5.0,
      quantity: 1,
      image: require("../../../../assets/menu/Coffee-Burlap.jpg"),
    },
    {
      id: "2",
      name: "Latte Coffee",
      description: "Smooth and creamy latte.",
      price: 4.0,
      quantity: 1,
      image: require("../../../../assets/menu/coffee-latte.jpg"),
    },
    {
      id: "3",
      name: "Chocolate Puff Pastry",
      description: "Flaky pastry with rich chocolate.",
      price: 2.0,
      quantity: 1,
      image: require("../../../../assets/menu/Chocolate-Puff-Pastry.jpg"),
    },
  ]);

  const [discount, setDiscount] = useState(0);

  const handleBack = () => {
    navigation.goBack();
  };

  const updateQuantity = (id: string, action: "increase" | "decrease") => {
    setWishlistData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setWishlistData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return wishlistData
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    return (subtotal - discount).toFixed(2);
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, "decrease")}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, "increase")}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemActions}>
        <Text style={styles.itemPrice}>
          ${(item.price * item.quantity).toFixed(2)}
        </Text>
        <TouchableOpacity
          onPress={() => deleteItem(item.id)}
          style={styles.deleteButton}
        >
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="angle-left" size={28} color="#523712" />
        </TouchableOpacity>
        <Text style={styles.title}>Wishlist</Text>
      </View>

      <FlatList
        data={wishlistData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={styles.orderInfo}>
            <View style={styles.orderRow}>
              <Text style={styles.orderLabel}>Subtotal:</Text>
              <Text style={styles.orderValue}>${calculateSubtotal()}</Text>
            </View>
            <View style={styles.orderRow}>
              <Text style={styles.orderLabel}>Discount:</Text>
              <TextInput
                style={[styles.discountInput, { textAlign: "right" }]}
                keyboardType="numeric"
                placeholder="0"
                value={discount.toString()}
                onChangeText={(value) => setDiscount(parseFloat(value) || 0)}
              />
            </View>
            <View style={styles.orderRow}>
              <Text style={styles.orderLabel}>Total:</Text>
              <Text style={styles.orderValue}>${calculateTotal()}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Get it Now</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 15,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flex: 1,
    textAlign: "center",
  },
  list: {
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemDescription: {
    fontSize: 14,
    color: "#777",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: "#ddd",
    borderRadius: 5,
    padding: 5,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  itemActions: {
    alignItems: "flex-end",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  deleteButton: {
    padding: 5,
  },
  orderInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  orderLabel: {
    fontWeight: "bold",
  },
  discountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  orderValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  discountInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 100,
    fontSize: 16,
    color: "#333",
  },

  orderTotal: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
  },
  checkoutButton: {
    marginTop: 15,
    backgroundColor: "#754e1a",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WishlistScreen;
