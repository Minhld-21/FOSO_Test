import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SvgXml} from 'react-native-svg';

const ICON_SETS = {
  MaterialIcons: require('react-native-vector-icons/MaterialIcons').default,
  FontAwesome: require('react-native-vector-icons/FontAwesome').default,
  Ionicons: require('react-native-vector-icons/Ionicons').default,
  AntDesign: require('react-native-vector-icons/AntDesign').default,
  Feather: require('react-native-vector-icons/Feather').default,
  Entypo: require('react-native-vector-icons/Entypo').default,
  EvilIcons: require('react-native-vector-icons/EvilIcons').default,
  Foundation: require('react-native-vector-icons/Foundation').default,
  Octicons: require('react-native-vector-icons/Octicons').default,
  SimpleLineIcons: require('react-native-vector-icons/SimpleLineIcons').default,
  Zocial: require('react-native-vector-icons/Zocial').default,
};

const Icon = ({
  type = 'MaterialIcons',
  name,
  size = 24,
  color = '#000',
  svg = null,
}) => {
  if (svg) {
    return (
      <View style={{width: size, height: size}}>
        <SvgXml xml={svg} width="100%" height="100%" />
      </View>
    );
  }

  const SelectedIcon = ICON_SETS[type] || Icon;
  return <SelectedIcon name={name} size={size} color={color} />;
};

export default Icon;
