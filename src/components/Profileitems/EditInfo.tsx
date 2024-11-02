import React, { useReducer } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import RetroButton from '../../components/RetroButton'
import globalStyles from '../../styles/Global'
import { User } from '../../interfaces/User'
import { useUser } from '../../context/UserContext'
import { useNavigation } from '@react-navigation/native'

type Action =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_EMAIL'; payload: string }
  | { type: 'UPDATE_ADDRESS'; payload: string }
  | { type: 'UPDATE_PHONE'; payload: string }
  | { type: 'UPDATE_AVATAR'; payload: string }

const userReducer = (state: User, action: Action): User => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload }
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload }
    case 'UPDATE_PHONE':
      return { ...state, phone: action.payload }
    case 'UPDATE_AVATAR':
      return { ...state, avatar: action.payload }
    default:
      return state
  }
}

const EditInfo = () => {
  const { user, updateUser } = useUser()
  const [state, dispatch] = useReducer(userReducer, user)
  const navigation = useNavigation()

  const handleSave = () => {
    updateUser(state)
    console.log('Datos guardados:', state)
    navigation.goBack()
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: state.avatar }} style={styles.avatar} />
        <TextInput
          style={[globalStyles.input, styles.input]}
          placeholder="URL de la imagen"
          value={state.avatar}
          onChangeText={text =>
            dispatch({ type: 'UPDATE_AVATAR', payload: text })
          }
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={globalStyles.retroHeader}>Nombre:</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Nombre"
          value={state.name}
          onChangeText={text =>
            dispatch({ type: 'UPDATE_NAME', payload: text })
          }
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={globalStyles.retroHeader}>Correo Electrónico:</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Correo Electrónico"
          value={state.email}
          onChangeText={text =>
            dispatch({ type: 'UPDATE_EMAIL', payload: text })
          }
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={globalStyles.retroHeader}>Teléfono:</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Teléfono"
          value={state.phone}
          onChangeText={text =>
            dispatch({ type: 'UPDATE_PHONE', payload: text })
          }
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.buttonContainer}>
        <RetroButton title="Guardar Cambios" onPress={handleSave} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1A1A1A',
  },
  avatarContainer: {
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    color: '#FFF',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
})

export default EditInfo
