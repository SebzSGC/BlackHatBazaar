import React, { useState, useEffect } from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native'
import FlippableProduct from './FlippableProduct'
import products from '../utils/products'
import { Product } from '../interfaces/Product'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../types/ViewsParams'

type ListOfCategoriesProp =
  | StackNavigationProp<ViewsParams, 'ListOfProducts'>
  | StackNavigationProp<ViewsParams, 'Home'>

type Props = {
  navigation: ListOfCategoriesProp
}

const ListOfCategories = ({ navigation }: Props) => {
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

  const renderItem = ({ item }: { item: Product }) => (
    <View style={{ width: screenWidth / numColumns - 20 }}>
      <FlippableProduct
        product={item}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
        width={screenWidth / numColumns - 20}
      />
    </View>
  )

  return (
    <ImageBackground
      source={require('../assets/img/wp_tecnologia.jpg')}
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
    padding: 8,
    marginTop: 20,
  },
  productList: {
    alignItems: 'center',
  },
})

export default ListOfCategories
