import {Text, View} from 'react-native';
import React from 'react';

import styles from './styles';

const Index = ({styleWrapper, styleProgressBar, progress = 0}) => {
  return (
    <View style={[styles.wrapper, styleWrapper]}>
      {/* Thanh tiến trình */}
      <View
        style={[styles.progressBar, styleProgressBar, {width: `${progress}%`}]}>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    </View>
  );
};

export default Index;
