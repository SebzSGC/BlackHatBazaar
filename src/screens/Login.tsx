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
      <Text style={styles.header}>Iniciar Sesion</Text>

      <Text style={styles.label}>Correo Electronico</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar Sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleCreateAccount}
        style={styles.createAccountContainer}
      >
        <Text style={styles.createAccountText}>
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
  createAccountText: {
    fontFamily: 'HACKED',
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 40,
  },
  header: {
    fontSize: 32,
    fontFamily: 'HACKED',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontFamily: 'Jersey10-Regular',
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
    fontFamily: 'Jersey10-Regular',
    fontSize: 16,
    color: '#333',
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
