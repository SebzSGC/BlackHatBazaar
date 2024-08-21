import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const RetroData = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 502 502"
    fill="none"
    {...props}
  >
    <Path
      d="M369.499 157.501h-240V22.5l-7.5-15H54.5v450h75v-225h300v225h75v-390l-60-60H407l-7.499 15h-30.002z"
      fill="#f696c3"
    />
    <Path d="M129.499 22.5h45v135.001h-45z" fill="#a1c5e4" />
    <Path
      d="M174.498 22.5v135.001h195.001V7.5H181.998l-7.5 15zM294.5 127.501v-52.5h45v52.5h-45z"
      fill="#ffffff"
    />
    <Path d="M294.5 75.001h45v52.5h-45z" fill="#ffee88" />
    <Path d="M129.5 232.5h300v44.999h-300z" fill="#a1c5e4" />
    <Path
      d="M429.5 277.499h-300V457.5h300zM82.5 457.5h300v47h-300z"
      fill="#ffffff"
    />
    <Path
      d="M382.5 457.5v47h75v-47h-28zM82.5 504.5v-47h-28v-403h-47v450z"
      fill="#ffee88"
    />
    <Path d="M129.5 277.499H152V457.5h-22.5z" fill="#83f2f8" />
    <Path d="M54.5 7.5H77v450H54.5z" fill="#f072ae" />
    <Path d="M129.5 232.5H152v44.999h-22.5z" fill="#4d94c9" />
    <Path d="M174.498 157.501V22.5l7.5-15h15v150.001z" fill="#83f2f8" />
    <Path d="M7.5 54.5H30v450H7.5z" fill="#ffe000" />
    <Path d="M82.5 457.5H105v47H82.5z" fill="#83f2f8" />
    <Path
      d="M427.5 46.999v-15m30 37.5v-15"
      fill="none"
      stroke="#ffffff"
      strokeWidth={15}
      strokeMiterlimit={22.9256}
    />
    <Path
      d="M369.499 22.5h30.002L407 7.5h37.5l60 60v390h-450V7.5h67.499l7.5 15h44.999"
      fill="none"
      stroke="#000000"
      strokeWidth={15}
      strokeMiterlimit={22.9256}
    />
    <Path
      d="M129.5 457.5v-225h300v225M294.5 75.001h45v52.5h-45zM129.5 277.499h300M200.75 330h157.499M200.75 404.999h157.499M200.75 367.5h157.499"
      fill="none"
      stroke="#000000"
      strokeWidth={15}
      strokeMiterlimit={22.9256}
    />
    <Path
      d="M457.5 457.5v47h-30m-15 0H7.5V107m0-15.001V54.5h47M82.5 504.5v-47m300 0v47M174.498 157.501V22.5l7.5-15h187.501v150.001h-240V22.5M317 75.001v-22.5"
      fill="none"
      stroke="#000000"
      strokeWidth={15}
      strokeMiterlimit={22.9256}
    />
  </Svg>
)

export default RetroData
