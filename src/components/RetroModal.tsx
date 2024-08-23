import React from 'react'
import {
  View,
  Text,
  Modal,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native'
import globalStyles from '../styles/Global'
import RetroButton from './RetroButton'

interface RetroModalProps {
  visible: boolean
  title: string
  onClose: (event?: GestureResponderEvent) => void
  onConfirm: () => void
}

const RetroModal: React.FC<RetroModalProps> = ({
  visible,
  onClose,
  onConfirm,
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
          <View style={globalStyles.subBar}>
            <Text style={globalStyles.subBarText}>BlackHatBazaar</Text>
          </View>
          <View style={globalStyles.contentContainer}>
            <Text style={globalStyles.retroTitle}>{title}</Text>
            <View style={[globalStyles.retroButtonContainer]}>
              <RetroButton
                title="SI"
                onPress={onConfirm}
                style={styles.buttonPosition}
              />
              <RetroButton
                title="NO"
                onPress={onClose}
                style={styles.buttonPosition}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  buttonPosition: {
    flex: 1,
    alignItems: 'center',
  },
})

export default RetroModal
