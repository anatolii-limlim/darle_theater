import * as React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import PlayIcon from '../../components/svg/PlayIcon';
import styles from '../../styles/fairytale/details';
import {selectFairytaleById} from "./fairytaleSlice";
import SvgXmlWebFix from "../../components/utils/SvgXmlWebFix";
import sound from "../sound/sound";
import TouchableBounced from "../../components/animations/TouchableBounced";
import TouchableScaleOut from "../../components/animations/TouchableScaleOut";

/**
 * Application screen, should be used with react-navigation.
 * Detailed description of selected fairytale.
 */
export default function FairytaleDetails({ route, navigation }) {
  // const fairytaleId = 1;
  const fairytaleId = route.params.fairytaleId;
  const fairytale = useSelector(state => selectFairytaleById(state, fairytaleId));

  function onPlayPress() {
    navigation.navigate('FairytalePlay', {fairytaleId});
  };

  function onKitsPress() {
    navigation.navigate('GoodsKitList');
  };

  return (
    <Layout
      menuProps={{buttons: ['back', 'mute'], navigation}}
      backgroundProps={{
        showIntroAnimation: false,
        isVillageVisible: true,
        isStarsVisible: true
      }}
    >
      <View style={styles.container}>
        <View style={styles.fairytaleIcon}>
          <SvgXmlWebFix xml={fairytale.iconXml} width='100%' height='100%' />
        </View>
        <Text style={styles.header}>{fairytale.title.capitalize()}</Text>
        <TouchableScaleOut onPress={onPlayPress}>
          <View style={styles.playIcon}>
            <PlayIcon/>
          </View>
        </TouchableScaleOut>
        <Text style={styles.description}>В ролях: {fairytale.characters}</Text>
        <Text style={[styles.buy1, styles.buyText]}>
          Если вам нужны другие персонажи,{'\n'}посмотрите наши
        </Text>
        <TouchableBounced onPress={onKitsPress} bounceWidth={3}>
          <View style={styles.buy2}>
            <Text style={[styles.link, styles.buyText]}>наборы для театра теней</Text>
          </View>
        </TouchableBounced>
      </View>
    </Layout>
  );
}


