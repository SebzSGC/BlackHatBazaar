import React from 'react'
import { GestureResponderEvent, Text, TextStyle, ViewStyle } from 'react-native'
import globalStyles from '../styles/Global'
import PressableOpacityOpacity from './PressableOpacity'

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
    <PressableOpacityOpacity
      style={[globalStyles.retroButton, style]}
      onPress={onPress}
      opacity={false}
    >
      <Text style={[globalStyles.retroButtonText, styleText]}>{title}</Text>
      {children}
    </PressableOpacityOpacity>
  )
}

export default RetroButton
