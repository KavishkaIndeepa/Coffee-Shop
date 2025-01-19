import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';

interface Item {
  source: any;
  title: string;
  price: string;
  subtitle: string;
}

interface ItemScreenProps {
  item: Item;
  onClose: () => void;
}

const ItemScreen: React.FC<ItemScreenProps> = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSizePress = (size: string) => setSelectedSize(size);

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <ImageBackground
          source={item.source}
          resizeMode="cover"
          style={styles.itemImage}
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.9)", "transparent"]}
            style={StyleSheet.absoluteFill}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubTitle}>{item.subtitle}</Text>
          <View style={styles.priceQuantityRow}>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={handleDecrease} style={styles.quantityBtn}>
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.quantityInput}
                value={String(quantity)}
                editable={false}
              />
              <TouchableOpacity onPress={handleIncrease} style={styles.quantityBtn}>
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Size Selection */}
          <View>
            <Text style={styles.sizeText}>Size</Text>
            <View style={styles.sizeContainer}>
              {["S", "M", "L"].map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.activeSizeButton,
                  ]}
                  onPress={() => handleSizePress(size)}
                >
                  <Text>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.actionContainer}>
             <TouchableOpacity style={styles.iconButton}>
              <Icon name="heart-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.actionText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
  },
  itemImage: {
    height: 200,
    justifyContent: "flex-end",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 20,
    padding: 5,
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 15,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemSubTitle: {
    fontSize: 16,
    color: "#836031",
    marginBottom: 10,
  },
  priceQuantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  itemPrice: {
    fontSize: 20,
    color: "#8B5A2B",
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },
  quantityBtn: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  quantityInput: {
    marginHorizontal: 5,
    fontSize: 16,
    textAlign: "center",
    width: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 2,
  },
  sizeText: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sizeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  activeSizeButton: {
    borderColor: "#d87a3d",
    borderWidth: 2,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  iconButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d87a3d",
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ItemScreen;
