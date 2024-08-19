import {
  CommonActions,
  NavigationProp,
  useFocusEffect,
} from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import RetroModal from '../components/RetroModal'

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
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a la Home</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontFamily: 'HACKED',
    color: '#333',
  },
})

export default Home
