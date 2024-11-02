import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../../styles/Global'
import { FirebaseContext } from '../../firebase'
import { useUser } from '../../context/UserContext'
import { Product } from '../../interfaces/Product'

const Basket = () => {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useUser()
  const [Cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const cart = await firebase.getCart(user.id)
        setCart(cart)
      } catch (error) {
        console.error('Error al obtener el carrito:', error)
      }
    }

    fetchFavorites()
  }, [firebase, user.id])
  return (
    <View>
      {Cart.map(item => {
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
