import * as React from 'react';
import {ScrollView, View} from 'react-native';
import TopMenu, {TopMenuProps} from "./TopMenu";
import styles from '../styles/layout';
import ScreenBackground, {ScreenBackgroundProps} from "./animations/ScreenBackground";

interface LayoutProps {
  menuProps: TopMenuProps,
  backgroundProps: ScreenBackgroundProps,
  children
}

/**
 * The Layout component is the root component for any application screen.
 * It renders the top menu, screen background, and screen contents.
 * @param menuProps - props for TopMenu component
 * @param backgroundProps - props for ScreenBackground component
 */
export default function Layout({ menuProps, backgroundProps, children }: LayoutProps) {
  return (
    <View style={styles.containerBg}>
      <View style={styles.container}>
        {!!menuProps.buttons.length && <TopMenu {...menuProps}></TopMenu>}
        <View style={styles.contentContainer}>
          <ScreenBackground {...backgroundProps} />
          {children}
        </View>
      </View>
    </View>
  );
}


