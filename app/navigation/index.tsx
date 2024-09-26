import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import FairytaleList from "../features/fairytale/FairytaleList";
import FairytaleDetails from "../features/fairytale/FairytaleDetails";
import FairytalePlay from "../features/fairytale/FairytalePlay";
import GoodsKitList from "../features/goods/GoodsKitList";
import {AppDrawer} from "../components/Drawer";
import styles from "../styles/drawer";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer
      onReady={() => SplashScreen.hideAsync()}
    >
      <Drawer.Navigator
        drawerContent={(props) => <AppDrawer {...props} />}
        drawerStyle={styles.drawer}
        screenOptions={{swipeEnabled: false}}
      >
        <Drawer.Screen
          name="Main"
          component={MainNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name='FairytaleList'
        component={FairytaleList}
      />
      <Stack.Screen
        name='FairytaleDetails'
        component={FairytaleDetails}
      />
      <Stack.Screen
        name='FairytalePlay'
        component={FairytalePlay}
      />
      <Stack.Screen
        name='GoodsKitList'
        component={GoodsKitList}
      />
    </Stack.Navigator>
  );
}

