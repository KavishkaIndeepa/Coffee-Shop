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
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { LinearGradient } from "expo-linear-gradient";
import ItemScreen from "./item/ItemScreen";

// All Images
const allImages = [
  {
    source: require("../../../assets/menu/Coffee-Burlap.jpg"),
    title: "Burlap",
    price: "$5",
  },
  {
    source: require("../../../assets/menu/coffee-latte.jpg"),
    title: "Latte",
    price: "$4",
  },
  {
    source: require("../../../assets/menu/Creamy-Coffee.png"),
    title: "Creamy Coffee",
    price: "$6",
  },
  {
    source: require("../../../assets/menu/Ice-coffee.jpg"),
    title: "Ice Coffee",
    price: "$5",
  },
  {
    source: require("../../../assets/menu/Irish-coffee.jpeg"),
    title: "Irish Coffee",
    price: "$7",
  },
  {
    source: require("../../../assets/menu/cake.jpeg"),
    title: "Cake",
    price: "$3",
  },
  {
    source: require("../../../assets/menu/Chocolate-Puff-Pastry.jpg"),
    title: "Chocolate Puff Pastry",
    price: "$2",
  },
  {
    source: require("../../../assets/menu/jam-pastries.jpeg"),
    title: "Jam Pastries",
    price: "$2",
  },
  {
    source: require("../../../assets/menu/potato-pastry.jpg"),
    title: "Potato Pastry",
    price: "$2",
  },
];

// Coffee Images
const coffeeImages = [
  {
    source: require("../../../assets/menu/Coffee-Burlap.jpg"),
    title: "Burlap",
    price: "$5",
  },
  {
    source: require("../../../assets/menu/coffee-latte.jpg"),
    title: "Latte",
    price: "$4",
  },
  {
    source: require("../../../assets/menu/Creamy-Coffee.png"),
    title: "Creamy Coffee",
    price: "$6",
  },
  {
    source: require("../../../assets/menu/Ice-coffee.jpg"),
    title: "Ice Coffee",
    price: "$5",
  },
  {
    source: require("../../../assets/menu/Irish-coffee.jpeg"),
    title: "Irish Coffee",
    price: "$7",
  },
];

// Pastries Images
const pastriesImages = [
  {
    source: require("../../../assets/menu/cake.jpeg"),
    title: "Cake",
    price: "$3",
  },
  {
    source: require("../../../assets/menu/Chocolate-Puff-Pastry.jpg"),
    title: "Chocolate Puff Pastry",
    price: "$2",
  },
  {
    source: require("../../../assets/menu/jam-pastries.jpeg"),
    title: "Jam Pastries",
    price: "$2",
  },
  {
    source: require("../../../assets/menu/potato-pastry.jpg"),
    title: "Potato Pastry",
    price: "$2",
  },
];

const All = ({ handleItemPress }: { handleItemPress: (item: any) => void }) => (
  <ScrollView
    contentContainerStyle={styles.tabContent}
    showsVerticalScrollIndicator={false}
  >
    {allImages.map((item, index) => (
      <View key={index} style={styles.itemImageView}>
        <TouchableOpacity onPress={() => handleItemPress(item)} activeOpacity={0.5}>
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
);

const Coffee = ({ handleItemPress }: { handleItemPress: (item: any) => void }) => (
  <ScrollView
    contentContainerStyle={styles.tabContent}
    showsVerticalScrollIndicator={false}
  >
    {coffeeImages.map((item, index) => (
      <View key={index} style={styles.itemImageView}>
        <TouchableOpacity onPress={() => handleItemPress(item)} activeOpacity={0.5}>
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
);

const Pastries = ({ handleItemPress }: { handleItemPress: (item: any) => void }) => (
  <ScrollView
    contentContainerStyle={styles.tabContent}
    showsVerticalScrollIndicator={false}
  >
    {pastriesImages.map((item, index) => (
      <View key={index} style={styles.itemImageView}>
        <TouchableOpacity onPress={() => handleItemPress(item)} activeOpacity={0.5}>
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
);


function MenuScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "coffee", title: "Coffee" },
    { key: "pastries", title: "Pastries" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderScene = SceneMap({
    all: () => <All handleItemPress={handleItemPress} />,
    coffee: () => <Coffee handleItemPress={handleItemPress} />,
    pastries: () => <Pastries handleItemPress={handleItemPress} />,
  });
  
  const handleItemPress = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };


  return (
    <View style={styles.container}>
      <LinearGradient colors={["#8B5A2B", "#3b270d"]} style={styles.gradient}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.buttonContainer}>
          {routes.map((route, i) => (
            <TouchableOpacity
              key={route.key}
              onPress={() => setIndex(i)}
              style={styles.button}
            >
              <LinearGradient
                colors={index === i ? ["#754e1a", "#9e835f"] : ["#fff", "#ddd"]}
                style={styles.buttonGradient}
              >
                <Text
                  style={[
                    styles.buttonText,
                    index === i && styles.activeButtonText,
                  ]}
                >
                  {route.title}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            //@ts-ignore
            labelStyle={styles.label}
          />
        )}
      />
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
}

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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  activeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tabContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tabBar: {
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  indicator: {
    backgroundColor: "#d87a3d",
    height: 3,
  },
  label: {
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#333",
  },
  itemImageView: {
    width: "47%",
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
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
  imgButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  imgPlus: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default MenuScreen;
