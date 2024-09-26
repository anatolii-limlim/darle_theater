import {StyleSheet} from 'react-native';
import base, {statusBarHeight, vx, width} from "./base";

export const styles = {
  containerBg: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: statusBarHeight
  },
  menuContainer: {
    position: 'absolute',
    width: width,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 13.1 * vx,
    marginTop: 0,
    paddingHorizontal: 5.3 * vx,
    // backgroundColor: 'red'
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#0f0',
  },
  menuIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4.3 * vx,
    width: 26.7 * vx,
    // backgroundColor: '#00f',
  },
  menuIconContainerCenter: {
    justifyContent: 'center',
  },
  menuIconContainerRight: {
    justifyContent: 'flex-end'
  },
  menuIcon: {
    width: 4.8 * vx,
    height: 4.8 * vx,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ff0'
  },
  menuIconText: {
    fontFamily: 'kosko',
    fontSize: 4.3 * vx,
    color: '#fff',
    marginHorizontal: 1.6 * vx
  },
  menuIconTextPause: {
    ...base.padding(1.3 * vx, 6.7 * vx, 1.3 * vx, 6.7 * vx),
    flexDirection: 'row'
  },
  menuIconMute: {
    width: 5.9 * vx,
    height: 4.8 * vx
  },
  menuIconTextMute: {
    // paddingRight: 4
  },
};

export default StyleSheet.create(styles as StyleSheet.NamedStyles<any>);

