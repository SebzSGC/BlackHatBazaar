import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cart from '../icons/Cart'
import products from '../../utils/products'
import globalStyles from '../../styles/Global'

const Total = () => {
  const totalPrice = products
    .reduce((sum, item) => {
      return (
        sum +
        (item.onSale
          ? item.price * item.amountTaken
          : (item.oldPrice ?? 0) * item.amountTaken)
      )
    }, 0)
    .toFixed(2)

  const totalSavings = products
    .reduce((sum, item) => {
      return item.onSale
        ? sum + ((item.oldPrice ?? 0) - item.price) * item.amountTaken
        : sum
    }, 0)
    .toFixed(2)

  return (
    <View style={styles.containerStyle}>
      <View style={styles.goodsStyle}>
        <Cart cart={products} style={{ marginRight: 20 }} />
      </View>

      <View style={styles.totalStyle}>
        <Text style={globalStyles.retroMessage}>Total - </Text>
        <Text style={globalStyles.retroMessage}>${totalPrice}</Text>
      </View>

      {/* Mostrar el ahorro total si hay descuentos */}
      {parseFloat(totalSavings) > 0 && (
        <View style={styles.savingsStyle}>
          <Text style={globalStyles.retroMessage}>Has ahorrado - </Text>
          <Text style={[globalStyles.retroMessage, styles.savingsText]}>
            ${totalSavings}
          </Text>
        </View>
      )}
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
  savingsStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  savingsText: {
    color: '#FF4500',
  },
})

export default Total
