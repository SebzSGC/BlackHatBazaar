import React from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import globalStyles from '../styles/Global'

interface RetroButtonProps {
  title: string
  onPress: (event?: GestureResponderEvent) => void
  style?: ViewStyle | ViewStyle[]
}

const RetroButton: React.FC<RetroButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[globalStyles.retroButton, style]}
      onPress={onPress}
    >
      <Text style={globalStyles.retroButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default RetroButton
