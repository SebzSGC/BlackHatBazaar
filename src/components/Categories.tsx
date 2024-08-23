import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native'
import RetroButton from './RetroButton'
import globalStyles from '../styles/Global'

type Category = {
  id: string
  name: string
}

const categories: Category[] = [
  { id: '1', name: 'Tecnología' },
  { id: '2', name: 'Hogar' },
  { id: '3', name: 'Moda' },
  { id: '4', name: 'Juguetes' },
  { id: '5', name: 'Deportes' },
]

const Categories = () => {
  const renderItem = ({ item }: { item: Category }) => (
    <RetroButton style={styles.categoryButton}>
      <Text
        style={[
          globalStyles.retroHeader,
          { color: '#FFFFFF', fontFamily: 'Jersey10-Regular' },
        ]}
      >
        {item.name}
      </Text>
    </RetroButton>
  )

  return (
    <ImageBackground
      source={require('../assets/img/categories-bg.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={[globalStyles.retroHeader, { color: '#ff0008s' }]}>
          Categorias
        </Text>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
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
  overlay: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#4D4D4D',
    fontFamily: 'Jersey10-Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Jersey10-Regular',
  },
})

export default Categories
