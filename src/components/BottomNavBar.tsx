import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import LookUp from './icons/LookUp'
import Chest from './icons/Chest'
import Cart from './icons/Cart'
import { TextInput } from 'react-native-gesture-handler'

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
    <View style={styles.navBar}>
      <TouchableOpacity onPress={handleSearchPress}>
        <View style={styles.navItem}>
          <LookUp />
          <Text style={styles.navText}>Buscar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.navItem}>
          <Cart />
          <Text style={styles.navText}>Carrito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.navItem}>
          <Chest />
          <Text style={styles.navText}>Categorías</Text>
        </View>
      </TouchableOpacity>
      {isSearchVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            ref={searchInputRef}
            style={styles.searchInput}
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

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E0E0E0',
    paddingVertical: 15,
    borderTopWidth: 2,
    borderTopColor: '#B0B0B0',
    position: 'relative',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 5,
    fontSize: 14,
    color: '#4D4D4D',
    fontFamily: 'Jersey10-Regular',
  },
  searchContainer: {
    position: 'absolute',
    top: -60,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 10,
  },
  searchInput: {
    height: 40,
    width: '90%',
    borderColor: '#B0B0B0',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    color: '#4D4D4D',
    fontFamily: 'Jersey10-Regular',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})

export default BottomNavBar
