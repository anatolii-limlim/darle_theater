import { StyleSheet } from 'react-native';
import {vx, width} from "../base";

export const styles = {
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20 * vx
  },
  fairytaleIcon: {
    width: 39.7 * 1.18 * vx,
    height: 39.7 * vx,
  },
  header: {
    marginTop: 3.7 * vx,
    paddingHorizontal: 12.3 * vx,
    fontFamily: 'kosko',
    fontSize: 6.7 * vx,
    fontWeight: '600',
    textAlign: 'center',
    color: '#093280',
  },
  playIcon: {
    marginTop: 6.9 * vx,
    width: 18.9 * vx,
    height: 18.9 * vx
  },
  description: {
    marginTop: 5.6 * vx,
    paddingHorizontal: width * 0.2,
    fontSize: 3.7 * vx,
    textAlign: 'center'
  },
  buy1: {
    marginTop: 5.1 * vx,
  },
  buy2: {
    padding: 2.7 * vx,
    top: -2.7 * vx - 1,
  },
  buyText: {
    fontSize: 3.7 * vx,
    textAlign: 'center',
  },
  link: {
    color: '#0a71b3',
  }
};

export default StyleSheet.create(styles as StyleSheet.NamedStyles<any>);

