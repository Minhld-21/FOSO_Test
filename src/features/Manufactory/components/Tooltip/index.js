import React, {useCallback, useState, useRef} from 'react';
import {View, Text, Pressable, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

import styles from './styles';

const Index = ({data}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    placement: 'bottom',
  });

  const btnRef = useRef(null);
  const screenHeight = Dimensions.get('window').height;

  const handleTooltip = () => {
    if (btnRef.current) {
      btnRef.current.measureInWindow((x, y, height) => {
        const spaceBelow = screenHeight - (y + height);
        const tooltipHeight = screenHeight / 8;
        if (spaceBelow < tooltipHeight) {
          setPosition({
            top: y - tooltipHeight + 20,
            left: x - 15,
            placement: 'top',
          });
        } else {
          setPosition({
            top: y + height + 15,
            left: x - 15,
            placement: 'bottom',
          });
        }
      });
      handleTooltipVisible();
    }
  };

  const handleTooltipVisible = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  return (
    <View>
      <Pressable ref={btnRef} style={styles.btnTooltip} onPress={handleTooltip}>
        <AntDesign name="infocirlce" size={14} color="#667085" />
      </Pressable>
      <Modal
        isVisible={isVisible}
        onBackdropPress={handleTooltip}
        backdropOpacity={0.3}
        animationIn="fadeInLeft"
        animationOut="fadeOutLeft"
        animationInTiming={300}
        animationOutTiming={300}
        style={styles.modal}>
        <View style={[styles.tooltipContainer, {top: position.top}]}>
          <View
            style={[
              styles.triangle,
              position.placement === 'top'
                ? styles.triangleBottom
                : styles.triangleTop,
              {left: position.left},
            ]}
          />
          <View style={styles.horizontal}>
            <View style={styles.dot} />
            <Text style={styles.txtTitle}>Tiến độ Kế hoạch Nguyên liệu</Text>
            <Text style={styles.txtPercent}>{data[0]}%</Text>
          </View>
          <View style={styles.horizontal}>
            <View style={[styles.dot, styles.dotWarehouse]} />
            <Text style={styles.txtTitle}>Tiến độ Nhập kho Thành phẩm</Text>
            <Text style={styles.txtPercent}>{data[1]}%</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Index;
