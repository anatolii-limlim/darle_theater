import { StyleSheet } from 'react-native';
import {height, statusBarHeight, vx, width} from "./base";

export const styles = {
  container: {
    width: width,
    // height: 169,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    width: 52 * vx,
    height: 52 * 0.338 * vx,
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#064b81',
    height: height,
    width: width
  },
  backgroundVillage: {
    position: 'absolute',
    top: height - width * 0.645 - statusBarHeight,
    width: width,
    height: width * 0.645
  }
};

export default StyleSheet.create(styles as StyleSheet.NamedStyles<any>);

