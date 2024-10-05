import React from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import globalStyles from '../../styles/Global'
import RetroButton from '../RetroButton'
import { Purchase } from '../../interfaces/Product'

const PurchasesList = () => {
  const route = useRoute()
  const { purchases } = route.params as { purchases: Purchase[] }

  const renderItem = ({ item }: { item: Purchase }) => (
    <View style={styles.purchaseCard}>
      <Image source={item.product.image} style={styles.productImage} />
      <View style={styles.purchaseDetails}>
        <Text style={globalStyles.retroTitle}>{item.product.title}</Text>
        <Text style={styles.purchaseText}>Cantidad: {item.quantity}</Text>
        <Text style={styles.purchaseText}>
          Precio total: ${item.totalPrice.toFixed(2)}
        </Text>
        <Text style={styles.purchaseText}>Fecha: {item.date}</Text>

        {/* Mostrar si el producto estuvo en oferta */}
        {item.product.onSale && (
          <Text style={styles.saleText}>
            ¡Este producto estuvo en oferta! Precio anterior: $
            {item.product.oldPrice?.toFixed(2)}
          </Text>
        )}
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.retroHeader, styles.title]}>
        Historial de Compras
      </Text>
      <FlatList
        data={purchases}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFF',
  },
  list: {
    alignItems: 'center',
  },
  purchaseCard: {
    flexDirection: 'row',
    backgroundColor: '#444',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
    padding: 10,
    marginVertical: 8,
    width: '100%',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
    marginRight: 15,
    resizeMode: 'contain',
  },
  purchaseDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  purchaseText: {
    fontSize: 16,
    fontFamily: 'Jersey10-Regular',
    color: '#CCC',
    marginBottom: 5,
  },
  saleText: {
    fontSize: 14,
    fontFamily: 'Jersey10-Regular',
    color: '#FFCC00',
    marginTop: 5,
  },
})

export default PurchasesList
