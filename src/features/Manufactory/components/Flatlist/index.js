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
});

export default Index;
