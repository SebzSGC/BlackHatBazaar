import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../../styles/Global'
import products from '../../utils/products'

const Basket = () => {
  return (
    <View>
      {products.map(item => (
        <View key={item.id} style={styles.basketContainerStyle}>
          <Text style={globalStyles.retroMessage}>{item.title}</Text>
          <Text style={globalStyles.retroMessage}>
            {item.amountTaken} x ${item.price.toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  basketContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    backgroundColor: '#DCDCDC',
  },
})

export default Basket
