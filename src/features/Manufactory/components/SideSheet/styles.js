import {StyleSheet, Dimensions} from 'react-native';

import {
  colors,
  sizes,
  spacing,
  FontStyles,
  screenWidth,
} from '../../../../styles';

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
  },
  container: {
    width: screenWidth * 0.7,
    height: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    gap: spacing.md,
  },
  txtTitle: {
    fontWeight: '500',
    fontSize: sizes.xxLarge,
    color: colors.title,
    lineHeight: 28,
    alignItems: 'center',
    fontStyle: FontStyles.bold,
  },
  btnDeleteAllPin: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
  },
  txtDeleteAllPin: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blackBlue,
    fontStyle: FontStyles.regular,
  },
});

export default styles;
