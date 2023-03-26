/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faBagShopping, faHeart, faPerson } from '@fortawesome/free-solid-svg-icons'

import {
  StyleSheet,
} from 'react-native';
import Home from './screens/home/Home'
import WishList from './screens/wishlist/WishList';
import Orders from './screens/orders/Orders';
import Account from './screens/account/Account';
import ProductDetails from './screens/product-details/ProductDetails';
import { RootStackParamList } from './utils/types';
import CategoryProducts from './screens/category/CategoryProducts';


function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{contentStyle: {backgroundColor: "#FFFFFF"}}}>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerBackImageSource: require('./assets/arrow-back.png'),headerTitleAlign: "center", headerTitle: "Details"}}/>
      <Stack.Screen name="CategoryProducts" component={CategoryProducts} options={{headerBackImageSource: require('./assets/arrow-back.png'),headerTitleAlign: "center", headerTitle: "Category"}}/>
    </Stack.Navigator>
  );
}

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='StackNavigator' screenOptions={{headerShown: false,tabBarActiveTintColor: '#e91e63',tabBarInactiveTintColor: "lightpink",tabBarShowLabel: false}}>
        <Tab.Screen  name='StackNavigator' component={StackNavigator} options={{tabBarIcon: ({size,focused,color}) => {
          return <FontAwesomeIcon icon={faHome} size={size} color={color}/>
        }}}/>
        <Tab.Screen  name='WishList' component={WishList} options={{tabBarIcon: ({size,focused,color}) => {
          return <FontAwesomeIcon icon={faHeart} size={size} color={color}/>
        }}}/>
        <Tab.Screen  name='Order' component={Orders} options={{tabBarIcon: ({size,focused,color}) => {
          return <FontAwesomeIcon icon={faBagShopping} size={size} color={color}/>
        }}}/>
        <Tab.Screen  name='Account' component={Account} options={{tabBarIcon: ({size,focused,color}) => {
          return <FontAwesomeIcon icon={faPerson} size={size} color={color}/>
        }}}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;
