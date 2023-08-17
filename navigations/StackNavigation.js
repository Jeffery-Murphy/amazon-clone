import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderScreen from '../screens/OrderScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductScreen from '../screens/ProductScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import AddressScreen from '../screens/AddressScreen';
import ConfirmScreen from '../screens/ConfirmScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

function BottomTabs(){
  return (
    <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#008E97" />
            ): (
              <AntDesign name="home" size={24} color="black" />
              )
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-person-circle" size={24} color="#008E97" />
            ): (
              <Ionicons name="ios-person-circle-outline" size={24} color="black" />
              )
          }}
        />
      </Tab.Navigator>
)
}

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="ProductInfo" component={ProductScreen} options={{headerShown: false}} />
        <Stack.Screen name="Address" component={AddAddressScreen} options={{headerShown: false}} />
        <Stack.Screen name="Add" component={AddressScreen} options={{headerShown: false}} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} options={{headerShown: false}} />
        <Stack.Screen name="Order" component={OrderScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation