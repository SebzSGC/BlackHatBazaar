import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  Platform,
  ActivityIndicator,
} from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles/Global'
import RetroInput from '../components/RetroInput'
import { NavigationProp } from '@react-navigation/native'
import PressableOpacity from '../components/PressableOpacity'
import { FirebaseContext } from '../firebase'

type RegisterProps = {
  navigation: NavigationProp<any>
}

const Register = ({ navigation }: RegisterProps) => {
  const { firebase } = useContext(FirebaseContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [bornDate, setBornDate] = useState<Date | null>(null)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [address, setAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
  })
  const [region, setRegion] = useState('')
  const [phone, setPhone] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [regions, setRegions] = useState<string[]>([])
  const [loadingRegions, setLoadingRegions] = useState(true)

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(
          'https://api-colombia.com/api/v1/Department'
        )
        const data = await response.json()
        setRegions(data.map((region: any) => region.name))
        setLoadingRegions(false)
      } catch (error) {
        console.error('Error al obtener las regiones:', error)
        setLoadingRegions(false)
        Alert.alert(
          'Error',
          'No se pudieron cargar las regiones. Por favor, intenta más tarde.'
        )
      }
    }

    fetchRegions()
  }, [])

  const handleRegister = async () => {
    if (
      !name ||
      !password ||
      !email ||
      !bornDate ||
      !address.street ||
      !address.city ||
      !address.postalCode ||
      !region ||
      !phone
    ) {
      Alert.alert('Error', 'Por favor, completa todos los campos.')
      return
    }

    try {
      await firebase.db.collection('usuarios').add({
        name,
        email,
        password,
        avatar,
        products: [],
        cart: [],
        orders: [],
        favorites: [],
        address: [{ ...address, region }],
        phone,
        role: 'user',
        token: '',
      })

      Alert.alert('Cuenta creada', 'Tu cuenta ha sido creada exitosamente.')
      navigation.goBack()
    } catch (error) {
      console.error('Error al registrar usuario:', error)
      Alert.alert(
        'Error al registrar usuario',
        'Ocurrió un error al intentar registrar el usuario. Por favor, intenta de nuevo.'
      )
    }
  }

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || bornDate
      setShowDatePicker(Platform.OS === 'ios')
      setBornDate(currentDate)
    } else {
      setShowDatePicker(false)
    }
  }

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollViewContent}>
      <View style={globalStyles.formContainer}>
        <Image
          source={require('../assets/img/Logo-Tienda.jpg')}
          style={globalStyles.formLogo}
        />

        <Text style={globalStyles.retroHeader}>Crear cuenta</Text>

        <Text style={globalStyles.label}>Nombre</Text>
        <RetroInput
          value={name}
          onChangeText={setName}
          placeholder="Ingresa tu nombre"
        />

        <Text style={globalStyles.label}>Contraseña</Text>
        <RetroInput
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />

        <Text style={globalStyles.label}>Correo Electrónico</Text>
        <RetroInput
          value={email}
          onChangeText={setEmail}
          placeholder="Ingresa tu correo electrónico"
        />

        <Text style={globalStyles.label}>Fecha de nacimiento</Text>
        <PressableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={globalStyles.datePickerText}>
            {bornDate
              ? bornDate.toLocaleDateString()
              : 'Selecciona tu fecha de nacimiento'}
          </Text>
        </PressableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={bornDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={globalStyles.label}>Dirección - Calle</Text>
        <RetroInput
          value={address.street}
          onChangeText={value => setAddress({ ...address, street: value })}
          placeholder="Ingresa tu calle"
        />

        <Text style={globalStyles.label}>Dirección - Ciudad</Text>
        <RetroInput
          value={address.city}
          onChangeText={value => setAddress({ ...address, city: value })}
          placeholder="Ingresa tu ciudad"
        />

        <Text style={globalStyles.label}>Código Postal</Text>
        <RetroInput
          value={address.postalCode}
          onChangeText={value => setAddress({ ...address, postalCode: value })}
          placeholder="Ingresa tu código postal"
        />

        <Text style={globalStyles.label}>Región</Text>
        <View style={globalStyles.pickerContainer}>
          {loadingRegions ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Picker
              selectedValue={region}
              onValueChange={itemValue => setRegion(itemValue)}
            >
              <Picker.Item label="Selecciona una región" value="" />
              {regions.map(reg => (
                <Picker.Item key={reg} label={reg} value={reg} />
              ))}
            </Picker>
          )}
        </View>

        <Text style={globalStyles.label}>Teléfono</Text>
        <RetroInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Ingresa tu número de teléfono"
        />

        <PressableOpacity
          style={globalStyles.formButton}
          onPress={handleRegister}
        >
          <Text style={globalStyles.formButtonText}>Crear cuenta</Text>
        </PressableOpacity>

        <PressableOpacity
          onPress={() => navigation.goBack()}
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
