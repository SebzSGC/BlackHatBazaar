import React from 'react'
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native'
import RetroButton from './RetroButton'
import globalStyles from '../styles/Global'
import { NavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../types/ViewsParams'

type Category = {
  id: string
  name: string
}

type CategoriesProps = {
  navigation: StackNavigationProp<ViewsParams, 'Home'>
}

const categories: Category[] = [
  { id: '1', name: 'Tecnología' },
  { id: '2', name: 'Hogar' },
  { id: '3', name: 'Moda' },
  { id: '4', name: 'Juguetes' },
  { id: '5', name: 'Deportes' },
]

const Categories = ({ navigation }: CategoriesProps) => {
  const renderItem = ({ item }: { item: Category }) => (
    <RetroButton
      onPress={() => navigation.navigate('Ofert')}
      style={styles.categoryButton}
    >
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
        <Text style={[globalStyles.retroHeader, { color: '#ff0008' }]}>
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
