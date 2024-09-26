import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './store';
import sound from "./features/sound/sound";
import {View} from "react-native";
import hasNotch from "./components/utils/hasNotch";

/**
 * Root application component
 */
export default function App() {
  const isLoadingComplete = useCachedResources();

  React.useEffect(() => {
    if (isLoadingComplete) {
      setTimeout(() => {
        sound.playBackgroundSoundAsync();
      }, 2000);
    }
  }, [isLoadingComplete]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation/>
          <StatusBar hidden={!hasNotch} />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
