import * as React from 'react';
import {SvgXml, XmlProps} from "react-native-svg";
import appSettings from "../../settings";
import {View} from "react-native";

/**
 * This component is used to prevent react-native-svg buggy behavior.
 *
 * The problem is that when you need to render SVG image from the string variable
 * with the SvgXml component this works on Andriod and iOS but crashes the web version.
 *
 * SvgXmlWebFix wraps the SvgXml component and acts like SvgXml on mobile devices
 * and just draws grey rectangle instead of SVG image on the web.
 *
 * This solution is used since the web version is used only for development purposes in this project.
 */
export default function SvgXmlWebFix(props:XmlProps) {
  let component = null;
  if (appSettings.isWebView) {
    component = <View style={{width: props.width, height: props.height, backgroundColor: '#ddd'}}></View>;
  } else {
    component = <SvgXml {...props}></SvgXml>;
  }
  return component;
}

