import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ListManufactory from './ListManufactory';
const Index = ({data, onPress, itemSelected}) => {
  const renderItem = useCallback(
    ({item}) => {
      const isPinned = itemSelected.some(selected => selected.id === item.id);

      return (
        <ListManufactory item={item} onPress={onPress} isPinned={isPinned} />
      );
    },
    [onPress, itemSelected],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      extraData={itemSelected}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    gap: 12,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Index;
