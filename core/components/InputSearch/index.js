import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const InputSearch = ({placeholder = 'Tìm kiếm mã lệnh sản xuất', onSearch}) => {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
    if (onSearch) onSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9295A4"
        value={value}
        onChangeText={text => {
          setValue(text);
          //   if (onSearch) onSearch(text);
        }}
      />
      <TouchableOpacity
        style={styles.btnSearch}
        onPress={() => {
          if (onSearch) onSearch(value);
        }}>
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
    flex: 0.8,
    color: '#9295A4',
    paddingHorizontal: 12,
  },
  btnSearch: {
    backgroundColor: '#92BFF7',
    flex: 0.2,
    width: '110%',
    height: '105%',
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputSearch;
