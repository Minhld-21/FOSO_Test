import React, {useCallback, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import SideSheet from './components/SideSheet';
import {Icon} from '../../styles';
const Manufacture = () => {
  const [modalSideSheet, setModalSideSheet] = useState(false);

  const handleModal = useCallback(() => {
    setModalSideSheet(prev => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LinearGradient
          colors={['#0B69D2', '#0375F3']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.header}>
          <TouchableOpacity
            style={styles.btnShideSheetHeader}
            onPress={handleModal}>
            <Icon type="Feather" name="align-justify" color="white" size={18} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Lệnh sản xuất</Text>
        </LinearGradient>
        <View style={styles.body}>
          <Image
            source={require('../../../assets/images/imageWarning.png')}
            style={styles.image}
          />
          <Text style={styles.txtNotifi}>Chưa có lệnh sản xuất</Text>
          <TouchableOpacity style={styles.btnStartPin} onPress={handleModal}>
            <MaterialCommunityIcons name="pin" size={24} color="white" />
            <Text style={styles.txtButtonStartPin}>Bắt đầu ghim lệnh ngay</Text>
          </TouchableOpacity>
        </View>
        <SideSheet isVisible={modalSideSheet} onClose={handleModal} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Manufacture;
