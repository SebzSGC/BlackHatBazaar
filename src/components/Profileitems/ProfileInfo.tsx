import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import RetroButton from '../RetroButton'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../../types/ViewsParams'
import { CommonActions } from '@react-navigation/native'
import { useUser } from '../../context/UserContext' // Importamos el hook del contexto

type ProfileInfoProps = {
  navigation: StackNavigationProp<ViewsParams, 'ProfileInfo'>
}

const ProfileInfo = ({ navigation }: ProfileInfoProps) => {
  // Obtenemos el usuario del contexto global
  const { user } = useUser()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RetroButton
          title="Cerrar sesion"
          style={styles.logoutButton}
          onPress={() => handleLogout()}
        />
      ),
    })
  }, [navigation])

  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Dirección de Envío</Text>
        <Text style={styles.sectionText}>{user.address[0]}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Método de Pago</Text>
        <Text style={styles.sectionText}>PSE</Text>
      </View>

      <RetroButton
        title="Editar perfil"
        onPress={() => {
          navigation.navigate('EditInfo', { user: user })
        }}
      />
      <RetroButton
        title="Cerrar sesion"
        style={styles.logoutButton}
        onPress={() => handleLogout()}
      />
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
    color: '#FFCC00',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: 'Jersey10-Regular',
    color: '#CCC',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#FF4444',
  },
})

export default ProfileInfo
