import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const Hearth = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={34} height={34} {...props}>
    <Path
      fill="#B83B5E"
      d="M16 8.064c-2.974-2.753-7.796-2.753-10.77 0s-2.974 7.215 0 9.968L16 28l10.77-9.968c2.974-2.753 2.974-7.215 0-9.968s-7.796-2.752-10.77 0z"
    />
    <Path
      fill="#8A2C47"
      d="M7.23 17.032c-2.974-2.753-2.974-7.215 0-9.968.257-.237.531-.447.813-.643A7.685 7.685 0 0 0 5.23 8.064c-2.974 2.753-2.974 7.215 0 9.968L16 28l1.54-1.426-10.31-9.542z"
    />
    <Path
      fill="#C6627E"
      d="M26.77 8.064c-2.974-2.753-7.796-2.753-10.77 0-2.974-2.753-7.796-2.753-10.77 0a6.939 6.939 0 0 0-1.892 2.911C6.342 8.317 12.06 8.343 15 11.064c2.974-2.753 6.796-2.753 9.77 0 2.069 1.915 2.694 4.656 1.885 7.074l.115-.106c2.973-2.752 2.973-7.215 0-9.968z"
    />
    <Path
      fill="none"
      stroke="#200F60"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 8.064c-2.974-2.753-7.796-2.753-10.77 0s-2.974 7.215 0 9.968L16 28l10.77-9.968c2.974-2.753 2.974-7.215 0-9.968s-7.796-2.752-10.77 0z"
    />
    <Path
      fill="none"
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M22 10.044a3.805 3.805 0 0 1 2.052.956c.611.565.948 1.293.948 2.048"
    />
  </Svg>
)
export default Hearth
