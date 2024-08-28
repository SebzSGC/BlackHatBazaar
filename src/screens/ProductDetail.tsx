import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import RetroButton from '../components/RetroButton'
import ProductInfo from '../components/ProductInfo'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../types/ViewsParams'
import { RouteProp } from '@react-navigation/native'

type ProductDetailScreenRouteProp = RouteProp<ViewsParams, 'ProductDetail'>

type Props = {
  navigation: StackNavigationProp<ViewsParams, 'ProductDetail'>
  route: ProductDetailScreenRouteProp
}

const ProductDetail: React.FC<Props> = ({ navigation, route }) => {
  const { product } = route.params
  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.buttonContainer}>
          <RetroButton
            title="Comprar ahora"
            onPress={() => console.log('hola')}
          />
          <RetroButton
            title="Agregar a favoritos"
            onPress={() => console.log('hola')}
          />
        </View>
      </View>
      <ProductInfo product={product} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0d0d0d',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'HACKED',
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    color: '#ff0055',
    fontFamily: 'HACKED',
    marginBottom: 8,
  },
  stock: {
    fontSize: 16,
    color: '#0077ff',
    fontFamily: 'HACKED',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#cccccc',
    fontFamily: 'HACKED',
    marginBottom: 16,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default ProductDetail
