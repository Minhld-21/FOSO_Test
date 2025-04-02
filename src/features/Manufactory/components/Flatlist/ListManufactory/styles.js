import {StyleSheet} from 'react-native';

import {
  colors,
  sizes,
  spacingX,
  spacingY,
  FontStyles,
} from '../../../../../themes';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    elevation: 4,
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: spacingX.md,
    borderLeftWidth: 5,
    borderColor: colors.primary,
    gap: spacingY.md,
  },
  wrapperHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    borderRadius: 4,
    paddingVertical: spacingY.xs,
    paddingHorizontal: spacingX.sm,
  },
  txtStatus: {
    fontWeight: '400',
    fontSize: sizes.large,
    fontStyle: FontStyles.regular,
  },
  btnPushpin: {
    width: 20,
    height: 20,
  },
  txtID: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.blackBlue,
    fontStyle: FontStyles.bold,
  },
  txtDeadline: {
    fontWeight: '500',
    fontSize: sizes.large,
    color: colors.gray,
    fontStyle: FontStyles.regular,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacingX.md,
  },
  secondaryProgressWrapper: {
    backgroundColor: '#3EC3F733',
  },
  secondaryProgressBar: {
    backgroundColor: '#0375F3',
  },
});
export default styles;
