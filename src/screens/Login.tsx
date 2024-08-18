import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native'
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
    <View style={styles.container}>
      <Image
        source={require('../assets/img/Logo-Tienda.jpg')}
        style={styles.logo}
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar Sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleCreateAccount}
        style={styles.createAccountContainer}
      >
        <Text style={globalStyles.retroMessage}>
          ¿No tienes cuenta? Crear cuenta
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
  },
  createAccountContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 40,
  },

  loginButton: {
    backgroundColor: '#333',
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: '#FFF',
    borderWidth: 2,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontFamily: 'HACKED',
    fontSize: 18,
  },
})

export default Login
