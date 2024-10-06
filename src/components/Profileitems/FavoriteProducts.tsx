import React from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import { Product } from '../../interfaces/Product'
import products from '../../utils/products'
import globalStyles from '../../styles/Global'
import RetroButton from '../RetroButton'
import PressableOpacity from '../PressableOpacity'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../../types/ViewsParams'

type FavoriteProductsProp = StackNavigationProp<ViewsParams, 'FavoriteProducts'>

type Props = {
  navigation: FavoriteProductsProp
}

const FavoriteProducts = ({ navigation }: Props) => {
  const renderItem = ({ item }: { item: Product }) => (
    <PressableOpacity opacity={false}>
      <View style={styles.productCard}>
        {item.onSale && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleBadgeText}>¡Oferta!</Text>
          </View>
        )}
        <Image source={item.image} style={styles.productImage} />
        <Text style={globalStyles.retroTitle}>{item.title}</Text>

        {item.onSale ? (
          <View style={styles.priceContainer}>
            <Text style={styles.oldPrice}>$42</Text>
            <Text style={styles.newPrice}>${item.price}</Text>
          </View>
        ) : (
          <Text style={globalStyles.retroHeader}>${item.price}</Text>
        )}

        <View style={styles.buttonContainer}>
          <RetroButton
            title="Ver Producto"
            onPress={() =>
              navigation.navigate('ProductDetail', { product: item })
            }
          />
          <RetroButton title="Quitar" style={styles.removeButton} />
        </View>
      </View>
    </PressableOpacity>
  )

  return (
    <View style={styles.container}>
      {products.length === 0 ? (
        <Text style={globalStyles.retroTitle}>
          No tienes productos en favoritos
        </Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.productList}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#1a1a1a',
  },
  productList: {
    alignItems: 'center',
  },
  productCard: {
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  saleBadge: {
    position: 'absolute',
    top: -10,
    left: -2,
    backgroundColor: '#FF4500',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFF',
    zIndex: 1,
  },
  saleBadgeText: {
    color: '#FFF',
    fontFamily: 'HACKED',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oldPrice: {
    fontFamily: 'HACKED',
    fontSize: 18,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  newPrice: {
    fontFamily: 'HACKED',
    color: '#FF4500',
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  removeButton: {
    backgroundColor: '#FF4500',
  },
})

export default FavoriteProducts
