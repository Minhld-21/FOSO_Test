import {StyleSheet} from 'react-native';

import {colors, spacing, FontStyles} from '../../../../styles';

const styles = StyleSheet.create({
  dropdownWrapper: {
    borderWidth: 1,
    borderColor: colors.midgray,
    borderRadius: 8,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: spacing.md,
  },
  contentDropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  txtDropdownButton: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3A3E4C',
    fontStyle: FontStyles.regular,
  },
  dropdownMenu: {
    overflow: 'hidden',
  },
  dropdownOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  viewDropdownOption: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  txtDropdownOption: {
    fontWeight: '400',
    fontSize: 14,
    fontStyle: FontStyles.regular,
  },
});

export default styles;
