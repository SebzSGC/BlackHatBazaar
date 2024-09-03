import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RetroButton from '../RetroButton'
import globalStyles from '../../styles/Global'

const Header = () => {
  return (
    <View style={[styles.headerStyle, globalStyles.retroButton]}>
      <RetroButton title="x" />
      <Text
        style={[
          globalStyles.retroTitle,
          { marginBottom: 0, fontSize: 30, color: '#000' },
        ]}
      >
        Tu carrito
      </Text>
      <RetroButton title="Vaciar" />
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    flex: 0.4,
    elevation: 2,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
  },
})

export default Header
