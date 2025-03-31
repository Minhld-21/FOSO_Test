import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
const InputSearch = ({placeholder = 'Tìm kiếm mã lệnh sản xuất', onSearch}) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9295A4"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={handleSearch} // Nhấn "Enter" trên bàn phím để tìm kiếm
      />
      <TouchableOpacity style={styles.btnSearch} onPress={handleSearch}>
        <Ionicons name="search-outline" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default InputSearch;
