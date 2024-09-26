import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 7155 11012"
      {...props}
    >
      <Path
        fill="#fff"
        fillRule="nonzero"
        d="M6.82 1650.35s0-2517.31 1501.92-1332.69c1713.46 1375 5161.54 4400 5373.08 4759.61 296.15 486.54 592.31 930.77-528.85 1755.77-676.92 486.54-2475 1946.15-3680.77 2982.69-825 698.08-1692.31 1290.39-2030.77 1184.61-211.54-63.46-634.61-444.23-634.61-1438.46-21.16-2792.3 0-7911.54 0-7911.54z"
      />
    </Svg>
  )
}

export default SvgComponent
