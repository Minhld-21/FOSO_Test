import {Dimensions} from 'react-native';

import FontStyles from './fonts';
import Icon from './Icons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const colors = {
  primary: '#0375F3',
  blue: '#0B69D2',
  blackBlue: '#11315B',
  lightBlue: '#92BFF7',
  title: '#25387A',
  secondary: '#C7DFFB36',
  white: '#ffffff',
  black: '#000000',
  gray: '#9295A4',
  midgray: '#ccc',
  light_gray: '#E2F0FE00',
  orange: '#FF811A26',
  lightOrange: '#FF9432',
};

const sizes = {
  small: 4,
  medium: 8,
  large: 12,
  xLarge: 16,
  xxLarge: 18,
  xxxLarge: 24,
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 18,
  xxl: 24,
  xxxl: 32,
};

export {colors, sizes, spacing, FontStyles, Icon, screenHeight, screenWidth};
