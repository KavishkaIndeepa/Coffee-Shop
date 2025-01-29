import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ItemScreen from "./item/ItemScreen";

const ITEMS_PER_PAGE = 6;

const paginateItems = (items: any[], page: number) => {
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  return items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => (
  <View style={styles.paginationContainer}>
    <TouchableOpacity
      disabled={currentPage === 1}
      onPress={() => onPageChange(currentPage - 1)}
      style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
    >
      <Text style={styles.pageButtonText}>Previous</Text>
    </TouchableOpacity>
    <Text style={styles.pageIndicator}>
      Page {currentPage} of {totalPages}
    </Text>
    <TouchableOpacity
      disabled={currentPage === totalPages}
      onPress={() => onPageChange(currentPage + 1)}
      style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]}
    >
      <Text style={styles.pageButtonText}>Next</Text>
    </TouchableOpacity>
  </View>
);

interface Item {
  source: any;
  title: string;
  subtitle: string;
  price: string;
}

interface TabContentProps {
  items: Item[];
  handleItemPress: (item: Item) => void;
}

const TabContent = ({ items, handleItemPress }: TabContentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const displayedItems = paginateItems(items, currentPage);

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.tabContent}
        showsVerticalScrollIndicator={false}
      >
        {displayedItems.map((item, index) => (
          <View key={index} style={styles.itemImageView}>
            <TouchableOpacity
              onPress={() => handleItemPress(item)}
              activeOpacity={0.5}
            >
              <ImageBackground
                source={item.source}
                resizeMode="cover"
                style={styles.itemImage}
              >
                <LinearGradient
                  colors={["rgba(0, 0, 0, 0.9)", "transparent"]}
                  style={StyleSheet.absoluteFill}
                />
                <Text style={styles.imgTitle}>{item.title}</Text>
                <Text style={styles.imgPrice}>{item.price}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </View>
  );
};

const MenuScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "coffee", title: "Coffee" },
    { key: "pastries", title: "Pastries" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const allItems = [
    {
      source: require("../../../assets/menu/Coffee-Burlap.jpg"),
      title: "Burlap Coffee",
      subtitle: "A rustic coffee experience.",
      price: "$5.00",
    },
    {
      source: require("../../../assets/menu/coffee-latte.jpg"),
      title: "Latte Coffee",
      subtitle: "Smooth and creamy latte.",
      price: "$4.00",
    },
    {
      source: require("../../../assets/menu/Creamy-Coffee.png"),
      title: "Creamy Coffee",
      subtitle: "Rich and frothy coffee delight.",
      price: "$6.00",
    },
    {
      source: require("../../../assets/menu/Ice-coffee.jpg"),
      title: "Ice Coffee",
      subtitle: "Chilled coffee perfection.",
      price: "$5.00",
    },
    {
      source: require("../../../assets/menu/Irish-coffee.jpeg"),
      title: "Irish Coffee",
      subtitle: "A touch of whiskey in your coffee.",
      price: "$7.00",
    },
    {
      source: require("../../../assets/menu/cake.jpeg"),
      title: "Cake",
      subtitle: "Soft and delicious dessert.",
      price: "$3.00",
    },
    {
      source: require("../../../assets/menu/Chocolate-Puff-Pastry.jpg"),
      title: "Chocolate Puff Pastry",
      subtitle: "Flaky pastry with rich chocolate.",
      price: "$2.00",
    },
    {
      source: require("../../../assets/menu/jam-pastries.jpeg"),
      title: "Jam Pastries",
      subtitle: "Sweet pastries filled with jam.",
      price: "$2.00",
    },
    {
      source: require("../../../assets/menu/potato-pastry.jpg"),
      title: "Potato Pastry",
      subtitle: "Savory pastry with potato filling.",
      price: "$2.00",
    },
  ];

  const coffeeItems = [
    {
      source: require("../../../assets/menu/Coffee-Burlap.jpg"),
      title: "Burlap Coffee",
      subtitle: "A rustic coffee experience.",
      price: "$5.00",
    },
    {
      source: require("../../../assets/menu/coffee-latte.jpg"),
      title: "Latte Coffee",
      subtitle: "Smooth and creamy latte.",
      price: "$4.00",
    },
    {
      source: require("../../../assets/menu/Creamy-Coffee.png"),
      title: "Creamy Coffee",
      subtitle: "Rich and frothy coffee delight.",
      price: "$6.00",
    },
    {
      source: require("../../../assets/menu/Ice-coffee.jpg"),
      title: "Ice Coffee",
      subtitle: "Chilled coffee perfection.",
      price: "$5.00",
    },
    {
      source: require("../../../assets/menu/Irish-coffee.jpeg"),
      title: "Irish Coffee",
      subtitle: "A touch of whiskey in your coffee.",
      price: "$7.00",
    },
  ];

  const pastriesItems =[
    {
      source: require("../../../assets/menu/cake.jpeg"),
      title: "Cake",
      subtitle: "Soft and delicious dessert.",
      price: "$3.00",
    },
    {
      source: require("../../../assets/menu/Chocolate-Puff-Pastry.jpg"),
      title: "Chocolate Puff Pastry",
      subtitle: "Flaky pastry with rich chocolate.",
      price: "$2.00",
    },
    {
      source: require("../../../assets/menu/jam-pastries.jpeg"),
      title: "Jam Pastries",
      subtitle: "Sweet pastries filled with jam.",
      price: "$2.00",
    },
    {
      source: require("../../../assets/menu/potato-pastry.jpg"),
      title: "Potato Pastry",
      subtitle: "Savory pastry with potato filling.",
      price: "$2.00",
    },
  ];

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case "all":
        return <TabContent items={allItems} handleItemPress={handleItemPress} />;
      case "coffee":
        return <TabContent items={coffeeItems} handleItemPress={handleItemPress} />;
      case "pastries":
        return <TabContent items={pastriesItems} handleItemPress={handleItemPress} />;
      default:
        return null;
    }
  };

  const handleItemPress = (item: Item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#8B5A2B", "#3b270d"]} style={styles.gradient}>
        <Text style={styles.title}>Welcome</Text>
      </LinearGradient>
      <View style={styles.tabContainer}>
        {routes.map((route, i) => (
          <TouchableOpacity
            key={route.key}
            onPress={() => setIndex(i)}
            style={[styles.tabButton, index === i && styles.activeTabButton]}
          >
            <Text
              style={[styles.tabButtonText, index === i && styles.activeTabButtonText]}
            >
              {route.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderScene({ route: routes[index] })}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        {selectedItem && (
          <ItemScreen
            item={selectedItem}
            onClose={() => setModalVisible(false)}
          />
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#8B5A2B",
  },
  tabButtonText: {
    fontSize: 16,
    color: "#333",
  },
  activeTabButtonText: {
    fontWeight: "bold",
    color: "#8B5A2B",
  },
  tabContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemImageView: {
    width: "47%",
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    height: 150,
    justifyContent: "flex-end",
    padding: 10,
  },
  imgTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  imgPrice: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  pageButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#8B5A2B",
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  pageButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  pageIndicator: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default MenuScreen;
