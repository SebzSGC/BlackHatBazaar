import React, { useState, useRef, useEffect, useContext } from 'react'
import { View, Text, Keyboard } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import LookUp from './icons/LookUp'
import Chest from './icons/Chest'
import Cart from './icons/Cart'
import { TextInput } from 'react-native-gesture-handler'
import globalStyles from '../styles/Global'
import PressableOpacity from './PressableOpacity'
import { useUser } from '../context/UserContext'
import { FirebaseContext } from '../firebase'
import { Product } from '../interfaces/Product'

type BottomNavBarProps = {
  navigation: NavigationProp<any>
}

const BottomNavBar = ({ navigation }: BottomNavBarProps) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef<TextInput>(null)
  const { firebase } = useContext(FirebaseContext)
  const { user } = useUser()
  const [CarItems, setCart] = useState<Product[]>([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const cart = await firebase.getCart(user.id)
        setCart(cart)
      } catch (error) {
        console.error('Error al obtener el carrito:', error)
      }
    }

    fetchFavorites()
  }, [])

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
      <PressableOpacity onPress={handleSearchPress}>
        <View style={globalStyles.navItem}>
          <LookUp />
        </View>
        <Text style={globalStyles.navText}>Buscar</Text>
      </PressableOpacity>
      <PressableOpacity onPress={() => navigation.navigate('CartShop')}>
        <View style={globalStyles.navItem}>
          <Cart cart={CarItems} />
          <Text style={globalStyles.navText}>Carrito</Text>
        </View>
      </PressableOpacity>
      <PressableOpacity onPress={() => navigation.navigate('Categories')}>
        <View style={globalStyles.navItem}>
          <Chest />
        </View>
        <Text style={globalStyles.navText}>Categorías</Text>
      </PressableOpacity>
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
