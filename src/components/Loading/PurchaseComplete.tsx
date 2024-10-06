import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import RetroButton from '../RetroButton'
import { ViewsParams } from '../../types/ViewsParams'

type Props = {
  navigation: NavigationProp<ViewsParams, 'PurchaseComplete'>
}

const PurchaseComplete = ({ navigation }: Props) => {
  const handleGoHome = () => {
    navigation.navigate('Home')
  }

  const handleViewOrders = () => {
    navigation.navigate('CartShop')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/wp_Moda.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>¡Compra completada!</Text>
      <Text style={styles.message}>
        Tu pedido se ha realizado con éxito. Pronto recibirás los detalles de la
        compra por correo electrónico.
      </Text>

      <View style={styles.buttonContainer}>
        <RetroButton
          title="Volver a inicio"
          onPress={handleGoHome}
          style={styles.button}
          styleText={styles.buttonText}
        />
        <RetroButton
          title="Ver mis compras"
          onPress={handleViewOrders}
          style={styles.button}
          styleText={styles.buttonText}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 20,
  },
  image: {
    width: 200,
    height: 400,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'HACKED',
    color: '#00FF00',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    fontFamily: 'Jersey10-Regular',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Jersey10-Regular',
  },
})

export default PurchaseComplete
