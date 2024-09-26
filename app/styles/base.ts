import { Dimensions } from 'react-native';
import Constants from "expo-constants";
import hasNotch from "../components/utils/hasNotch";

export const
  width = Dimensions.get('screen').width,
  height = Dimensions.get('screen').height,
  vw = width / 100,
  vh = height / 100,
  vx = Math.min(vw, vh * 0.5622),
  statusBarHeight = hasNotch ? Constants.statusBarHeight : 0;

export default {
  font: {},
  padding: (a, b, c, d) => {
    return {
      paddingTop: a,
      paddingRight: b,
      paddingBottom: c,
      paddingLeft: d
    }
  },
};
