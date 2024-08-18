import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import globalStyles from '../styles/Global'
import RetroInput from '../components/RetroInput'

const Register = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [bornDate, setBornDate] = useState('')
  const [address, setAddress] = useState('')
  const [region, setRegion] = useState('')

  const handleRegister = () => {}

  const handleCreateAccount = () => {}

  return (
    <View style={globalStyles.formContainer}>
      <Image
        source={require('../assets/img/Logo-Tienda.jpg')}
        style={globalStyles.formLogo}
      />

      <Text style={globalStyles.retroHeader}>Crear cuenta</Text>

      <Text style={globalStyles.label}>usuario</Text>
      <RetroInput
        value={user}
        onChangeText={setUser}
        placeholder="Ingresa tu usuario"
      />

      <Text style={globalStyles.label}>Contraseña</Text>
      <RetroInput
        value={password}
        onChangeText={setPassword}
        placeholder="Ingresa tu contraseña"
      />

      <Text style={globalStyles.label}>Correo Electronico</Text>
      <RetroInput
        value={email}
        onChangeText={setEmail}
        placeholder="Ingresa tu correo electronico"
      />

      <Text style={globalStyles.label}>Fecha de nacimiento</Text>
      <RetroInput
        value={bornDate}
        onChangeText={setBornDate}
        placeholder="Ingresa tu fecha de nacimiento"
      />

      <Text style={globalStyles.label}>Direccion</Text>
      <RetroInput
        value={address}
        onChangeText={setAddress}
        placeholder="Ingresa tu direccion"
        secureTextEntry
      />

      <Text style={globalStyles.label}>Region</Text>
      <RetroInput
        value={region}
        onChangeText={setRegion}
        placeholder="Ingresa tu region"
        secureTextEntry
      />
      <TouchableOpacity
        style={globalStyles.formButton}
        onPress={handleRegister}
      >
        <Text style={globalStyles.formButtonText}>Crear cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleCreateAccount}
        style={globalStyles.formAccountContainer}
      >
        <Text style={globalStyles.retroMessage}>
          ¿Ya tienes una cuenta? Iniciar Sesion
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register
