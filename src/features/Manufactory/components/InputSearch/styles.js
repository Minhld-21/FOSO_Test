import {StyleSheet, Dimensions} from 'react-native';

import {colors, spacingX, px, py} from '../../../../themes';

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
    paddingHorizontal: spacingX.md,
  },
  btnSearch: {
    backgroundColor: colors.lightBlue,
    width: px(40),
    height: py(39),
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
