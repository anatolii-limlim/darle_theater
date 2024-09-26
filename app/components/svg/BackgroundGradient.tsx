import * as React from "react"
import {LinearGradient, Path, Stop, Svg} from "react-native-svg";
import {height, width} from "../../styles/base";
import {useRef} from "react";

function BackgroundGradient() {
  const bgId = 'bg__' + useRef(Math.floor(Math.random() * 10000)).current;
  return (
    <Svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <LinearGradient
        id={bgId}
        gradientUnits="userSpaceOnUse"
        x1={510}
        y1={height * 1.097}
        x2={510}
        y2={height * 0.097}
      >
        <Stop offset={0.153} stopColor="#dae7ef" />
        <Stop offset={0.242} stopColor="#c0d8e5" />
        <Stop offset={0.356} stopColor="#abccde" />
        <Stop offset={0.59} stopColor="#6faecc" />
        <Stop offset={0.649} stopColor="#5ca6c7" />
        <Stop offset={0.746} stopColor="#3d81ab" />
        <Stop offset={0.842} stopColor="#236293" />
        <Stop offset={0.917} stopColor="#115186" />
        <Stop offset={0.961} stopColor="#064b81" />
      </LinearGradient>
      <Path fill={`url(#${bgId})`} d={`M0 0h${width}v${height}H0z`} />
    </Svg>
  )
};

export default BackgroundGradient