import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
//@ts-ignore
import { RootStackParamList } from "../Common/StackNavigator";

type StartScreenNavigationProp = StackNavigationProp<RootStackParamList, "Start">;
type EditProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "EditProfile">;
type OrderScreenNavigationProp = StackNavigationProp<RootStackParamList, "Order">;
type WishlistScreenNavigationProp = StackNavigationProp<RootStackParamList, "Wishlist">;
type SettingScreenNavigationProp = StackNavigationProp<RootStackParamList, "Setting">;

function ProfileScreen() {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");

  const navigation = useNavigation<StartScreenNavigationProp>();
  const navigationProfile = useNavigation<EditProfileScreenNavigationProp>();
  const navigationOrder = useNavigation<OrderScreenNavigationProp>();
  const navigationWishlist = useNavigation<WishlistScreenNavigationProp>();
  const navigationSetting = useNavigation<SettingScreenNavigationProp>();

  const handleEditProfilePic = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission Required", "We need access to your photos to change the profile picture.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setProfilePic(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <LinearGradient colors={["#694617", "#3b270d"]} style={styles.gradient}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={
                profilePic
                  ? { uri: profilePic }
                  : require("../../../assets/profile/John.jpg") // Replace with your default profile image path
              }
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={styles.editButton}
              onPress={handleEditProfilePic}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </LinearGradient>

      {/* Buttons Section */}
      <View style={styles.btnView}>
        {/* Edit Profile */}
        <View style={styles.profileBtn}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={() => navigationProfile.navigate("EditProfile")}
          >
            <Icon name="user" size={20} color="#523712" style={styles.icon} />
            <Text style={styles.profileBtnText}>Edit Profile</Text>
            <Icon name="angle-right" size={20} color="#523712" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* My Orders */}
        <View style={styles.profileBtn}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={() => navigationOrder.navigate("Order")}
          >
            <Icon name="shopping-bag" size={20} color="#523712" style={styles.icon} />
            <Text style={styles.profileBtnText}>My Orders</Text>
            <Icon name="angle-right" size={20} color="#523712" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Wishlist */}
        <View style={styles.profileBtn}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={() => navigationWishlist.navigate("Wishlist")}
          >
            <Icon name="heart" size={20} color="#523712" style={styles.icon} />
            <Text style={styles.profileBtnText}>Wishlist</Text>
            <Icon name="angle-right" size={20} color="#523712" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <View style={styles.profileBtn}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={() => navigationSetting.navigate("Setting")}
          >
            <Icon name="cog" size={20} color="#523712" style={styles.icon} />
            <Text style={styles.profileBtnText}>Settings</Text>
            <Icon name="angle-right" size={20} color="#523712" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Log Out */}
        <View style={styles.profileBtn}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={() => navigation.navigate("Start")}
          >
            <Icon name="sign-out" size={20} color="#523712" style={styles.icon} />
            <Text style={styles.profileBtnText}>Log Out</Text>
            <Icon name="angle-right" size={20} color="#523712" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  imageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "white",
  },
  editButton: {
    position: "absolute",
    bottom: -5,
    right: 5,
    backgroundColor: "#ff9800",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  editButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,
  },
  email: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  btnView: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  profileBtn: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 10,
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileBtnText: {
    color: "#523712",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default ProfileScreen;
