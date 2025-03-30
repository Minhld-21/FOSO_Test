import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
  },
  container: {
    width: screenWidth * 0.7,
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    gap: 12,
  },
  txtTitle: {
    fontWeight: '500',
    fontSize: 18,
    color: '#25387A',
    lineHeight: 28,
    alignItems: 'center',
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
    paddingHorizontal: 12,
  },
  txtDeleteAllPin: {
    fontWeight: '500',
    fontSize: 14,
    color: '#11315B',
  },
});

export default styles;
