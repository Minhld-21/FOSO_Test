import {StyleSheet} from 'react-native';

import {colors, sizes, FontStyles} from '../../../../themes';
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.orange,
    height: 12,
    borderRadius: 100,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  progressBar: {
    position: 'absolute',
    height: 12,
    width: 35,
    borderRadius: 100,
    backgroundColor: colors.lightOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtProgress: {
    color: colors.white,
    fontWeight: '400',
    fontSize: sizes.medium,
    fontStyle: FontStyles.light,
  },
});

export default styles;
