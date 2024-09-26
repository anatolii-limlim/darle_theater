import * as React from "react"
import Svg, {Path} from "react-native-svg";

function PauseIcon(props) {
  return (
    <Svg
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 7024 10821"
      {...props}
    >
      <Path
        fill="#fff"
        fillRule="nonzero"
        d="M2495.72 10230.5c148.08-2876.92 190.39-5753.85 148.08-8630.77 0-401.92-317.31-1078.85-1205.77-1248.08-846.15-169.23-1290.39 169.23-1290.39 550 42.31 2876.92 0 5753.85-148.08 8630.77-21.15 401.92 338.46 1078.85 1205.77 1248.08 867.31 169.23 1269.23-190.38 1290.39-550z"
      />
      <Path
        fill="#fff"
        fillRule="nonzero"
        d="M7022.65 10061.28V1367.05c0-444.23-253.85-1100-1205.77-1311.54C4970.73-134.88 4293.8 224.74 4293.8 626.66v8694.23c0 444.23 253.85 1100 1205.77 1311.54 846.15 211.54 1523.08-148.08 1523.08-571.15z"
      />
    </Svg>
  )
}

export default PauseIcon;

