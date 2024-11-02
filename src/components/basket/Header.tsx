import React, { useContext } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import RetroButton from '../RetroButton'
import globalStyles from '../../styles/Global'
import { NavigationProp } from '@react-navigation/native'
import { useUser } from '../../context/UserContext'
import { FirebaseContext } from '../../firebase'

type Props = {
  navigation: NavigationProp<any>
}

const Header = ({ navigation }: Props) => {
  const { user } = useUser()
  const { firebase } = useContext(FirebaseContext)

  const clearCart = async () => {
    try {
      await firebase.clearCart(user.id)
      Alert.alert(
        'Carrito vaciado',
        'Tu carrito ha sido vaciado correctamente.'
      )
    } catch (error) {
      console.error('Error al eliminar el carrito:', error)
    }
  }
  return (
    <View style={[styles.headerStyle, globalStyles.retroButton]}>
      <RetroButton onPress={() => navigation.goBack()} title="x" />
      <Text
        style={[
          globalStyles.retroTitle,
          { marginBottom: 0, fontSize: 30, color: '#000' },
        ]}
      >
        Tu carrito
      </Text>
      <RetroButton title="Vaciar" onPress={() => clearCart()} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    flex: 0.4,
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
