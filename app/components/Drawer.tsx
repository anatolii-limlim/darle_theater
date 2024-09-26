import {DrawerContentScrollView} from "@react-navigation/drawer";
import {Image, Linking, Text, TouchableWithoutFeedback, View} from "react-native";
import * as React from "react";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import styles from "../styles/drawer";
import DrawerLogo from "./svg/DrawerLogo";
import DrawerStripe from "./svg/DrawerStripe";
import Ozon from "./svg/Ozon";
import DrawerWeb from "./svg/DrawerWeb";
import DrawerInstagram from "./svg/DrawerInstagram";
import TouchableBounced from "./animations/TouchableBounced";
import {useRef} from "react";
import sound from "../features/sound/sound";

/**
 * Application drawer component
 * @param props - props for DrawerContentScrollView component
 */
export function AppDrawer(props) {
  const images = [
    require('../../assets/images/1.jpg'),
    require('../../assets/images/2.jpg'),
    require('../../assets/images/3.jpg'),
  ];

  const buyText = useRef();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <DrawerLogo style={styles.logo}/>
        <Text style={[styles.text, styles.text1]}>
          <Text style={styles.textHighlighted}>Театр теней от Darle</Text> - замечательная игра,
          которая наполнит дом волшебством и теплом! Займет надолго и детей, и родителей.
        </Text>
        <SwiperFlatList
          style={styles.swiper}
          data={images}
          renderItem={({ item }) => (
            <Image source={item} style={styles.swiperFrame} />
          )}
        />
        <Text style={[styles.text, styles.text2]}>
          Красивая деревянная сцена на магнитах, много сказок и персонажей из фетра на магнитах
        </Text>
        <DrawerStripe style={styles.drawerStripe}/>
        <TouchableBounced ref={buyText} bounceWidth={7} isDisabled={true}>
          <Text style={[styles.text, styles.text3]}>
            Купить <Text style={styles.textHighlighted}>театр и персонажей</Text>{'\n'}
            скоро можно будет здесь:
          </Text>
        </TouchableBounced>
        <TouchableWithoutFeedback onPress={() => {
          if (buyText.current) {
            sound.playGoForwardAsync();
            // @ts-ignore
            buyText.current.bounce();
          }
        }}>
          <View>
            <Ozon style={styles.ozon}/>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.links}>
          <TouchableBounced bounceWidth={3} onPress={() => Linking.openURL('https://darlekids.ru/')}>
            <DrawerWeb style={styles.linkIcon}/>
          </TouchableBounced>
          <TouchableBounced bounceWidth={3} onPress={() => Linking.openURL('https://www.instagram.com/darlekids/')}>
            <DrawerInstagram style={styles.linkIcon}/>
          </TouchableBounced>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

