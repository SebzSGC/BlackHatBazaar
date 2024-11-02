import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native'
import RetroButton from '../../components/RetroButton'
import globalStyles from '../../styles/Global'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../../types/ViewsParams'
import { useUser } from '../../context/UserContext'
import { FirebaseContext } from '../../firebase'
import { Product } from '../../interfaces/Product'

type CheckoutProps = {
  navigation: StackNavigationProp<ViewsParams, 'Checkout'>
}

const Checkout = ({ navigation }: CheckoutProps) => {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useUser()
  const [items, setCart] = useState<Product[]>([])

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cart = await firebase.getCart(user.id)
        setCart(cart)
      } catch (error) {
        console.error('Error al obtener el carrito:', error)
      }
    }

    fetchCart()
  }, [])

  const totalAmount = items.reduce(
    (acc, product) => acc + product.price * product.amountTaken,
    0
  )

  const createPreferenceDirectly = async () => {
    try {
      const preference = {
        items: items.map(product => ({
          title: product.title,
          quantity: product.amountTaken,
          currency_id: 'COP',
          unit_price: Math.round(product.price),
        })),
        payer: {
          email: user.email,
        },
        back_urls: {
          success: 'myapp://payment-success',
          failure: 'myapp://payment-failure',
          pending: 'myapp://payment-pending',
        },
        auto_return: 'approved',
      }

      const response = await fetch(
        'https://api.mercadopago.com/checkout/preferences',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer TEST-7747490925284097-110123-c2eda6d7c179ee1353e63c07d6a8481a-1144020500`, // Reemplaza con tu access token de Mercado Pago
          },
          body: JSON.stringify(preference),
        }
      )

      const data = await response.json()
      if (data.id) {
        const url = `https://sandbox.mercadopago.com.co/checkout/v1/redirect?pref_id=${data.id}`
        Linking.openURL(url).catch(err => {
          console.error('Failed to open URL:', err)
          Alert.alert('Error', 'No se pudo abrir el navegador.')
        })
      }
    } catch (error) {
      console.error('Error al crear la preferencia:', error)
      Alert.alert('Error', 'Hubo un problema al crear la preferencia.')
    }
  }

  useEffect(() => {
    interface DeepLinkEvent {
      url: string
    }

    const handleDeepLink = (event: DeepLinkEvent) => {
      const url = event.url
      if (url.includes('payment-success')) {
        Alert.alert('Pago Exitoso', '¡Gracias por tu compra!')
      } else if (url.includes('payment-failure')) {
        Alert.alert('Pago Fallido', 'Tu pago no fue procesado.')
      } else if (url.includes('payment-pending')) {
        Alert.alert('Pago Pendiente', 'Tu pago está en proceso.')
      }
    }

    // Agregar listener de enlace
    const linkingListener = Linking.addEventListener('url', handleDeepLink)

    // Quitar listener al desmontar
    return () => {
      linkingListener.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumen del Pedido</Text>

      <ScrollView style={styles.productsList}>
        {items.map(product => (
          <View key={product.id} style={styles.productContainer}>
            <View style={styles.productInfo}>
              <Text style={globalStyles.retroHeader}>{product.title}</Text>
              <Text style={styles.productQuantity}>
                Cantidad: {product.amountTaken}
              </Text>
            </View>
            <Text style={styles.productPrice}>
              ${(product.price * product.amountTaken).toFixed(2)}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total a Pagar:</Text>
        <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <RetroButton
          title="Confirmar Pago"
          onPress={createPreferenceDirectly}
        />

        <TouchableOpacity onPress={() => navigation.navigate('CartShop')}>
          <Text style={styles.backToShopText}>Volver a la Tienda</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontFamily: 'HACKED',
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  productsList: {
    flex: 1,
    marginVertical: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#444',
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#FFF',
    borderWidth: 2,
  },
  productInfo: {
    flexDirection: 'column',
  },
  productQuantity: {
    fontSize: 16,
    fontFamily: 'Jersey10-Regular',
    color: '#CCC',
  },
  productPrice: {
    fontSize: 18,
    fontFamily: 'HACKED',
    color: '#FFF',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 2,
    borderColor: '#FFF',
  },
  totalText: {
    fontSize: 20,
    fontFamily: 'HACKED',
    color: '#FFF',
  },
  totalAmount: {
    fontSize: 22,
    fontFamily: 'HACKED',
    color: '#00FF00',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  backToShopText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Jersey10-Regular',
    marginTop: 10,
  },
})

export default Checkout
