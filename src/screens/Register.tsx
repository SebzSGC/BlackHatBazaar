import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import globalStyles from '../styles/Global'
import RetroInput from '../components/RetroInput'
import { NavigationProp } from '@react-navigation/native'
import PressableOpacity from '../components/PressableOpacity'

type RegisterProps = {
  navigation: NavigationProp<any>
}

const Register = ({ navigation }: RegisterProps) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [bornDate, setBornDate] = useState('')
  const [address, setAddress] = useState('')
  const [region, setRegion] = useState('')

  const handleRegister = () => {}

  const handleCreateAccount = () => {
    navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollViewContent}>
      <View style={globalStyles.formContainer}>
        <Image
          source={require('../assets/img/Logo-Tienda.jpg')}
          style={globalStyles.formLogo}
        />

        <Text style={globalStyles.retroHeader}>Crear cuenta</Text>

        <Text style={globalStyles.label}>Usuario</Text>
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

        <Text style={globalStyles.label}>Correo Electrónico</Text>
        <RetroInput
          value={email}
          onChangeText={setEmail}
          placeholder="Ingresa tu correo electrónico"
        />

        <Text style={globalStyles.label}>Fecha de nacimiento</Text>
        <RetroInput
          value={bornDate}
          onChangeText={setBornDate}
          placeholder="Ingresa tu fecha de nacimiento"
        />

        <Text style={globalStyles.label}>Dirección</Text>
        <RetroInput
          value={address}
          onChangeText={setAddress}
          placeholder="Ingresa tu dirección"
        />

        <Text style={globalStyles.label}>Región</Text>
        <RetroInput
          value={region}
          onChangeText={setRegion}
          placeholder="Ingresa tu región"
        />

        <PressableOpacity
          style={globalStyles.formButton}
          onPress={handleRegister}
        >
          <Text style={globalStyles.formButtonText}>Crear cuenta</Text>
        </PressableOpacity>

        <PressableOpacity
          onPress={handleCreateAccount}
          style={globalStyles.formAccountContainer}
        >
          <Text style={globalStyles.retroMessage}>
            ¿Ya tienes una cuenta? Iniciar Sesión
          </Text>
        </PressableOpacity>
      </View>
    </ScrollView>
  )
}

export default Register
