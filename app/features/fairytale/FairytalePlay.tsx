import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import styles from '../../styles/fairytale/play';
import {selectFairytaleById} from "./fairytaleSlice";
import AutoScrollView from "../../components/AutoScrollView";
import sound from "../sound/sound";
import {Camera} from "expo-camera";
import {useEffect, useState} from "react";

/**
 * Application screen, should be used with react-navigation.
 * Fairytale playback.
 */
export default function FairytalePlay({ route, navigation }) {
  // const fairytaleId = 1;
  const fairytaleId = route.params.fairytaleId;
  const fairytale = useSelector(state => selectFairytaleById(state, fairytaleId));

  useEffect(() => {
    sound.playBackgroundFairytaleAsync();
    return () => sound.playDrumsAsync();
  }, []);

  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  let [isPaused, setIsPaused] = useState(false);

  function onPauseToggled() {
    setIsPaused(!isPaused);
  }

  return (
    <Layout
      menuProps={{
        buttons: ['back', 'pause', 'mute'],
        navigation,
        onPauseToggled
      }}
      backgroundProps={{
        showIntroAnimation: false,
        isVillageVisible: false,
        isStarsVisible: false,
      }}
    >
      {
        hasCameraPermission &&
        <Camera style={{position: 'absolute', width: 1, height: 1, opacity: 0}} flashMode={'torch'}></Camera>
      }
      <View style={styles.container}>
        <AutoScrollView style={styles.scrollView} isScrollingEnabled={!isPaused}>
          <FairytaleText fairytale={fairytale}/>
        </AutoScrollView>
      </View>
    </Layout>
  );
}

function FairytaleText({fairytale}) {
  const chapters = fairytale.scenes.map((scene, index) => (
    <View>
      <Text style={styles.textHeader}>Сцена {index + 1}</Text>
      {
        scene.characters &&
        <Text style={styles.textCharacters}>{scene.characters}</Text>
      }
      <Text style={styles.text}>{scene.text}</Text>
    </View>
  ));

  return (
    <View style={styles.textContainer}>
      <View style={styles.textSpacingBefore}></View>
      {
        fairytale.characters &&
        <View>
          <Text style={styles.textHeader}>Персонажи и декорации</Text>
          <Text style={styles.textCharacters}>{fairytale.characters}</Text>
        </View>
      }
      {
        fairytale.intro &&
        <Text style={styles.text}>{fairytale.intro}</Text>
      }
      {chapters}
      <View style={styles.textSpacingAfter}></View>
    </View>
  )
}
