import { StyleSheet } from 'react-native';
import base, {vx} from "./base";

export default StyleSheet.create({
  drawer: {
    width: 74 * vx,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginTop: 6.7 * vx,
    width: 52 * vx,
    height: 17.6 * vx,
  },
  text: {
    fontSize: 3.7 * vx,
    lineHeight: 4.8 * vx
  },
  text1: {
    marginTop: 5.3 * vx,
    marginHorizontal: 3.7 * vx,
  },
  swiperFrame: {
    marginTop: 4 * vx,
    width: (74 - 3.7 * 2) * vx,
    height: 32 * vx,
  },
  swiper: {
    width: (74 - 3.7 * 2) * vx,
    height: 32 * vx,
  },
  text2: {
    marginTop: 5.3 * vx,
    marginHorizontal: 3.7 * vx,
  },
  drawerStripe: {
    marginTop: 4.5 * vx,
    width: 74 * vx,
    height: 29.6 * vx
  },
  text3: {
    textAlign: 'center',
  },
  ozon: {
    marginTop: 4 * vx,
    width: 25.9 * vx,
    height: 5.9 * vx
  },
  links: {
    marginTop: 8 * vx,
    flexDirection: 'row'
  },
  linkIcon: {
    width: 5.9 * vx,
    height: 5.9 * vx,
    marginHorizontal: 3.7 * vx
  },
  textHighlighted: {
    color: '#0871b2'
  }
});
