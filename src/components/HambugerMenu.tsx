import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native'
import globalStyles from '../styles/Global'

interface HamburgerMenuProps {
  onPress: (event?: GestureResponderEvent) => void
  children?: React.ReactNode
}

const HamburgerMenu = ({ children, onPress }: HamburgerMenuProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={globalStyles.hamburgerButton} onPress={onPress}>
        <View style={globalStyles.hamburgerLine} />
        <View style={globalStyles.hamburgerLine} />
        <View style={globalStyles.hamburgerLine} />
      </TouchableOpacity>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
})

export default HamburgerMenu
