import React, {useEffect, useRef} from "react";
import {Animated, Easing, ViewProps} from "react-native";

export interface ViewFadeInProps extends ViewProps {
  isShown?: boolean,
  skipAnimation?: boolean,
  animationDuration?: number,
  children?
}

export default function ViewFadeIn(
  {isShown=true, skipAnimation=true, animationDuration=2400, ...props}: ViewFadeInProps
) {
  const opacity = useRef(new Animated.Value(isShown ? 1 : 0)).current;

  useEffect(() => {
    const toValue = isShown ? 1 : 0;
    if (skipAnimation) {
      opacity.setValue(toValue);
    } else {
      Animated.timing(opacity, {
        toValue: toValue,
        duration: animationDuration,
        useNativeDriver: true,
        easing: Easing.elastic(2)
      }).start();
    }
  }, [isShown]);

  return (
    <Animated.View
      {...props}
      style={[props.style, {opacity}]}
    >
      {props.children}
    </Animated.View>
  );
}

