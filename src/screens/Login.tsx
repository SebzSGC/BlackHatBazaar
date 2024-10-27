import React, { useContext, useState } from 'react'
import { Text, Image, ScrollView, View, Alert } from 'react-native'
import globalStyles from '../styles/Global'
import RetroInput from '../components/RetroInput'
import { CommonActions, NavigationProp } from '@react-navigation/native'
import PressableOpacity from '../components/PressableOpacity'
import { FirebaseContext } from '../firebase'
import { useUser } from '../context/UserContext'

type LoginProps = {
  navigation: NavigationProp<any>
}

const Login = ({ navigation }: LoginProps) => {
  const { firebase } = useContext(FirebaseContext)
  const { updateUser } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos.')
      return
    }

    try {
      const snapshot = await firebase.db
        .collection('usuarios')
        .where('email', '==', email)
        .where('password', '==', password)
        .get()

      if (!snapshot.empty) {
        const userDoc = snapshot.docs[0]
        const userData = { id: userDoc.id, ...userDoc.data() }

        updateUser({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          password: userData.password,
          avatar: userData.avatar || null,
          products: userData.products || [],
          cart: userData.cart || [],
          orders: userData.orders || [],
          favorites: userData.favorites || [],
          address: userData.address || [],
          phone: userData.phone || '',
          role: userData.role || 'user',
          token: userData.token || '',
        })

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        )
      } else {
        Alert.alert(
          'Error al iniciar sesión',
          'Email o contraseña incorrectos.'
        )
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      Alert.alert(
        'Error al iniciar sesión',
        'Ocurrió un error al intentar iniciar sesión. Por favor, intenta de nuevo.'
      )
    }
  }

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount')
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <View style={globalStyles.formContainer}>
        <Image
          source={require('../assets/img/Logo-Tienda.jpg')}
          style={globalStyles.formLogo}
        />
        <Text style={globalStyles.retroHeader}>Iniciar Sesion</Text>

        <Text style={globalStyles.label}>Correo Electronico</Text>
        <RetroInput
          value={email}
          onChangeText={setEmail}
          placeholder="Ingresa tu correo electronico"
        />

        <Text style={globalStyles.label}>Contraseña</Text>

        <RetroInput
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />
        <PressableOpacity style={globalStyles.formButton} onPress={handleLogin}>
          <Text style={globalStyles.formButtonText}>Iniciar Sesion</Text>
        </PressableOpacity>

        <PressableOpacity
          onPress={handleCreateAccount}
          style={globalStyles.formAccountContainer}
        >
          <Text style={globalStyles.retroMessage}>
            ¿No tienes cuenta? Crear cuenta
          </Text>
        </PressableOpacity>
      </View>
    </ScrollView>
  )
}

export default Login
