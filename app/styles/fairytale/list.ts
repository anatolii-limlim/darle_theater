import {StyleSheet, ViewStyle} from 'react-native';
import {vx, width} from "../base";

const pageWidth = (width + 100 * vx) / 2;

export const styles = {
  listContainer: {
    flexGrow: 1,
    paddingTop: 46.9 * vx,
  },
  itemContainer: {
    width: pageWidth - 17.6 * vx,
    height: 21.9 * vx,
    marginLeft: 6.1 * vx,
    marginRight: 6.1 * vx,
    marginBottom: 4.3 * vx,
    paddingVertical: 3.2 * vx,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemContainerBg: {
    position: 'absolute',
    width: pageWidth - 17.6 * vx,
    paddingLeft: 12.8 * vx,
    height: 16 * vx,
  },
  itemContainerIcon: {
    position: 'absolute',
    width: 21.9 * 1.18 * vx,
    height: 21.9 * vx,
  },
  itemContainerText: {
    width: pageWidth - 17.6 * vx,
    paddingLeft: 17.6 * vx,
    textAlign: 'center',
    fontSize: 4.8 * vx,
    fontFamily: 'kosko',
    color: '#093280',
  }
};

export default StyleSheet.create(styles as StyleSheet.NamedStyles<any>);

