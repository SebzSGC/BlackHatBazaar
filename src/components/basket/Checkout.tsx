import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import RetroButton from '../../components/RetroButton'
import globalStyles from '../../styles/Global'
import products from '../../utils/products'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../../types/ViewsParams'
import PressableOpacity from '../PressableOpacity'

type CheckoutProps = {
  navigation: StackNavigationProp<ViewsParams, 'Checkout'>
}

const Checkout = ({ navigation }: CheckoutProps) => {
  const totalAmount = products.reduce(
    (acc, product) => acc + product.price * product.amountTaken,
    0
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumen del Pedido</Text>

      <ScrollView style={styles.productsList}>
        {products.map(product => (
          <View key={product.id} style={styles.productContainer}>
            <View style={styles.productInfo}>
              <Text style={globalStyles.retroHeader}>{product.title}</Text>
              <Text style={styles.productQuantity}>
                Cantidad: {product.stock}
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
          onPress={() => {
            navigation.navigate('PurchaseComplete')
          }}
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
