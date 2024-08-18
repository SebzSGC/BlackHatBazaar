import React from 'react'
import { Text, TextInput, ViewStyle } from 'react-native'
import globalStyles from '../styles/Global'

interface RetroInputProps {
  value: string
  onChangeText: (text: string) => void
  placeholder: string
  secureTextEntry?: boolean
  style?: ViewStyle
  label?: string
}

const RetroInput: React.FC<RetroInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
  label,
}) => {
  return (
    <>
      {label && <Text style={globalStyles.label}>{label}</Text>}
      <TextInput
        style={[globalStyles.input, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
      />
    </>
  )
}

export default RetroInput
