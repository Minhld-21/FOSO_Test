import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import InputSearch from '../InputSearch';
import StatusDropdown from '../StatusDropdown';
import FlatList from '../Flatlist';

const dataManufactory = [
  {
    id: 1,
    key: 'LSX-13032514',
    label: 'Chưa sản xuất',
    status: 'chuasanxuat',
    deadline: '13/03/2025',
    progress: [50, 50],
    backgroundColor: '#FF811A26',
    txtColor: '#C25705',
  },
  {
    id: 2,
    key: 'LSX-13032511',
    label: 'Đang sản xuất',
    status: 'dangsanxuat',
    deadline: '13/03/2025',
    progress: [70, 30],
    backgroundColor: '#3EC3F733',
    txtColor: '#076A94',
  },
  {
    id: 3,
    key: 'LSX-13032512',
    label: 'Hoàn thành',
    status: 'hoanthanh',
    deadline: '13/03/2025',
    progress: [100, 0],
    backgroundColor: '#35BD4B33',
    txtColor: '#1A7526',
  },
  {
    id: 4,
    key: 'LSX-13032513',
    label: 'Hoàn thành',
    status: 'hoanthanh',
    deadline: '13/03/2025',
    progress: [100, 20],
    backgroundColor: '#35BD4B33',
    txtColor: '#1A7526',
  },

  {
    id: 5,
    key: 'LSX-13032517',
    label: 'Hoàn thành',
    status: 'hoanthanh',
    deadline: '13/03/2025',
    progress: [100, 10],
    backgroundColor: '#35BD4B33',
    txtColor: '#1A7526',
  },
  {
    id: 6,
    key: 'LSX-13032518',
    label: 'Hoàn thành',
    status: 'hoanthanh',
    deadline: '13/03/2025',
    progress: [100, 80],
    backgroundColor: '#35BD4B33',
    txtColor: '#1A7526',
  },
  {
    id: 7,
    key: 'LSX-13032519',
    label: 'Hoàn thành',
    status: 'hoanthanh',
    deadline: '13/03/2025',
    progress: [70, 30],
    backgroundColor: '#35BD4B33',
    txtColor: '#1A7526',
  },
];

const SideSheet = ({isVisible, onClose}) => {
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const filterStatus = useCallback(id => {
    setSelectedStatus(prevStatus => {
      const newStatus = prevStatus.includes(id)
        ? prevStatus.filter(status => status !== id)
        : [...prevStatus, id];

      // Lọc dữ liệu từ dataManufactory dựa trên newStatus
      setSortedData(
        newStatus.length > 0
          ? dataManufactory.filter(item => newStatus.includes(item.status))
          : dataManufactory,
      );

      return newStatus;
    });
  }, []);

  const handleSearch = text => {
    setSortedData(
      dataManufactory.filter(item =>
        item.key.toLowerCase().includes(text.toLowerCase()),
      ),
    );
    setSelectedStatus([]);
  };

  const handlePushPin = useCallback(item => {
    setSelectedItem(prevDataPin => {
      const isPinned = prevDataPin.some(pin => pin.id === item.id);
      let updatedPins;

      if (isPinned) {
        // Nếu đã được ghim, bỏ ghim nó
        updatedPins = prevDataPin.filter(pin => pin.id !== item.id);
      } else {
        // Nếu chưa ghim, thêm vào danh sách
        updatedPins = [...prevDataPin, item];
      }

      // Sắp xếp lại danh sách: ghim trước, chưa ghim sau
      const sortedData = [...dataManufactory].sort((a, b) => {
        const isPinnedA = updatedPins.some(pin => pin.id === a.id);
        const isPinnedB = updatedPins.some(pin => pin.id === b.id);
        return isPinnedB - isPinnedA; // Pinned lên đầu, chưa pinned xuống sau
      });

      setSortedData(sortedData); // Cập nhật danh sách hiển thị
      return updatedPins;
    });
  }, []);
  const handleClearPin = () => {
    setSortedData([]);
    setSelectedItem([]);
  };
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
        <InputSearch onSearch={handleSearch} />
        <StatusDropdown
          selectedStatus={selectedStatus}
          filterStatus={filterStatus}
        />
        <TouchableOpacity
          onPress={handleClearPin}
          style={styles.btnDeleteAllPin}>
          <Text style={styles.txtDeleteAllPin}>Bỏ toàn bộ ghim</Text>
          <MaterialCommunityIcons
            name="pin-off-outline"
            size={18}
            color="#11315B"
          />
        </TouchableOpacity>
        <FlatList
          data={sortedData.length > 0 ? sortedData : dataManufactory}
          onPress={handlePushPin}
          itemSelected={selectedItem}
        />
      </View>
    </Modal>
  );
};

export default SideSheet;
