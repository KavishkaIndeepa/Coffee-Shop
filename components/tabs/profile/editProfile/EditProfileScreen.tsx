import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function EditProfileScreen({ navigation }: { navigation: any }) {
  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="angle-left" size={28} color="#523712"/>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={styles.container}>
        {/* Add your content here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    // paddingVertical: 30,
    paddingTop: 40,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1, // Ensures the title takes up remaining space
  },

});

export default EditProfileScreen;
