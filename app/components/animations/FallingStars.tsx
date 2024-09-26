import {Animated, Easing, View} from "react-native";
import styles from "../../styles/fallingStars";
import React, {useRef} from "react";
import {height, vw, vx, width} from "../../styles/base";
import StarIcon from "../svg/StarIcon";

/**
 * Falling stars background animation.
 *
 * Each star can be displayed as a star, a star with a glow, or just glow.
 * Each star has a random size and initial position.
 *
 * When the star reaches the bottom of a screen, it appears at the top.
 *
 * For every fall, the star can be selected to be a falling star (it means it will move faster)
*/
export default function FallingStars() {
  const stars = Array.from(Array(20).keys()).map((x, i) => <Star key={i} index={i}/>);

  return (
    <View style={styles.container}>
      <View style={styles.layerContainer}>
        {stars}
      </View>
    </View>
  )
}

function Star({ index }) {
  const
    duration = 25000,
    duration10 = duration / 10;

  let startTime = useRef(Date.now() - (index % 10 - Math.random()) * duration10).current;

  const
    value = useRef(new Animated.Value(((Date.now() - startTime) % duration) / duration)).current,
    x = useRef(new Animated.Value(Math.random() * width)).current,
    dy = value.interpolate({inputRange: [0, 1], outputRange: [0, height * 0.8]}),
    dx = value.interpolate({inputRange: [0, 1], outputRange: [width / 5, -width / 5]}),
    dxScale = useRef(new Animated.Value(1)).current,
    angle = value.interpolate({inputRange: [0, 1], outputRange: ['0deg', (Math.random() * 900 + 200) + 'deg']}),
    opacity = value.interpolate({inputRange: [0, 0.1, 0.7, 1], outputRange: [0, 1, 1, 0]});

  const
    rnd4 = Math.round(Math.random() * 3.99 + 0.5),
    isStarVisible = [1, 3, 4].includes(rnd4),
    isLightVisible = [2, 3, 4].includes(rnd4);

  const
    w = (Math.random() * 10 + 15) / 3.75 * vx,
    h = w;

  function runAnimation() {
    function run() {
      value.setValue(((Date.now() - startTime) % duration) / duration);
      x.setValue(Math.random() * width);

      const isFast = isStarVisible && (Math.random() < 0.15);
      dxScale.setValue(isFast ? 0.5 : 1);

      // @ts-ignore
      const current = value._value;
      const animationDiration = (1 - current) * (isFast ? duration / 5 : duration);

      Animated.timing(value, {
        toValue: 1,
        duration: animationDiration,
        useNativeDriver: true,
        easing: Easing.linear
      }).start();

      return animationDiration;
    }

    const duration0 = run();
    let runInterval;
    const runTimeout = setTimeout(() => {
      run();
      runInterval = setInterval(run, duration);
    }, duration0);

    return () => {
      clearTimeout(runTimeout);
      clearInterval(runInterval)
    };
  };

  React.useEffect(runAnimation, []);

  return (
    <Animated.View
      style={[
        styles.star,
        {
          transform: [
            {translateX: Animated.add(x, Animated.multiply(dx, dxScale))},
            {translateY: dy},
            {rotateZ: angle}
          ]
        },
        {width: w, height: h, opacity}
      ]}
    >
      <StarIcon isStarVisible={isStarVisible} isLightVisible={isLightVisible}/>
    </Animated.View>
  )
}
