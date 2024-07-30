import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import InboxScreen from './screens/InboxScreen';

const Tab = createBottomTabNavigator();

const iconMapping = {
  Home: require('./assets/01.png'), // Đường dẫn đến ảnh home
  Cart: require('./assets/04.png'), // Đường dẫn đến ảnh cart
  Inbox: require('./assets/03.png'), // Đường dẫn đến ảnh inbox
  Profile: require('./assets/05.png'), // Đường dẫn đến ảnh profile
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const image = iconMapping[route.name];
            const iconStyle = focused ? styles.iconFocused : styles.icon;
            return <Image source={image} style={iconStyle} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
        }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{
          headerShown: false,
        }} />
        <Tab.Screen name="Inbox" component={InboxScreen} options={{
          headerShown: false,
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          headerShown: false,
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  iconFocused: {
    width: 25,
    height: 25,
  },
});
