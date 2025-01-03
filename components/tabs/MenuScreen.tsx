import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Menu Screen</Text>
    </ScrollView>
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

export default MenuScreen
