import * as React from 'react';
import {Text, View, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import TouchableBounced from '../../components/animations/TouchableBounced';
import Layout from "../../components/Layout";
import FlatListFadeIn from "../../components/animations/FlatListFadeIn";
import styles from '../../styles/fairytale/list';
import {useState} from "react";
import {selectAllFairytales} from './fairytaleSlice';
import ListItemBg from "../../components/svg/ListItemBg";
import SvgXmlWebFix from "../../components/utils/SvgXmlWebFix";

/**
 * Main application screen, should be used with react-navigation.
 * List of fairytales.
 */
export default function FairytaleList({ navigation }) {
  const fairytales = useSelector(selectAllFairytales);

  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <Layout
      menuProps={{
        buttons: ['hamburger', 'mute'],
        navigation,
        visibility: {
          isShown: isMenuShown,
          skipAnimation: false
        }
      }}
      backgroundProps={{
        showIntroAnimation: true,
        onAnimationPreFinished: () => {
          setIsIntroFinished(true);
          setTimeout(() => setIsMenuShown(true), 100);
        },
        isVillageVisible: true,
        isStarsVisible: true
      }}
    >
      <View style={styles.listContainer}>
        <FlatListFadeIn
          isShown={isIntroFinished}
          skipAnimation={false}
          data={fairytales}
          renderItem={({ item }) => (
            <FairytaleListItem key={item.id} fairytale={item} navigation={navigation} />
          )}
        />
      </View>
    </Layout>
  );
}

function FairytaleListItem({ fairytale, navigation }) {
  function onPress() {
    navigation.navigate('FairytaleDetails', {fairytaleId: fairytale.id});
  };

  return (
    <TouchableBounced bounceWidth={3} onPress={onPress}>
      <View style={styles.itemContainer}>
        <View style={styles.itemContainerBg}>
          <ListItemBg/>
        </View>
        <View style={styles.itemContainerIcon}>
          <SvgXmlWebFix xml={fairytale.iconXml} width='100%' height='100%' />
        </View>
        <View>
          <Text style={styles.itemContainerText}>{fairytale.title.capitalize()}</Text>
        </View>
      </View>
    </TouchableBounced>
  );
}
