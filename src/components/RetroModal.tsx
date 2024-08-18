import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  GestureResponderEvent,
} from 'react-native'
import globalStyles from '../styles/Global'

interface ModalConfirmProps {
  visible: boolean
  title: string
  onClose: (event?: GestureResponderEvent) => void
}

const RetroModal: React.FC<ModalConfirmProps> = ({
  visible,
  onClose,
  title,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={globalStyles.modalBackground}>
        <View style={globalStyles.retroContainer}>
          {/* Mini sub barra */}
          <View style={globalStyles.subBar}>
            <Text style={globalStyles.subBarText}>BlackHatBazaar</Text>
          </View>
          <View style={globalStyles.contentContainer}>
            <Text style={globalStyles.retroTitle}>{title}</Text>
            <View style={[globalStyles.retroButtonContainer]}>
              <TouchableOpacity
                style={globalStyles.retroButton}
                onPress={() => console.log('NO pressed')}
              >
                <Text style={[globalStyles.retroButtonText]}>SI</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={globalStyles.retroButton}
                onPress={onClose}
              >
                <Text style={globalStyles.retroButtonText}>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default RetroModal
