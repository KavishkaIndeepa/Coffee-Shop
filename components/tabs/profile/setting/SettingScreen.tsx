import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SettingScreen({ navigation }: { navigation: any }) {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ScrollView style={darkMode ? styles.darkBackground : styles.lightBackground}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="angle-left" size={28} color="#523712" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      {/* Settings Container */}
      <View style={styles.container}>
        {/* Dark Mode */}
        {/* <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon name={darkMode ? "sun-o" : "moon-o"} size={20} color="black" />
          </View>
          <Text style={styles.text}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View> */}

        {/* Notifications */}
        <TouchableOpacity style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon name="bell" size={20} color="#523712" />
          </View>
          <Text style={styles.text}>Notifications</Text>
          <Text style={styles.statusText}>On</Text>
        </TouchableOpacity>

        {/* Privacy */}
        <TouchableOpacity style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon name="lock" size={20} color="#523712" />
          </View>
          <Text style={styles.text}>Privacy</Text>
          <Icon name="angle-right" size={20} color="#523712" />
        </TouchableOpacity>

        {/* Security */}
        <TouchableOpacity style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon name="shield" size={20} color="#523712" />
          </View>
          <Text style={styles.text}>Security</Text>
          <Icon name="angle-right" size={20} color="#523712" />
        </TouchableOpacity>

        {/* Help */}
        <TouchableOpacity style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon name="question-circle" size={20} color="#523712" />
          </View>
          <Text style={styles.text}>Help</Text>
          <Icon name="angle-right" size={20} color="#523712" />
        </TouchableOpacity>

        {/* About */}
        <TouchableOpacity style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon name="info-circle" size={20} color="#523712" />
          </View>
          <Text style={styles.text}>About</Text>
          <Icon name="angle-right" size={20} color="#523712" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ac9576',
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  statusText: {
    fontSize: 16,
    color: 'gray',
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },
  darkBackground: {
    backgroundColor: '#333333',
  },
});

export default SettingScreen;
