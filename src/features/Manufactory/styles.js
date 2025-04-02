import {StyleSheet, Dimensions} from 'react-native';

import {
  colors,
  sizes,
  spacingX,
  spacingY,
  FontStyles,
  screenHeight,
  px,
  py,
} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.xxLarge,
  },
  header: {
    height: screenHeight * 0.09,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: spacingY.md,
    flexDirection: 'row',
  },
  headerText: {
    color: colors.white,
    fontSize: sizes.xxLarge,
    fontWeight: '500',
    fontStyle: FontStyles.bold,
  },
  btnShideSheetHeader: {
    position: 'absolute',
    paddingBottom: 14,
    left: spacingX.xxl,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNotifi: {
    fontWeight: '400',
    fontSize: sizes.xxLarge,
    color: colors.blackBlue,
    alignItems: 'center',
    fontStyle: FontStyles.regular,
  },
  btnStartPin: {
    width: px(289),
    height: py(56),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    gap: spacingX.sm,
  },
  txtButtonStartPin: {
    fontWeight: '400',
    fontSize: sizes.xxLarge,
    color: colors.white,
    lineHeight: 28,
    alignItems: 'center',
    fontStyle: FontStyles.regular,
  },
  image: {
    width: '100%',
    height: screenHeight * 0.27,
    resizeMode: 'cover',
  },
});

export default styles;
