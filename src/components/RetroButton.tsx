import React from 'react'
import {
  GestureResponderEvent,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import globalStyles from '../styles/Global'

interface RetroButtonProps {
  title?: string
  onPress?: (event?: GestureResponderEvent) => void
  style?: ViewStyle | ViewStyle[]
  styleText?: TextStyle | TextStyle[]
  children?: React.ReactNode
}

const RetroButton: React.FC<RetroButtonProps> = ({
  title,
  onPress,
  style,
  styleText,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[globalStyles.retroButton, style]}
      onPress={onPress}
    >
      <Text style={[globalStyles.retroButtonText, styleText]}>{title}</Text>
      {children}
    </TouchableOpacity>
  )
}

export default RetroButton
