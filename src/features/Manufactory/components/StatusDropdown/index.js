import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const statusData = [
  {
    id: '1',
    status: 'chuasanxuat',
    label: 'Chưa sản xuất',
    backgroundColor: '#FF811A26',
    txtColor: '#C25705',
  },
  {
    id: '2',
    status: 'dangsanxuat',
    label: 'Đang sản xuất',
    backgroundColor: '#3EC3F733',
    txtColor: '#076A94',
  },
  {
    id: '3',
    status: 'hoanthanh',
    label: 'Hoàn thành',
    backgroundColor: '#35BD4B33',
    txtColor: '#1A7526',
  },
];

const Index = ({selectedStatus, filterStatus}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const lastStatus = statusData.length - 1;

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
    Animated.timing(animatedHeight, {
      toValue: isDropdownVisible ? 0 : statusData.length * 55,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.dropdownWrapper}>
      <TouchableOpacity
        style={[
          styles.dropdownButton,
          isDropdownVisible && {borderBottomWidth: 1, borderColor: '#ccc'},
        ]}
        onPress={toggleDropdown}>
        <View style={styles.contentDropdownButton}>
          <MaterialCommunityIcons name="chart-arc" size={18} color="#9295A4" />
          <Text style={styles.txtDropdownButton}>Chọn trạng thái</Text>
        </View>
        <MaterialCommunityIcons
          name={
            isDropdownVisible
              ? 'arrow-up-drop-circle'
              : 'arrow-down-drop-circle'
          }
          size={18}
          color="#9295A4"
        />
      </TouchableOpacity>

      <Animated.View style={[styles.dropdownMenu, {height: animatedHeight}]}>
        {statusData.map((item, index) => (
          <Pressable
            style={[
              styles.dropdownOption,
              lastStatus !== index && {
                borderBottomWidth: 1,
                borderColor: '#e9e9e9',
              },
            ]}
            onPress={() => filterStatus(item.status)}
            key={item.id}>
            <Ionicons
              name={
                selectedStatus.includes(item.status)
                  ? 'checkbox'
                  : 'square-outline'
              }
              size={16}
              color={selectedStatus.includes(item.status) ? '#1760B9' : '#ccc'}
            />
            <View
              style={[
                styles.viewDropdownOption,
                {backgroundColor: item.backgroundColor},
              ]}>
              <Text style={[styles.txtDropdownOption, {color: item.txtColor}]}>
                {item.label}
              </Text>
            </View>
          </Pressable>
        ))}
      </Animated.View>
    </View>
  );
};

export default Index;
