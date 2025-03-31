import {StyleSheet} from 'react-native';

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
    paddingRight: 12,
    borderLeftWidth: 5,
    borderColor: '#0375F3',
    gap: 12,
  },
  wrapperHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  txtStatus: {
    fontWeight: '400',
    fontSize: 12,
  },
  btnPushpin: {
    width: 20,
    height: 20,
  },
  txtID: {
    fontWeight: '600',
    fontSize: 14,
    color: '#003DA0',
  },
  txtDeadline: {
    fontWeight: '500',
    fontSize: 12,
    color: '#667085',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  secondaryProgressWrapper: {
    backgroundColor: '#3EC3F733',
  },
  secondaryProgressBar: {
    backgroundColor: '#0375F3',
  },
});
export default styles;
