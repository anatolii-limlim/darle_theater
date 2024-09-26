import {StyleSheet, ViewStyle} from 'react-native';
import base, {vx} from '../base';

export const styles = {
  container: {
    flex: 1,
    paddingTop: 40 * vx
  },
  scrollView: {
    height: 26.7 * vx,
  },
  textContainer: {
    paddingHorizontal: 5.3 * vx,
  },
  textHeader: {
    fontSize: 5.7 * vx,
    fontWeight: '700',
    color: '#222',
    paddingTop: 9 * vx
  },
  textCharacters: {
    fontSize: 5.7 * vx,
    color: '#222',
  },
  text: {
    fontSize: 6.7 * vx,
    color: '#222',
    paddingTop: 9 * vx
  },
  textSpacingBefore: {
    height: 70 * vx
  },
  textSpacingAfter: {
    height: 40 * vx
  }
};

export default StyleSheet.create(styles as StyleSheet.NamedStyles<any>);

