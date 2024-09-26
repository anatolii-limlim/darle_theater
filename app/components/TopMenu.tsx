import * as React from 'react';
import {Animated, Text, View, TouchableWithoutFeedback} from 'react-native';
import BackIcon from "./svg/BackIcon";
import MenuSoundOn from "./svg/MenuSoundOn";
import styles from "../styles/layout";
import {useEffect, useRef, useState} from "react";
import PauseIcon from "./svg/MenuPause";
import sound from "../features/sound/sound";
import {useSelector} from 'react-redux';
import {selectIsMuted} from "../features/sound/soundSlice";
import ViewFadeIn, {ViewFadeInProps} from "./animations/ViewFadeIn";
import Hamburger from "./svg/Hamburger";
import MenuPlayIcon from "./svg/MenuPlay";
import MenuSoundOff from "./svg/MenuSoundOff";

export interface TopMenuProps {
  buttons: ('hamburger' | 'back' | 'pause'| 'mute')[],
  onPauseToggled?: () => void,
  visibility?: ViewFadeInProps,
  navigation,
}

/**
 * Top menu component
 * @param buttons - array of enabled buttons
 * @param navigation - react native navigation object
 * @param onPauseToggled - on pause button press callback
 * @param visibility - props for ViewFadeIn component
 */
export default function TopMenu(
  {buttons, onPauseToggled, visibility, navigation}: TopMenuProps
) {
  return (
    <ViewFadeIn style={styles.menuContainer} {...visibility}>
      {buttons.includes('hamburger') && <ButtonHamburger navigation={navigation}/>}
      {buttons.includes('back') && <ButtonBack navigation={navigation}/>}
      {buttons.includes('pause') && <ButtonPause onPress={onPauseToggled}/>}
      {buttons.includes('mute') && <ButtonMute/>}
    </ViewFadeIn>
  )
};

function ButtonHamburger({ navigation }) {
  function onPress() {
    sound.playGoForwardAsync();
    navigation.openDrawer();
  };
  // useEffect(onPress, []);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.menuIconContainer}>
        <View style={styles.menuIcon}><Hamburger/></View>
        <View><Text style={styles.menuIconText}>О театре</Text></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

function ButtonBack({ navigation }) {
  const translateX = useRef(new Animated.Value(0)).current;
  function onPress() {
    sound.playGoBackAsync();
    Animated.timing(translateX, {
        toValue: -40,
        duration: 550,
        useNativeDriver: true,
    }).start();
    setTimeout(() => navigation.goBack(null), 200);
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.menuIconContainer, {transform: [{translateX}]}]}>
        <View style={styles.menuIcon}><BackIcon/></View>
        <View><Text style={styles.menuIconText}>Назад</Text></View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

function ButtonPause({ onPress=() => null }) {
  let [isPaused, setIsPaused] = useState(false);
  function handlePress() {
    onPress();
    setIsPaused(!isPaused);
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.menuIconContainer, styles.menuIconContainerCenter]}>
        <Animated.View style={[styles.menuIconTextPause]}>
          <View style={styles.menuIcon}>{isPaused ? <MenuPlayIcon/> : <PauseIcon/>}</View>
          <View><Text style={styles.menuIconText}>{isPaused ? 'Запуск' : 'Пауза'}</Text></View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

function ButtonMute() {
  const isMuted = useSelector(selectIsMuted);
  function handlePress() {
    sound.muteToggle();
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.menuIconContainer, styles.menuIconContainerRight]}>
        <View style={styles.menuIconTextMute}>
          <Text style={styles.menuIconText}>Звук</Text>
        </View>
        <View style={[styles.menuIcon, styles.menuIconMute]}>{isMuted ? <MenuSoundOff/> : <MenuSoundOn/>}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

