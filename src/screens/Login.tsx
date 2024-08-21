import React, { useState } from 'react'
import { Text, TouchableOpacity, Image, ScrollView, View } from 'react-native'
import globalStyles from '../styles/Global'
import RetroInput from '../components/RetroInput'
import { CommonActions, NavigationProp } from '@react-navigation/native'

type LoginProps = {
  navigation: NavigationProp<any>
}

const Login = ({ navigation }: LoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    )
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
        <TouchableOpacity style={globalStyles.formButton} onPress={handleLogin}>
          <Text style={globalStyles.formButtonText}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleCreateAccount}
          style={globalStyles.formAccountContainer}
        >
          <Text style={globalStyles.retroMessage}>
            ¿No tienes cuenta? Crear cuenta
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Login
