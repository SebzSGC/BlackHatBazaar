import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cart from '../icons/Cart'
import products from '../../utils/products'
import globalStyles from '../../styles/Global'

const Total = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.goodsStyle}>
        <Cart cart={products} style={{ marginRight: 20 }} />
      </View>

      <View style={styles.totalStyle}>
        <Text style={globalStyles.retroMessage}>Total - </Text>
        <Text style={globalStyles.retroMessage}>
          ${products.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  goodsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default Total
