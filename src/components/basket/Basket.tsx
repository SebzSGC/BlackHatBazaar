import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../../styles/Global'
import products from '../../utils/products'

const Basket = () => {
  return (
    <View>
      {products.map(item => {
        const isOnSale = item.onSale
        const discountAmount = isOnSale ? (item.oldPrice ?? 0) - item.price : 0
        const discountTotal = discountAmount * item.amountTaken

        return (
          <View key={item.id} style={styles.basketContainerStyle}>
            <Text style={globalStyles.retroMessage}>{item.title}</Text>

            <View>
              {isOnSale ? (
                <>
                  <Text style={[globalStyles.retroMessage, styles.oldPrice]}>
                    {item.amountTaken} x ${item.oldPrice?.toFixed(2) ?? '0.00'}
                  </Text>
                  <Text style={globalStyles.retroMessage}>
                    ${item.price.toFixed(2)}
                  </Text>
                  <Text style={styles.savingsText}>
                    Ahorro: ${discountTotal.toFixed(2)}
                  </Text>
                </>
              ) : (
                <Text style={globalStyles.retroMessage}>
                  {item.amountTaken} x ${item.price.toFixed(2)}
                </Text>
              )}
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  basketContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    backgroundColor: '#e1e1e1',
    borderColor: '#8b8b8b',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#FF4500',
  },
  savingsText: {
    color: '#FF4500',
    fontSize: 12,
    fontFamily: 'HACKED',
  },
})

export default Basket
