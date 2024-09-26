import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Hamburger(props: SvgProps) {
  return (
    <Svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 80 55"
      {...props}
    >
      <Path
        fill="#fff"
        d="M4.5 9.6c22.9.5 45.7.3 68.5-.4C80.2 9 83.6-.2 74.5.1 52.8.8 31.1 1 9.4.5c-3-.1-7.3.9-8.7 4-1.3 2.9 1.1 5 3.8 5.1zM6.6 31.4c20.2.3 40.5.3 60.7 0 2.8 0 7.5-1.2 8.8-4.3 1.2-3-1.2-4.6-3.8-4.5-20.2.3-40.5.3-60.7 0-2.8 0-7.6 1.2-8.8 4.3-1.3 3 1.2 4.4 3.8 4.5zM7.8 54.9h61.3c3.1 0 7.7-.9 9.2-4 1.3-2.8-1.2-5.1-4.1-5.1H12.9c-3.1 0-7.7.9-9.2 4-1.3 2.9 1.2 5.1 4.1 5.1z"
      />
    </Svg>
  )
}

export default Hamburger;
