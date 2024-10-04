import React, { useState, useEffect } from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native'
import FlippableProduct from './FlippableProduct'
import { Product } from '../interfaces/Product'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../types/ViewsParams'

type ListOfCategoriesProp = StackNavigationProp<ViewsParams, 'CategoriesList'>

type Props = {
  navigation: ListOfCategoriesProp
  imgRute: string
  randomQuotes: string[]
  Products: Product[]
}

const ListOfCategories = ({
  navigation,
  imgRute,
  randomQuotes,
  Products,
}: Props) => {
  const [numColumns, setNumColumns] = useState(2)
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width)

  const getImage = (imgRute: string) => {
    switch (imgRute) {
      case 'tecnology':
        return require('../assets/img/wp_tecnologia.jpg')
      case 'house':
        return require('../assets/img/wp_Hogar.jpg')
      case 'fashion':
        return require('../assets/img/wp_Moda.jpg')
      case 'toys':
        return require('../assets/img/wp_Juegos.jpg')
      case 'sport':
        return require('../assets/img/wp_profile.jpg')
    }
  }

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
        randomQuotes={randomQuotes}
        product={item}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
        width={screenWidth / numColumns - 20}
      />
    </View>
  )

  return (
    <ImageBackground
      source={getImage(imgRute)}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <FlatList
          data={Products}
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
