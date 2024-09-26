import * as React from 'react';
import {FlatList, ScrollView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useSelector} from 'react-redux';
import Layout from "../../components/Layout";
import styles from '../../styles/goods/kitsList';
import {selectAllKits} from "./goodsSlice";
import ListItemBg from "../../components/svg/ListItemBg";
import SvgXmlWebFix from "../../components/utils/SvgXmlWebFix";
import Ozon from "../../components/svg/Ozon";
import {useRef, useState} from "react";
import TouchableBounced from "../../components/animations/TouchableBounced";
import sound from "../sound/sound";

/**
 * Application screen, should be used with react-navigation.
 * List of additional kits can be bought by user.
 */
export default function GoodsKitList({ navigation }) {
  const kits = useSelector(selectAllKits);

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <Layout
      menuProps={{
        buttons: ['back', 'mute'],
        navigation,
        visibility: {
          isShown: !isScrolled,
          skipAnimation: false,
          animationDuration: 500
        }
      }}
      backgroundProps={{
        showIntroAnimation: false,
        isVillageVisible: true,
        isStarsVisible: true
      }}
    >
      <FlatList
        style={styles.listContainer}
        data={kits}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        onScroll={(event) => setIsScrolled(event.nativeEvent.contentOffset.y > 70)}
        overScrollMode={'never'}
        renderItem={({ item }) => (
          <KitListItem key={item.id} kit={item} navigation={navigation} />
        )}
        ListFooterComponent={<View style={styles.listFooter}></View>}
      />
    </Layout>
  );
};

function KitListItem({ kit, navigation }) {
  const buyText = useRef();

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemContainerBg}>
        <ListItemBg/>
      </View>
      <View style={styles.itemRow1}>
        <View style={styles.itemContainerIcon}>
          <SvgXmlWebFix xml={kit.iconXml} width='100%' height='100%' />
        </View>
        <View style={styles.itemTitleDesc}>
          <Text style={styles.itemTitle}>{[kit.titleLine1, kit.titleLine2].filter(x => x).join('\n')}</Text>
          <Text style={[styles.itemDesc, !kit.titleLine2 && styles.itemDescFor1Line]}>
            {kit.descriptionLine1}{'\n'}{kit.descriptionLine2}
          </Text>
        </View>
      </View>
      <View style={styles.itemRow2}>
        <Text style={styles.itemText}>
          <Text style={styles.itemTextHighlighted}>В наборе: </Text>
          {kit.actors}
          {'\n'}
          <Text style={styles.itemTextHighlighted}>Декорации: </Text>
          {kit.decorations}
        </Text>
        <View style={styles.itemBuy}>
          <TouchableBounced ref={buyText} bounceWidth={5}>
            <Text style={styles.itemBuyText}>Скоро в продаже</Text>
          </TouchableBounced>
          <TouchableWithoutFeedback onPress={() => {
            if (buyText.current) {
              sound.playGoForwardAsync();
              // @ts-ignore
              buyText.current.bounce();
            }
          }}>
            <View>
              <Ozon style={styles.itemBuyOzon}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};
