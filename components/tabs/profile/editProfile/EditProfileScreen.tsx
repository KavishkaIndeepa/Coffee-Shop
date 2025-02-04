import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

function ModernEditProfileScreen({ navigation }: { navigation: any }) {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageOpacity] = useState(new Animated.Value(1)); // For image animation

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleChangeProfileImage = async () => {
    Animated.timing(imageOpacity, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start(async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        setProfileImage(result.assets[0].uri);
      }

      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <ScrollView style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="arrow-left" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={handleChangeProfileImage}>
          <Animated.Image
            source={
              profileImage
                ? { uri: profileImage }
                : require('../../../../assets/profile/John.jpg') // Replace default image
            }
            style={[styles.profileImage, { opacity: imageOpacity }]}
          />
          <View style={styles.cameraIcon}>
            <Icon name="camera" size={18} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        {renderInfoRow('account', 'Name', 'John Doe')}
        {renderInfoRow('email', 'Email', 'john.doe@gmail.com')}
        {renderInfoRow('phone', 'Phone', '+65 2311 333')}
        {renderInfoRow('calendar', 'Date of Birth', '20/05/1990')}
        {renderInfoRow('map-marker', 'Address', '123 Royal Street, New York')}
      </View>
    </ScrollView>
  );
}

const renderInfoRow = (iconName: string, label: string, value: string) => (
  <View style={styles.infoRow}>
    <View style={styles.iconLabel}>
      <Icon name={iconName} size={20} color="#555" style={styles.infoIcon} />
      <Text style={styles.label}>{label}</Text>
    </View>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#fff',
    elevation: 2,
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#ddd',
    backgroundColor: '#EEE',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#523712',
    borderRadius: 15,
    padding: 5,
    elevation: 3,
  },
  infoSection: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 8,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});

export default ModernEditProfileScreen;
