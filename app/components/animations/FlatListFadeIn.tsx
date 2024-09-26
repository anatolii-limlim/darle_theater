import React, {useEffect, useRef} from "react";
import {FlatList, Animated, Easing, FlatListProps} from "react-native";

interface FlatListFadeInProps extends FlatListProps<any> {
  isShown: boolean,
  skipAnimation: boolean
}

/**
 * Flat list appearance animation
 * @param isShown: boolean - the animation starts when this parameter is switched
 *    from false to true, or if it is initially true
 * @param skipAnimation: boolean - show list without animation
 * @param props: FlatListFadeInProps - props for FlatList component
 */
export default function FlatListFadeIn({isShown, skipAnimation, ...props}: FlatListFadeInProps) {
  const opacityValues = useRef(props.data.map(item => new Animated.Value(0))).current;
  Array(props.data.length - opacityValues.length).forEach(() => {
    opacityValues.push(new Animated.Value(1));
  });

  const leftValues = opacityValues.map((value, index) => {
    return value.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 0]
    })
  });

  const scaleValues = opacityValues.map((value, index) => {
    return value.interpolate({
      inputRange: [0, 1],
      outputRange: [0.9, 1]
    })
  });

  useEffect(() => {
    if (isShown) {
      opacityValues.forEach((value, index) => {
        const animDelay = Animated.delay(index * 20);
        const animFadeIn = Animated.timing(value, {
          toValue: 1,
          duration: skipAnimation ? 0 : 400,
          useNativeDriver: true,
          easing: Easing.elastic(2)
        });
        Animated.sequence([animDelay, animFadeIn]).start();
      }, [isShown]);
    }
  }, [isShown]);

  return (
    <FlatList
      {...props}
      style={[props.style, {overflow: 'visible'}]}
      renderItem={({item, index, separators}) => (
        <Animated.View
          style={{
            opacity: opacityValues[index],
            transform: [{scale: scaleValues[index]}, {translateX: leftValues[index]}]
          }}
        >
          {props.renderItem({item, index, separators})}
        </Animated.View>
      )}
      scrollEnabled={false}
    />
  );
}

