import React, { useState } from 'react'
import RetroModal from './src/components/RetroModal'
import { StyleSheet, View } from 'react-native'
import RetroButton from './src/components/RetroButton'

function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <RetroButton title="Show Modal" onPress={() => setModalVisible(true)} />
      <RetroModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="This is a test"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
