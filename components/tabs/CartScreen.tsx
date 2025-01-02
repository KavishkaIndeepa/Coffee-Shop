import React from 'react'
import { Text, View , StyleSheet} from 'react-native'

function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
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

export default CartScreen
