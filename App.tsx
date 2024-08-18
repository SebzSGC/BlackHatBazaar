import React, { useState } from 'react'
import RetroModal from './src/components/RetroModal'
import { Button, View } from 'react-native'

function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <RetroModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="This is a test"
      />
    </View>
  )
}

export default App
