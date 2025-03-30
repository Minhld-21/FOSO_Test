import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import SideSheet from '../../components/Slide';
import {useState} from 'react';
const Manufacture = () => {
  const [modalSideSheet, setModalSideSheet] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <LinearGradient
        colors={['#0B69D2', '#0375F3']}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.header}>
        <TouchableOpacity
          style={styles.btnShideSheetHeader}
          onPress={() => setModalSideSheet(true)}>
          <Image
            source={require('../../image/iconSideSheet.png')}
            style={styles.iconShideSheetHeader}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Lệnh sản xuất</Text>
      </LinearGradient>
      <View style={styles.body}>
        <Image
          source={require('../../image/imageWarning.png')}
          style={styles.image}
        />
        <Text style={styles.txt}>Chưa có lệnh sản xuất</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setModalSideSheet(true)}>
          <MaterialCommunityIcons name="pin" size={24} color="white" />
          <Text style={styles.txtButton}>Bắt đầu ghim lệnh ngay</Text>
        </TouchableOpacity>
      </View>
      <SideSheet
        isVisible={modalSideSheet}
        onClose={() => setModalSideSheet(false)}
      />
    </SafeAreaView>
  );
};

export default Manufacture;
