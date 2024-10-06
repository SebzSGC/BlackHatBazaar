import React from 'react'
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'

interface TouchableOpacityPressableProps extends PressableProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  opacity?: boolean
}

const PressableOpacity: React.FC<TouchableOpacityPressableProps> = ({
  children,
  style,
  opacity = true,
  ...props
}) => {
  return { opacity } ? (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Pressable>
  ) : (
    <Pressable {...props}>{children}</Pressable>
  )
}

export default PressableOpacity
