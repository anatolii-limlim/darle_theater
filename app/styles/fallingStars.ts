import { StyleSheet } from 'react-native';
import {width, height, vx} from "./base";

export const styles = {
  container: {
    position: 'absolute',
    width: width,
    height: height,
  },
  layerContainer: {
    position: 'absolute',
    width: width,
    height: height,
  },
  star: {
    position: 'absolute',
    width: 5.3 * vx,
    height: 5.3 * vx,
  }
};

export default StyleSheet.create(styles as StyleSheet.NamedStyles<any>);

