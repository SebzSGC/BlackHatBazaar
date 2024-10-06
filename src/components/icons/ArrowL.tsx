import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const ArrowR = (props: SvgProps) => (
  <Svg width={50} height={50} viewBox="0 0 495 495" {...props}>
    <Path
      d="m125.34 247.5 122.16-70.56V0C110.81 0 0 110.81 0 247.5S110.81 495 247.5 495V318.06L125.34 247.5z"
      fill="#6d2c93"
    />
    <Path
      d="M247.5 0v176.94l40.72-23.52v47.04l81.44-47.04v188.16l-81.44-47.04v47.04l-40.72-23.52V495C384.19 495 495 384.19 495 247.5S384.19 0 247.5 0z"
      fill="#3d1952"
    />
    <Path
      d="m125.34 247.5 122.16 70.56 40.72 23.52v-47.04l81.44 47.04V247.5z"
      fill="#9cdd05"
    />
    <Path
      d="M369.66 247.5v-94.08l-81.44 47.04v-47.04l-40.72 23.52-122.16 70.56z"
      fill="#b2fa09"
    />
  </Svg>
)
export default ArrowR
