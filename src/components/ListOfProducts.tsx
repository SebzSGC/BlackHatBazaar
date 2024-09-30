import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native'
import RetroButton from '../components/RetroButton'
import RetroInfoModal from '../components/RetroInfoModal'
import globalStyles from '../styles/Global'
import { Product } from '../interfaces/Product'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../types/ViewsParams'
import products from '../utils/products'
import PressableOpacity from '../components/PressableOpacity'

type ListOfProductsProp =
  | StackNavigationProp<ViewsParams, 'ListOfProducts'>
  | StackNavigationProp<ViewsParams, 'Home'>

type Props = {
  navigation: ListOfProductsProp
}

const ListOfProducts = ({ navigation }: Props) => {
  const [numColumns, setNumColumns] = useState(2)
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width)

  useEffect(() => {
    const updateLayout = () => {
      const width = Dimensions.get('window').width
      setScreenWidth(width)
      setNumColumns(width > 600 ? 3 : 2)
    }

    const subscription = Dimensions.addEventListener('change', updateLayout)

    return () => {
      subscription?.remove()
    }
  }, [])

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setModalVisible(true)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setModalVisible(false)
  }

  const renderItem = ({ item }: { item: Product }) => (
    <PressableOpacity opacity={false} onPress={() => openModal(item)}>
      <View
        style={[styles.productCard, { width: screenWidth / numColumns - 20 }]}
      >
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

        <RetroButton
          title="Comprar ahora"
          onPress={() => {
            navigation.navigate('ProductDetail', { product: item })
          }}
        />
      </View>
    </PressableOpacity>
  )

  return (
    <ImageBackground
      source={require('../assets/img/home-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          key={numColumns.toString()}
          numColumns={numColumns}
          contentContainerStyle={styles.productList}
        />

        {selectedProduct && (
          <RetroInfoModal
            visible={modalVisible}
            onClose={() => closeModal()}
            title={selectedProduct.title}
            description={selectedProduct.description}
          />
        )}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
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
})

export default ListOfProducts
