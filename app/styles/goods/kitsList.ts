import {StyleSheet} from 'react-native';
import {height, vx, width} from "../base";

const pageWidth = 100 * vx + (width - 100 * vx) * 0.3;

export const styles = {
  listContainer: {
    flexGrow: 1,
    paddingTop: 21 * vx,
    maxHeight: height,
  },
  listFooter: {
    height: 66.7 * vx
  },
  itemContainer: {
    width: pageWidth - 9 * vx,
    paddingTop: 4.3 * vx,
    paddingBottom: 1.1 * vx,
    paddingHorizontal: 5.3 * vx,
    marginBottom: 3.7 * vx,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemContainerBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: pageWidth - 9.1 * vx,
  },
  itemRow1: {
    flexDirection: 'row',
  },
  itemContainerIcon: {
    width: (22.9 * 1.14 + 2.7) * vx,
    height: 22.9 * vx,
    paddingRight: 2.7 * vx,
  },
  itemTitleDesc: {
    flex: 1,
  },
  itemTitle: {
    marginBottom: 0.8 * vx,
    fontSize: 5.3 * vx,
    lineHeight: 5.3 * vx,
    paddingTop: 1.6 * vx,
    fontFamily: 'kosko',
    color: '#093280',
  },
  itemDesc: {
    fontFamily: 'kosko',
    fontSize: 3.7 * vx,
    fontWeight: '600',
    color: '#000',
  },
  itemDescFor1Line: {
    marginTop: 1.9 * vx
  },
  itemRow2: {
    marginTop: 4.3 * vx,
  },
  itemText: {
    color: '#000',
    fontSize: 3.7 * vx,
    lineHeight: 4.8 * vx
  },
  itemTextHighlighted: {
    color: '#0871b2'
  },
  itemBuy: {
    marginTop: 4.5 * vx,
    marginBottom: 4.5 * vx,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemBuyText: {
    marginRight: 3.2 * vx,
    fontSize: 3.7 * vx,
  },
  itemBuyOzon: {
    width: 18.9 * vx,
    height: 4.1 * vx
  }
};

export default StyleSheet.create(styles as StyleSheet.NamedStyles<any>);

