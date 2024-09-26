import {Animated, TouchableWithoutFeedback, Easing} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef} from "react";
import sound from "../../features/sound/sound";

interface TouchableBouncedProps {
  bounceWidth: number,
  onPress?: () => void,
  isDisabled?: boolean,
  children
}

function TouchableBounced({bounceWidth, onPress=null, isDisabled=false, children}:TouchableBouncedProps, ref) {
  const left = useRef(new Animated.Value(0)).current;

  function bounce() {
    const anim1 = Animated.timing(left, {
      toValue: bounceWidth,
      duration: 120,
      easing: Easing.elastic(0),
      useNativeDriver: true
    });

    const anim2 = Animated.timing(left, {
      toValue: 0,
      duration: 700,
      easing: Easing.elastic(5),
      useNativeDriver: true
    });

    Animated.sequence([anim1, anim2]).start();
  };

  function runAction() {
    bounce();
    sound.playGoForwardAsync();
    if (onPress && !isDisabled) {
      setTimeout(() => onPress(), 200);
    };
  };

  useImperativeHandle(ref, () => ({
    bounce: bounce
  }));

  return (
    <TouchableWithoutFeedback onPress={runAction}>
      <Animated.View style={{transform: [{translateX: left}]}}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default forwardRef(TouchableBounced);
