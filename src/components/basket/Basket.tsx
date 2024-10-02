import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../../styles/Global'
import products from '../../utils/products'

const Basket = () => {
  return (
    <View>
      {products.map(item => {
        return (
          <View key={item.id} style={styles.basketContainerStyle}>
            <Text style={globalStyles.retroMessage}>{item.title}</Text>

            <View>
              <Text style={globalStyles.retroMessage}>
                {item.amountTaken} x ${item.price.toFixed(2)}
              </Text>
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
})

export default Basket
