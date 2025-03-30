import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0ee',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  header: {
    height: screenHeight * 0.1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 12,
    flexDirection: 'row',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  btnShideSheetHeader: {
    position: 'absolute',
    paddingBottom: 14,
    left: 24,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconShideSheetHeader: {
    height: 11,
    width: 14,
    resizeMode: 'cover',
  },
  txt: {
    fontWeight: '400',
    fontSize: 18,
    color: '#11315B',
    lineHeight: 28,
    alignItems: 'center',
  },
  btn: {
    width: 289,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0375F3',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
  },
  txtButton: {
    fontWeight: '400',
    fontSize: 18,
    color: '#FFFFFF',
    lineHeight: 28,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: screenHeight * 0.27,
    resizeMode: 'cover',
  },
});

export default styles;
