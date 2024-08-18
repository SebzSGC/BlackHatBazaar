import React, { useState } from 'react'
import RetroModal from './src/components/RetroModal'
import { StyleSheet, View } from 'react-native'
import RetroButton from './src/components/RetroButton'
import ListOfProducts from './src/screens/ListOfProducts'
import Login from './src/screens/Login'

function App(): React.JSX.Element {
  return (
    //<ListOfProducts />
    <Login />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
