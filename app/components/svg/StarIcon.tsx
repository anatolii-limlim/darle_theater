import * as React from "react"
import Svg, {Circle, Path, RadialGradient, Stop} from "react-native-svg";

function StarIcon({isStarVisible, isLightVisible}) {
  const star = (
    <Path fill="#EBE59A" d="M25.9,26.2c0.1-0.6-0.7-8,0.1-9.2c0.9-1.2,6.7,5.9,7.4,6.2s8.1-4.3,9.4-3.3c1.2,1-5.2,7.7-5,8.8
      c0.2,1,5.7,7.8,4.9,9s-9.2-3.5-9.6-2.9c-0.4,0.6-4.9,9.2-5.6,9c-0.7-0.2-1.1-7.1-1.1-10.2c0-1.3-9.4-2.4-9.4-4
      C17,27.9,25.9,26.2,25.9,26.2z"/>
  );

  const light = (
    <Circle
      cx={30}
      cy={30.3}
      r={29.7}
      opacity={0.24}
      fill="url(#prefix__b)"
    />
  );

  return (
    <Svg
      viewBox="0 0 60 60"
    >
      <RadialGradient
        id="prefix__b"
        cx={30}
        cy={30.294}
        r={29.706}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.144} stopColor="#f6da6b" />
        <Stop offset={0.344} stopColor="#f9e150" stopOpacity={0.766} />
        <Stop offset={0.552} stopColor="#fbe636" stopOpacity={0.524} />
        <Stop offset={0.767} stopColor="#fce91c" stopOpacity={0.272} />
        <Stop offset={1} stopColor="#fcea0d" stopOpacity={0} />
      </RadialGradient>

      {isStarVisible && star}
      {isLightVisible && light}
    </Svg>
  )
}

export default StarIcon
