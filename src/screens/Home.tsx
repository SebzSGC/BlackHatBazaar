import {
  CommonActions,
  NavigationProp,
  useFocusEffect,
} from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import RetroModal from '../components/RetroModal'
import RetroHamburgerMenu from '../components/RetroHamburgerMenu'
import ListOfProducts from '../components/ListOfProducts'
import globalStyles from '../styles/Global'

type HomeProps = {
  navigation: NavigationProp<any>
}

const Home = ({ navigation }: HomeProps) => {
  const [logOut, setLogOut] = useState(false)

  const closeSession = (): boolean => {
    setLogOut(true)
    return true
  }

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        closeSession
      )

      return () => backHandler.remove()
    }, [navigation])
  )

  return (
    <>
      <RetroHamburgerMenu />
      <View style={styles.container}>
        <Text style={[globalStyles.retroHeader, styles.title]}>
          Lista de productos
        </Text>
        <ListOfProducts />
      </View>
      {logOut && (
        <RetroModal
          title="¿Desea cerrar la sesion?"
          visible={logOut}
          onClose={() => setLogOut(false)}
          onConfirm={() => {
            setLogOut(false)
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              })
            )
          }}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
  },
})

export default Home
