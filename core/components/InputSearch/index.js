import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 40,
  },
  input: {
    flex: 1,
    color: '#9295A4',
    paddingHorizontal: 12,
  },
  btnSearch: {
    backgroundColor: '#92BFF7',
    width: 40,
    height: '100%',
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputSearch;
