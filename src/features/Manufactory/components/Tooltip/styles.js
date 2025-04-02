import {StyleSheet} from 'react-native';

import {colors, sizes, spacingX, spacingY} from '../../../../themes';

const styles = StyleSheet.create({
  btnTooltip: {
    width: 20,
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  tooltipContainer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    padding: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.light_gray,
    gap: spacingY.sm,
    borderRadius: 4,
    position: 'absolute',
    left: 20,
  },
  triangle: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
  triangleBottom: {
    borderTopWidth: 10,
    borderTopColor: 'white',
    borderBottomWidth: 0,
    bottom: -10,
    transform: [{translateX: -10}],
  },
  triangleTop: {
    top: -10,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacingX.sm,
  },
  dot: {
    width: 13,
    height: 13,
    borderRadius: 13,
    backgroundColor: colors.lightOrange,
  },
  dotWarehouse: {
    backgroundColor: colors.blue,
  },
  txtTitle: {
    fontSize: sizes.large,
    fontWeight: '500',
    color: colors.blackBlue,
  },
  txtPercent: {
    fontSize: sizes.large,
    fontWeight: '500',
    color: colors.gray,
  },
});

export default styles;
