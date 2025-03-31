import {StyleSheet, Dimensions} from 'react-native';

import {
  colors,
  sizes,
  spacing,
  FontStyles,
  screenHeight,
} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: colors.midgray,
    borderWidth: 1,
    height: 40,
  },
  input: {
    flex: 1,
    color: colors.gray,
    paddingHorizontal: spacing.md,
  },
  btnSearch: {
    backgroundColor: colors.lightBlue,
    width: '15%',
    height: '105%',
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
