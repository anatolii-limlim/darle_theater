import {Animated, TouchableWithoutFeedback, Easing} from 'react-native';
import React, { useRef } from "react";
import sound from "../../features/sound/sound";

export default function TouchableScaleOut(props) {
  const scale = useRef(new Animated.Value(1)).current;

  function onPress() {
    Animated.timing(scale, {
      toValue: 0.8,
      duration: 1400,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true
    }).start(() => {
      scale.setValue(1);
    });

    sound.playGoForwardAsync();

    setTimeout(() => {
      props.onPress();
    }, 200);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={{transform: [{scale: scale}]}}>{props.children}</Animated.View>
    </TouchableWithoutFeedback>
  );
}
