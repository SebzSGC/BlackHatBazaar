import React from 'react'
import Svg, { SvgProps, Path, G, Circle } from 'react-native-svg'

const Cart = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 512 512"
    fill="none"
    {...props}
  >
    <G>
      <Path
        fill="#eaeaea"
        d="M144.784 77.587h359.701l-46.617 194.252-265.27.754z"
        opacity="1"
      />
      <Path
        fill="#cbcbcb"
        d="m188.162 254.501 4.436 18.092 265.27-.754 4.314-17.978z"
        opacity="1"
      />
      <Path
        fill="#dd636e"
        d="M476.941 376.095H167.516c-29.643 0-53.76-24.117-53.76-53.76 0-25.306 17.576-46.585 41.162-52.27L102.03 54.361a2.566 2.566 0 0 0-2.497-1.959H25.511c-9.939 0-17.996-8.057-17.996-17.997S15.572 16.41 25.511 16.41h74.022a38.48 38.48 0 0 1 37.455 29.38l55.61 226.803c1.901 7.756.165 15.807-4.763 22.089-4.928 6.283-12.334 9.885-20.319 9.885-9.797 0-17.767 7.97-17.767 17.767s7.97 17.768 17.767 17.768H476.94c9.939 0 17.996 8.057 17.996 17.996.001 9.94-8.056 17.997-17.995 17.997z"
        opacity="1"
      />
      <G fill="#da4a54">
        <Path
          d="M476.941 358.06H167.516c-26.58 0-48.702-19.395-52.994-44.772a53.854 53.854 0 0 0-.766 9.047c0 29.643 24.117 53.76 53.76 53.76H476.94c9.939 0 17.996-8.057 17.996-17.996 0-3.29-.897-6.364-2.439-9.018-3.115 5.363-8.907 8.979-15.556 8.979zM99.533 39.377a5.01 5.01 0 0 0-5.01-5.01H25.511c-6.649 0-12.442-3.616-15.557-8.979a17.895 17.895 0 0 0-2.383 10.447c.741 9.448 8.966 16.567 18.443 16.567h73.52V39.377z"
          opacity="1"
        />
      </G>
      <Circle cx="408.535" cy="435.843" r="59.748" fill="#8c808a" opacity="1" />
      <Path
        fill="#7b7179"
        d="M408.535 477.555c-29.932 0-54.722-22.012-59.07-50.73a60.245 60.245 0 0 0-.678 9.018c0 32.998 26.75 59.748 59.748 59.748s59.748-26.75 59.748-59.748c0-3.065-.233-6.076-.678-9.018-4.348 28.719-29.137 50.73-59.07 50.73z"
        opacity="1"
      />
      <Circle cx="220.419" cy="435.843" r="59.748" fill="#8c808a" opacity="1" />
      <Path
        fill="#7b7179"
        d="M220.419 477.555c-29.932 0-54.722-22.012-59.07-50.73a60.245 60.245 0 0 0-.678 9.018c0 32.998 26.75 59.748 59.748 59.748s59.748-26.75 59.748-59.748c0-3.065-.233-6.076-.678-9.018-4.348 28.719-29.138 50.73-59.07 50.73z"
        opacity="1"
      />
      <Circle cx="220.419" cy="435.843" r="28.933" fill="#f9ef63" opacity="1" />
      <Path
        fill="#f1d333"
        d="M220.419 446.74c-12.829 0-23.702-8.353-27.492-19.915a28.884 28.884 0 0 0-1.441 9.018c0 15.979 12.954 28.933 28.933 28.933s28.933-12.954 28.933-28.933c0-3.15-.51-6.179-1.441-9.018-3.79 11.562-14.663 19.915-27.492 19.915z"
        opacity="1"
      />
      <Circle cx="408.535" cy="435.843" r="28.933" fill="#f9ef63" opacity="1" />
      <Path
        fill="#f1d333"
        d="M408.535 446.74c-12.829 0-23.702-8.353-27.492-19.915a28.884 28.884 0 0 0-1.441 9.018c0 15.979 12.954 28.933 28.933 28.933s28.933-12.954 28.933-28.933c0-3.15-.51-6.179-1.441-9.018-3.79 11.562-14.662 19.915-27.492 19.915z"
        opacity="1"
      />
      <Path
        d="M476.94 332.587H352.538a7.515 7.515 0 1 0 0 15.03H476.94c5.78 0 10.482 4.702 10.482 10.482s-4.703 10.482-10.482 10.482H167.517c-25.5 0-46.246-20.746-46.246-46.246 0-21.449 14.561-39.939 35.408-44.964a7.517 7.517 0 0 0 5.538-9.095L130.385 138.45a7.515 7.515 0 1 0-14.597 3.579l30.145 122.943c-23.704 8.873-39.691 31.494-39.691 57.362 0 33.787 27.488 61.275 61.275 61.275h10.586c-15.206 12.342-24.946 31.168-24.946 52.233a67.22 67.22 0 0 0 3.269 20.767 7.517 7.517 0 0 0 9.466 4.83 7.513 7.513 0 0 0 4.83-9.466 52.23 52.23 0 0 1-2.536-16.131c0-28.801 23.432-52.233 52.233-52.233s52.233 23.431 52.233 52.233c0 28.801-23.432 52.233-52.233 52.233-13.237 0-25.863-4.96-35.551-13.966a7.515 7.515 0 1 0-10.232 11.007c12.478 11.599 28.738 17.987 45.784 17.987 37.089 0 67.263-30.174 67.263-67.263 0-21.065-9.741-39.891-24.946-52.233h103.484c-15.206 12.342-24.946 31.168-24.946 52.233 0 37.089 30.174 67.263 67.262 67.263s67.262-30.174 67.262-67.263c0-21.065-9.741-39.891-24.946-52.233h26.089c14.068 0 25.512-11.444 25.512-25.511-.002-14.065-11.446-25.509-25.514-25.509zm-16.172 103.255c0 28.801-23.431 52.233-52.233 52.233-28.801 0-52.233-23.432-52.233-52.233s23.431-52.233 52.233-52.233c28.802.001 52.233 23.432 52.233 52.233z"
        fill="#000000"
        opacity="1"
      />
      <Path
        d="M510.387 72.934a7.516 7.516 0 0 0-5.901-2.862H150.679L144.286 44A45.976 45.976 0 0 0 99.533 8.894H25.511C11.444 8.895 0 20.339 0 34.406s11.444 25.511 25.511 25.511h70.144l13.45 54.857a7.515 7.515 0 0 0 14.597-3.579l-14.374-58.624a10.065 10.065 0 0 0-9.796-7.684H25.511c-5.78 0-10.482-4.702-10.482-10.482s4.702-10.482 10.482-10.482h74.022a30.98 30.98 0 0 1 30.156 23.656l55.61 226.802c1.348 5.499.117 11.208-3.377 15.662s-8.744 7.009-14.406 7.009c-13.94 0-25.282 11.341-25.282 25.281 0 13.941 11.342 25.282 25.282 25.282h154.963a7.515 7.515 0 1 0 0-15.03H167.517c-5.653 0-10.252-4.599-10.252-10.253 0-5.653 4.599-10.252 10.252-10.252 10.309 0 19.869-4.652 26.231-12.762 4.403-5.612 6.828-12.319 7.094-19.236l257.048-.73a7.515 7.515 0 0 0 7.286-5.761l46.617-194.252a7.518 7.518 0 0 0-1.406-6.405zm-42.905 126.64h-45.677l9.726-49.721h47.883zm-48.324-64.75h-47.139l4.318-49.722h52.547zm-58.409 129.777 4.342-49.997h38.461l-9.762 49.903zm-104.534.296-9.838-50.294h38.461l4.359 50.2zm-57.727.164-12.372-50.458h44.947l9.847 50.338zm94.507-130.237-4.318-49.722h72.573l-4.318 49.722zm62.633 15.029-4.318 49.721h-52.692l-4.318-49.721zm-72.095 49.721h-40.096l-9.726-49.721h45.504zm-5.623-64.75h-47.139l-9.726-49.722h52.547zm-49.787 64.75h-45.692l-12.191-49.721h48.157zm71.8 15.029h50.082l-4.346 50.04-41.38.118zm66.473-15.029 4.318-49.721h45.504l-9.726 49.721zM205.731 85.102l9.726 49.722h-48.902l-12.191-49.722zm246.208 179.24-42.827.122 9.753-49.86h45.01zm31.083-129.518h-48.55l9.726-49.722h50.756zM220.419 472.29c20.097 0 36.448-16.35 36.448-36.448 0-20.097-16.35-36.447-36.448-36.447-20.097 0-36.448 16.35-36.448 36.447.001 20.098 16.351 36.448 36.448 36.448zm0-57.865c11.81 0 21.418 9.608 21.418 21.418s-9.608 21.418-21.418 21.418-21.418-9.608-21.418-21.418 9.608-21.418 21.418-21.418zM408.535 472.29c20.097 0 36.447-16.35 36.447-36.448 0-20.097-16.35-36.447-36.447-36.447s-36.447 16.35-36.447 36.447c0 20.098 16.35 36.448 36.447 36.448zm0-57.865c11.81 0 21.418 9.608 21.418 21.418s-9.608 21.418-21.418 21.418-21.418-9.608-21.418-21.418 9.608-21.418 21.418-21.418z"
        fill="#000000"
        opacity="1"
      />
    </G>
  </Svg>
)

export default Cart