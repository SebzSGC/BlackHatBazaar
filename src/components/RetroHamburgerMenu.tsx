import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, ImageBackground } from 'react-native'
import HamburgerMenu from './HambugerMenu'
import RetroButton from './RetroButton'
import globalStyles from '../styles/Global'
import { NavigationProp } from '@react-navigation/native'

type RetroHamburgerMenuProps = {
  navigation: NavigationProp<any>
}

const RetroHamburgerMenu = ({ navigation }: RetroHamburgerMenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const closeMenu = () => {
    setMenuVisible(false)
  }

  return (
    <HamburgerMenu onPress={toggleMenu}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={menuVisible}
        onRequestClose={closeMenu}
      >
        <ImageBackground
          source={require('../assets/img/menu-bg.jpeg')}
          style={styles.background}
          imageStyle={{ resizeMode: 'cover' }}
        >
          <RetroButton style={styles.modalBackground} onPress={closeMenu}>
            <View style={styles.menuContainer}>
              <RetroButton
                style={[styles.menuItem, { marginBottom: 5 }]}
                onPress={closeMenu}
              >
                <Text style={globalStyles.retroButtonText}>Inicio</Text>
              </RetroButton>
              <RetroButton
                style={[styles.menuItem, { marginBottom: 5 }]}
                onPress={() => {
                  navigation.navigate('Profile')
                }}
              >
                <Text style={globalStyles.retroButtonText}>Mi Perfil</Text>
              </RetroButton>
              <RetroButton
                style={[styles.menuItem, { marginBottom: 5 }]}
                onPress={closeMenu}
              >
                <Text style={globalStyles.retroButtonText}>Ofertas</Text>
              </RetroButton>
              <RetroButton
                style={[styles.menuItem, { marginBottom: 5 }]}
                onPress={closeMenu}
              >
                <Text style={globalStyles.retroButtonText}>
                  Ayuda y Soporte
                </Text>
              </RetroButton>
            </View>
          </RetroButton>
        </ImageBackground>
      </Modal>
    </HamburgerMenu>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '100%',
    borderRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  menuItem: {
    paddingVertical: 28,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
})

export default RetroHamburgerMenu
