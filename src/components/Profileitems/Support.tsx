import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import RetroSupport from '../../components/icons/RetroSupport'
import PressableOpacity from '../../components/PressableOpacity'

const Support: React.FC = () => {
  const handleOptionPress = (option: string) => {
    console.log(`Seleccionaste la opción de: ${option}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Soporte</Text>
        <RetroSupport fill="#FFF" />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <PressableOpacity
          onPress={() => handleOptionPress('Contactar Servicio al Cliente')}
        >
          <View style={styles.optionBox}>
            <Text style={styles.optionText}>Contactar Servicio al Cliente</Text>
          </View>
        </PressableOpacity>

        <PressableOpacity
          onPress={() => handleOptionPress('Preguntas Frecuentes (FAQs)')}
        >
          <View style={styles.optionBox}>
            <Text style={styles.optionText}>Preguntas Frecuentes (FAQs)</Text>
          </View>
        </PressableOpacity>

        <PressableOpacity
          onPress={() => handleOptionPress('Guías y Tutoriales')}
        >
          <View style={styles.optionBox}>
            <Text style={styles.optionText}>Guías y Tutoriales</Text>
          </View>
        </PressableOpacity>

        <PressableOpacity
          onPress={() => handleOptionPress('Reportar un Problema')}
        >
          <View style={styles.optionBox}>
            <Text style={styles.optionText}>Reportar un Problema</Text>
          </View>
        </PressableOpacity>

        <PressableOpacity
          onPress={() => handleOptionPress('Términos y Condiciones')}
        >
          <View style={styles.optionBox}>
            <Text style={styles.optionText}>Términos y Condiciones</Text>
          </View>
        </PressableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#444',
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'HACKED',
    color: '#FFF',
    marginHorizontal: 15,
  },
  scrollContainer: {
    marginTop: 10,
  },
  optionBox: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#444',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
    shadowColor: '#0F0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  optionText: {
    fontSize: 18,
    fontFamily: 'HACKED',
    color: '#FFF',
    textAlign: 'center',
  },
})

export default Support
