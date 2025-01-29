import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AirbnbRating } from 'react-native-ratings';

function OrderScreen({ navigation }: { navigation: any }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const orderData = [
    {
      id: '1',
      name: 'Burlap Coffee',
      description: 'A rustic coffee experience.',
      price: 5.0,
      quantity: 1,
      image: require('../../../../assets/menu/Coffee-Burlap.jpg'),
    },
    {
      id: '2',
      name: 'Latte Coffee',
      description: 'Smooth and creamy latte.',
      price: 4.0,
      quantity: 1,
      image: require('../../../../assets/menu/coffee-latte.jpg'),
    },
    {
      id: '3',
      name: 'Chocolate Puff Pastry',
      description: 'Flaky pastry with rich chocolate.',
      price: 2.0,
      quantity: 1,
      image: require('../../../../assets/menu/Chocolate-Puff-Pastry.jpg'),
    },
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="angle-left" size={28} color="#523712" />
        </TouchableOpacity>
        <Text style={styles.title}>My Orders</Text>
      </View>

      {orderData.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.row}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Icon name={expandedItem === item.id ? 'chevron-up' : 'chevron-down'} size={20} color="#523712" />
          </TouchableOpacity>
          {expandedItem === item.id && (
            <View style={styles.detailsContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              <AirbnbRating defaultRating={0} size={20} showRating={false} />
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  backButton: {
    marginRight: 15,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#f8f8f8',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
    color: '#523712',
  },
  detailsContainer: {
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default OrderScreen;