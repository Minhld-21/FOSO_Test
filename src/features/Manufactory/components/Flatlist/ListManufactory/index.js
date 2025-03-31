import {Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import Progress from '../../Progress';
const Index = memo(({item, onPress, isPinned = []}) => {
  console.log('render', item);

  return (
    <LinearGradient
      colors={['#E2F0FE00', '#C7DFFB36']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={styles.wrapper}
      key={item.id}>
      <View style={styles.wrapperHorizontal}>
        <View style={[styles.status, {backgroundColor: item.backgroundColor}]}>
          <Text style={[styles.txtStatus, {color: item.txtColor}]}>
            {item.label}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnPushpin}
          onPress={() => onPress?.(item)}>
          <AntDesign
            name="pushpin"
            size={16}
            color={isPinned ? 'red' : '#9295A4'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txtID}>{item.key}</Text>
      <Text style={styles.txtDeadline}>Deadline: {item.deadline}</Text>
      <View style={styles.progressContainer}>
        <Progress progress={item.progress[0]} />
        <Progress
          progress={item.progress[1]}
          styleWrapper={styles.secondaryProgressWrapper}
          styleProgressBar={styles.secondaryProgressBar}
        />
        <AntDesign name="infocirlce" size={10} color="#667085" />
      </View>
    </LinearGradient>
  );
});

export default Index;
