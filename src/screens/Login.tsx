import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import globalStyles from '../styles/Global'
import RetroInput from '../components/RetroInput'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    Alert.alert('Login', `Email: ${email}\nPassword: ${password}`)
  }

  const handleCreateAccount = () => {
    Alert.alert('Redirect', 'Redirigiendo a la pantalla de crear cuenta...')
  }

  return (
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
  )
}
export default Login
