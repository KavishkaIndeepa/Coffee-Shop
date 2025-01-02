import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function MainScreen() {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Main Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      title:{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            padding: 10,
      }
});

export default MainScreen
