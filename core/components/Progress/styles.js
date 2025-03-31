import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FF811A26',
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
    backgroundColor: '#FF9432',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 8,
  },
});

export default styles;
