import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Component Icon hỗ trợ nhiều thư viện và SVG
const Index = ({
  type = 'MaterialIcons',
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  const IconComponent = {
    MaterialIcons,
    FontAwesome,
    Ionicons,
    Feather,
    AntDesign,
    Fontisto,
    Entypo,
    EvilIcons,
    MaterialCommunityIcons,
  }[type];

  if (!IconComponent || !name) return <View />;

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default Index;
