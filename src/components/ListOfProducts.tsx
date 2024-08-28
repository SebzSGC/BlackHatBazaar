import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import RetroButton from '../components/RetroButton'
import RetroInfoModal from '../components/RetroInfoModal'
import globalStyles from '../styles/Global'
import { Product } from '../interfaces/Product'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../types/ViewsParams'

type ListOfProductsProp =
  | StackNavigationProp<ViewsParams, 'ListOfProducts'>
  | StackNavigationProp<ViewsParams, 'Home'>

type Props = {
  navigation: ListOfProductsProp
}

const products: Product[] = [
  {
    id: '1',
    title: 'Retro Keyboard',
    price: '$80',
    image: require('../assets/img/keybord.jpeg'),
    description: 'This is a vintage keyboard from the 80s',
    category: 'Electronics',
    stock: 'Available',
    userId: '1',
  },
  {
    id: '2',
    title: 'Vintage Monitor',
    price: '$150',
    image: require('../assets/img/monitor.jpeg'),
    description: 'This is a vintage monitor from the 80s',
    category: 'Electronics',
    stock: 'Available',
    userId: '2',
  },
  {
    id: '3',
    title: 'Classic Mouse',
    price: '$20',
    image: require('../assets/img/mouse.jpeg'),
    description: 'This is a vintage mouse from the 80s',
    category: 'Electronics',
    stock: 'Available',
    userId: '3',
  },
]

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
    <TouchableOpacity onPress={() => openModal(item)}>
      <View
        style={[styles.productCard, { width: screenWidth / numColumns - 20 }]}
      >
        <Image source={item.image} style={styles.productImage} />
        <Text style={globalStyles.retroTitle}>{item.title}</Text>
        <Text style={globalStyles.retroHeader}>{item.price}</Text>
        <RetroButton
          title="Comprar ahora"
          onPress={() => {
            navigation.navigate('ProductDetail', { product: item })
          }}
        />
      </View>
    </TouchableOpacity>
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
})

export default ListOfProducts
