import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import InputSearch from '../InputSearch';
import StatusDropdown from '../StatusDropdown';

const DATA = [
  {
    id: 'LSX-13032514',
    status: 'Chưa sản xuất',
    deadline: '13/03/2025',
    progress: [50, 50],
  },
  {
    id: 'LSX-13032514',
    status: 'Đang sản xuất',
    deadline: '13/03/2025',
    progress: [70, 30],
  },
  {
    id: 'LSX-13032514',
    status: 'Hoàn thành',
    deadline: '13/03/2025',
    progress: [100, 0],
  },
];

const SideSheet = ({isVisible, onClose}) => {
  const [selectedStatus, setSelectedStatus] = useState([]);

  const toggleStatus = id => {
    setSelectedStatus(item =>
      item.includes(id) ? item.filter(item => item !== id) : [...item, id],
    );
  };

  const filteredData = DATA.filter(item =>
    selectedStatus.includes(item.status),
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      animationInTiming={600}
      animationOutTiming={600}
      backdropOpacity={0}
      style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Lệnh sản xuất</Text>
        <InputSearch onSearch={text => console.log(text)} />

        <TouchableOpacity style={styles.btnDeleteAllPin}>
          <Text style={styles.txtDeleteAllPin}>Bỏ toàn bộ ghim</Text>
          <MaterialCommunityIcons
            name="pin-off-outline"
            size={18}
            color="#11315B"
          />
        </TouchableOpacity>
        <StatusDropdown
          selectedStatus={selectedStatus}
          toggleStatus={toggleStatus}
        />
      </View>
    </Modal>
  );
};

export default SideSheet;
