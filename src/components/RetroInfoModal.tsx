import React from 'react'
import { View, Text, Modal, GestureResponderEvent } from 'react-native'
import globalStyles from '../styles/Global'
import PressableOpacity from './PressableOpacity'

interface RetroInfoModalProps {
  visible: boolean
  title: string
  description: string
  onClose: (event?: GestureResponderEvent) => void
}

const RetroInfoModal: React.FC<RetroInfoModalProps> = ({
  visible,
  onClose,
  title,
  description,
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
          <View style={globalStyles.subBarWithClose}>
            <Text style={globalStyles.subBarText}>BlackHatBazaar</Text>
            <PressableOpacity onPress={onClose}>
              <Text style={globalStyles.closeButtonText}>X</Text>
            </PressableOpacity>
          </View>
          <View style={globalStyles.contentContainer}>
            <Text style={globalStyles.retroTitle}>{title}</Text>
            <View style={[globalStyles.retroButtonContainer]}>
              <Text style={globalStyles.retroMessage}>{description}</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default RetroInfoModal
