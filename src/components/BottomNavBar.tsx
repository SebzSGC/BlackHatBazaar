import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Keyboard, TouchableOpacity } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import LookUp from './icons/LookUp'
import Chest from './icons/Chest'
import Cart from './icons/Cart'
import { TextInput } from 'react-native-gesture-handler'
import globalStyles from '../styles/Global'
import products from '../utils/products'

type BottomNavBarProps = {
  navigation: NavigationProp<any>
}

const BottomNavBar = ({ navigation }: BottomNavBarProps) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef<TextInput>(null)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      if (!isSearchVisible) {
        setIsSearchVisible(true)
      }
    })

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsSearchVisible(false)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [isSearchVisible])

  const handleSearchPress = () => {
    setIsSearchVisible(!isSearchVisible)
    if (!isSearchVisible) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }

  return (
    <View style={globalStyles.navBar}>
      <TouchableOpacity onPress={handleSearchPress}>
        <View style={globalStyles.navItem}>
          <LookUp />
        </View>
        <Text style={globalStyles.navText}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CartShop')}>
        <View style={globalStyles.navItem}>
          <Cart cart={products} />
          <Text style={globalStyles.navText}>Carrito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
        <View style={globalStyles.navItem}>
          <Chest />
        </View>
        <Text style={globalStyles.navText}>Categorías</Text>
      </TouchableOpacity>
      {isSearchVisible && (
        <View style={globalStyles.searchContainer}>
          <TextInput
            ref={searchInputRef}
            style={globalStyles.searchInput}
            placeholder="Escribe tu producto..x_x"
            value={searchText}
            onChangeText={setSearchText}
            onBlur={() => setIsSearchVisible(false)}
          />
        </View>
      )}
    </View>
  )
}
export default BottomNavBar
