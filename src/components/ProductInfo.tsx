import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Product } from '../interfaces/Product'
import globalStyles from '../styles/Global'

interface ProductProps {
  product: Product
}

const ProductDetail = ({ product }: ProductProps) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={[globalStyles.retroTitle, { color: '#fff' }]}>
        Detalles del producto
      </Text>
      <Text style={styles.detail}>
        <Text style={[globalStyles.retroTitle, { color: '#fff' }]}>
          Categoría: {product.category}
        </Text>
      </Text>
      <Text style={styles.detail}>
        <Text style={[globalStyles.retroTitle, { color: '#fff' }]}>
          Stock disponible: {product.stock}
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: '#0d0d0ds',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
  },
})

export default ProductDetail
