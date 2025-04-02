import {Dimensions} from 'react-native';

import FontStyles from './fonts';
import Icon from './Icons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

// Kích thước tham chiếu (ví dụ iPhone 11: 375x812)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const px = size => (size * screenWidth) / guidelineBaseWidth;
const py = size => (size * screenHeight) / guidelineBaseHeight;

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

const spacingX = {
  xs: px(4),
  sm: px(8),
  md: px(12),
  lg: px(16),
  xl: px(18),
  xxl: px(24),
  xxxl: px(32),
};

const spacingY = {
  xs: py(4),
  sm: py(8),
  md: py(12),
  lg: py(16),
  xl: py(18),
  xxl: py(24),
  xxxl: py(32),
};

export {
  colors,
  sizes,
  spacingX,
  spacingY,
  FontStyles,
  Icon,
  screenHeight,
  screenWidth,
  px,
  py,
};
