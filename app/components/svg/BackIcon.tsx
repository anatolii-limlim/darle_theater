import * as React from "react"
import Svg, {G, Path} from "react-native-svg";

function BackIcon(props) {
  return (
    <Svg
      width={'100%'}
      height={'100%'}
      viewBox="0 0 8425 5902"
      {...props}
    >
      <G fillRule="nonzero">
        <Path
          fill="#fff"
          d="M3566.51 1088.09s56.67 4306.67-170 4632.5C3155.68 6046.42 180.68 3538.92 39.01 3269.76c-141.67-269.17 141.67-552.5 141.67-552.5s2266.67-2210 2677.5-2323.33c410.83-113.33 708.33 694.17 708.33 694.17z"
        />
        <Path
          fill="#fff"
          d="M8397.34 889.76s113.33 4660.83-127.5 4986.67c-240.83 325.83-3400-2309.17-3541.67-2578.33-141.67-269.17 141.67-552.5 141.67-552.5S7632.34 124.77 8043.17 11.43C8454-101.9 8397.34 889.76 8397.34 889.76z"
        />
      </G>
    </Svg>
  )
}

export default BackIcon;
