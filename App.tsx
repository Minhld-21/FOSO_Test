import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import ManufactureScreen from './core/screen/Manufacture';

// Các màn hình
const OverviewScreen = () => (
  <View style={styles.screen}>
    <Text>Trang Chủ</Text>
  </View>
);

const OrdersScreen = () => (
  <View style={styles.screen}>
    <Text>Đơn Hàng</Text>
  </View>
);

const ChartGanttScreen = () => (
  <View style={styles.screen}>
    <Text>Hồ Sơ</Text>
  </View>
);

const MoreScreen = () => (
  <View style={styles.screen}>
    <Text>Xem Thêm</Text>
  </View>
);

// Tạo Bottom Tab Navigator
const Tab = createMaterialBottomTabNavigator();
const screenHeight = Dimensions.get('window').height;
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Manufacture"
          activeColor="#0375F3"
          inactiveColor="#9295A4"
          barStyle={styles.bottomBar}>
          <Tab.Screen
            name="Overview"
            component={OverviewScreen}
            options={{
              tabBarLabel: 'Tổng quan',
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./core/image/overview.png')}
                  style={[styles.icon, focused && styles.iconActive]}
                  resizeMode="contain"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
              tabBarLabel: 'Đơn Hàng',
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./core/image/order.png')}
                  style={[styles.icon, focused && styles.iconActive]}
                  resizeMode="contain"
                />
              ),
            }}
          />
          <Tab.Screen
            name="ChartGantt"
            component={ChartGanttScreen}
            options={{
              tabBarLabel: 'Sơ đồ Gantt',
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./core/image/chartgantt.png')}
                  style={[styles.icon, focused && styles.iconActive]}
                  resizeMode="contain"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Manufacture"
            component={ManufactureScreen}
            options={{
              tabBarLabel: 'Lệnh SX',
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./core/image/manufacture.png')}
                  style={[styles.icon, focused && styles.iconActive]}
                  resizeMode="contain"
                />
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={MoreScreen}
            options={{
              tabBarLabel: 'Xem thêm',
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./core/image/viewmore.png')}
                  style={[styles.icon, focused && styles.iconActive]}
                  resizeMode="contain"
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDE4FD',
  },
  bottomBar: {
    backgroundColor: 'white',
    height: screenHeight * 0.1,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#9295A4',
  },
  iconActive: {
    tintColor: '#0375F3',
  },
});

export default App;
