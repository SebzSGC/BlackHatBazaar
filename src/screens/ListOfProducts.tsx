import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import RetroButton from '../components/RetroButton'
import RetroInfoModal from '../components/RetroInfoModal'
import globalStyles from '../styles/Global'

interface Product {
  id: string
  title: string
  price: string
  image: any
  description: string
}

const products: Product[] = [
  {
    id: '1',
    title: 'Retro Keyboard',
    price: '$80',
    image: require('../assets/img/keybord.jpeg'),
    description: 'This is a vintage keyboard from the 80s',
  },
  {
    id: '2',
    title: 'Vintage Monitor',
    price: '$150',
    image: require('../assets/img/monitor.jpeg'),
    description: 'This is a vintage monitor from the 80s',
  },
  {
    id: '3',
    title: 'Classic Mouse',
    price: '$20',
    image: require('../assets/img/mouse.jpeg'),
    description: 'This is a vintage mouse from the 80s',
  },
]

const numColumns = 2
const screenWidth = Dimensions.get('window').width

const ListOfProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [modalVisible, setModalVisible] = useState(false)

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
      <View style={styles.productCard}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={globalStyles.retroTitle}>{item.title}</Text>
        <Text style={globalStyles.retroHeader}>{item.price}</Text>
        <RetroButton
          title="Buy Now"
          onPress={() => console.log('Buy pressed')}
        />
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
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
    width: screenWidth / numColumns - 20,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
})

export default ListOfProducts
