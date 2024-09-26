import * as React from 'react';
import {Animated, Easing, View, Platform} from 'react-native';
import styles from '../../styles/intro';
import Logo from "../svg/Logo";
import {useEffect, useRef, useState} from "react";
import FallingStars from "./FallingStars";
import BackgroundGradient from "../svg/BackgroundGradient";
import BackgroundVillage from "../svg/BackgroundVillage";
import {vx} from "../../styles/base";

export interface ScreenBackgroundProps {
  showIntroAnimation: boolean;
  onAnimationPreFinished?: () => void,
  isVillageVisible: boolean,
  isStarsVisible: boolean
};

/**
 * Application screens background
 * @param showIntroAnimation - show background appearance animation
 * @param onAnimationPreFinished - callback on animation finished
 * @param isVillageVisible - show or hide village at the bottom of the page
 * @param isStarsVisible - show or hide animated falling stars
 */
export default function ScreenBackground(
  { showIntroAnimation, onAnimationPreFinished, isVillageVisible, isStarsVisible }:ScreenBackgroundProps
) {
  const opacity = useRef(new Animated.Value(showIntroAnimation ? 0 : 1)).current;
  const opacityGradient = useRef(new Animated.Value(showIntroAnimation ? 0 : 1)).current;

  if (!showIntroAnimation && onAnimationPreFinished) {
    onAnimationPreFinished();
  }

  if (showIntroAnimation) {
    useEffect(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
        easing: Easing.elastic(0)
      }).start();
    });
  }

  return (
    <Animated.View style={{opacity: opacity}}>
      <View style={styles.backgroundColor}>
        <Animated.View style={{opacity: opacityGradient}}>
          <BackgroundGradient/>
        </Animated.View>
      </View>
      {
        isStarsVisible &&
        <Animated.View style={{opacity: opacityGradient}}>
          <FallingStars/>
        </Animated.View>
      }
      {
        isVillageVisible &&
        <Animated.View style={[styles.backgroundVillage, {opacity: opacityGradient}]}>
          <BackgroundVillage/>
        </Animated.View>
      }
      <Animated.View style={[styles.container]}>
        {
          showIntroAnimation &&
          <LogoAnimation
            onAnimationPreFinished={() => {
              Animated.sequence([
                Animated.delay(100),
                Animated.timing(opacityGradient, {
                  toValue: 1,
                  duration: 1300,
                  useNativeDriver: true,
                  easing: Easing.elastic(0)
                })
              ]).start();
              setTimeout(onAnimationPreFinished, 1300);
            }}
          />
        }
      </Animated.View>
    </Animated.View>
  );
}

function LogoAnimation({ onAnimationPreFinished }) {
  const
    step1Value = useRef(new Animated.Value(0)).current,
    opacity = step1Value.interpolate({inputRange: [0, 1], outputRange: [0, 1]}),
    logoLeft = step1Value.interpolate({inputRange: [0, 1], outputRange: [0, 0]});

  const
    step2Value = useRef(new Animated.Value(0)).current,
    logoScale = step2Value.interpolate({inputRange: [0, 1], outputRange: [1.2, 1]}),
    logoTop = step2Value.interpolate({inputRange: [0, 1], outputRange: [74.7 * vx, 18.7 * vx]});

  useEffect(() => {
    const animShowUp = Animated.timing(step1Value, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
      easing: Easing.elastic(0)
    });
    const animDelay = Animated.delay(600);
    const animFlyToTop = Animated.timing(step2Value, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
      easing: Easing.elastic(0)
    });

    Animated.sequence([animShowUp, animDelay, animFlyToTop]).start();

    setTimeout(onAnimationPreFinished, Platform.OS == 'ios' ? 1600 : 1600);  // ???
  }, []);

  return (
    <Animated.View style={[styles.container, {opacity}, {transform: [{translateY: logoTop}, {translateX: logoLeft}]}]}>
      <Animated.View style={[styles.logoContainer, {transform: [{scale: logoScale}]}]}>
        <Logo/>
      </Animated.View>
    </Animated.View>
  );
}


