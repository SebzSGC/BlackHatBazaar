import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const ArrowR = (props: SvgProps) => (
  <Svg width={50} height={50} viewBox="0 0 495 495" {...props}>
    <Path
      d="M206.78 341.58v-47.04l-81.44 47.04V153.42l81.44 47.04v-47.04l40.72 23.52V0C110.81 0 0 110.81 0 247.5S110.81 495 247.5 495V318.06l-40.72 23.52z"
      fill="#6d2c93"
    />
    <Path
      d="M247.5 0v176.94l122.16 70.56-122.16 70.56V495C384.19 495 495 384.19 495 247.5S384.19 0 247.5 0z"
      fill="#3d1952"
    />
    <Path
      d="M125.34 247.5v94.08l81.44-47.04v47.04l40.72-23.52 122.16-70.56z"
      fill="#9cdd05"
    />
    <Path
      d="m206.78 200.46-81.44-47.04v94.08h244.32L247.5 176.94l-40.72-23.52z"
      fill="#b2fa09"
    />
  </Svg>
)
export default ArrowR
