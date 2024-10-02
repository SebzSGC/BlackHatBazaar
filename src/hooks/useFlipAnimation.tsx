import { useState } from 'react'
import { Animated } from 'react-native'

export const useFlipAnimation = () => {
  const [flipped, setFlipped] = useState(false)
  const [flipAnim] = useState(new Animated.Value(0))

  const handleFlip = () => {
    Animated.timing(flipAnim, {
      toValue: flipped ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setFlipped(!flipped)
    })
  }

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  })

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  }

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  }

  return {
    frontAnimatedStyle,
    backAnimatedStyle,
    handleFlip,
  }
}
