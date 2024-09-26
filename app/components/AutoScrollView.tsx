import * as React from 'react';
import {Animated, Easing, ScrollView, View} from "react-native";
import {useEffect, useRef} from "react";

type ScrollViewProps = React.ComponentProps<typeof ScrollView>;

type AutoScrollViewProps = ScrollViewProps & {
  isScrollingEnabled: boolean,
  children
};

/**
 * This component is a ScrollView with autoscrolling.
 * If a user scrolls the contents by sliding, autoscrolling freezes for two seconds and then starts again.
 * @param props - props for ScrollView component extended with isScrollingEnabled prop
 */
export default function AutoScrollView(props:AutoScrollViewProps) {
  const
    scrollView = useRef({ref: null}).current,
    scrollY = useRef({value: 0}).current,
    animatedValue = useRef(new Animated.Value(scrollY.value)).current,
    animationStartTimeout = useRef({timeout: null}).current;

  useEffect(() => {
    if (props.isScrollingEnabled) {
      animationStart();
      return () => {
        clearTimeout(animationStartTimeout.timeout);
        animationStop();
      }
    }
  }, [props.isScrollingEnabled]);

  function animationStart() {
    if (!props.isScrollingEnabled) {
      return;
    }
    animatedValue.setValue(scrollY.value);
    const listenerId = animatedValue.addListener(({ value }) => {
      if (scrollView.ref) {
        scrollView.ref.scrollTo({x: 0, y: value, animated: false});
        scrollY.value = value;
      }
    });
    Animated.timing(animatedValue, {
      toValue: 100000,
      duration: 5000000 * (1 - scrollY.value / 100000),
      easing: Easing.linear,
      useNativeDriver: false
    }).start(() => animatedValue.removeListener(listenerId));
  };

  function animationStop() {
    // @ts-ignore
    Animated.timing(animatedValue).stop();
  }

  return (
    <ScrollView
      ref={ref => scrollView.ref = ref}
      onScroll={(event) => scrollY.value = event.nativeEvent.contentOffset.y}
      scrollEventThrottle={1}
      onScrollEndDrag={() => animationStartTimeout.timeout = setTimeout(animationStart, 2000)}
      {...props}
    >
      <View
        onTouchStart={() => {
          clearTimeout(animationStartTimeout.timeout);
          animationStop();
        }}
      >
        {props.children}
      </View>
    </ScrollView>
  )
};

