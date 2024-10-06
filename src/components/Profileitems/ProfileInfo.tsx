import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import RetroButton from '../RetroButton'

//import { User, Purchase } from '../../interfaces/Product'

// Simulación de datos del usuario
// const userData: User = {
//   id: 'user123',
//   name: 'Sebastian',
//   email: 'sebastian@example.com',
//   avatar: require('../assets/img/user-avatar.png'),
//   shippingAddress: '1234 Cyber Street, Tech City',
//   paymentMethod: 'Credit Card - **** **** **** 1234',
// }

// const purchasesData: Purchase[] = [
//   // Aquí puedes incluir tus compras de ejemplo o simuladas, como en el ejemplo anterior
// ]

const ProfileInfo = () => {
  //   const route = useRoute()
  //   const { user = userData, purchases = purchasesData } = route.params || {}

  return (
    <View style={styles.container}>
      {/* Sección de información del usuario */}
      <View style={styles.userInfoContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/200/301' }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Sebas</Text>
        <Text style={styles.userEmail}>sebas@ejemplo</Text>
      </View>

      {/* Dirección de envío y método de pago */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Dirección de Envío</Text>
        <Text style={styles.sectionText}>crr58G</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Método de Pago</Text>
        <Text style={styles.sectionText}>Debito</Text>
      </View>

      {/* Opciones adicionales como "Editar perfil", "Cerrar sesión", etc. */}
      <RetroButton title="Editar perfil" />
      <RetroButton title="Cerrar sesión" style={styles.logoutButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Jersey10-Regular',
    color: '#FFF',
  },
  userEmail: {
    fontSize: 16,
    fontFamily: 'Jersey10-Regular',
    color: '#CCC',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Jersey10-Regular',
    color: '#FFCC00', // Color amarillo para resaltar los títulos
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: 'Jersey10-Regular',
    color: '#CCC',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#FF4444', // Botón rojo para cerrar sesión
  },
})

export default ProfileInfo
