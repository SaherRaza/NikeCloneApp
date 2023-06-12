import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductDetailsScreen from './ProductDetailsScreen';
import ProductsScreen from "./ProductsScreen";
import ShoppingCart from './ShoppingCart';
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons"
import {selectNumberOfItems} from "../store/cartSlice";
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
   <NavigationContainer>
   <Stack.Navigator
   screenOptions={{contentStyle: {backgroundColor:"white"}}}
   >
    <Stack.Screen name="Products" 
    component={ProductsScreen}
    options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row' }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfItems}
                
                </Text> 
              </Pressable>
            ),
            headerLeft: () => (
              <MaterialCommunityIcons
                onPress={() => navigation.navigate('Track Order')}
                name="truck-delivery"
                size={22}
                color="gray"
              />
            ),
          })}
     />

    <Stack.Screen name="Product Details"
     component={ProductDetailsScreen}
     options={{presentation:'modal'}}
      />
    <Stack.Screen name="Cart" component={ShoppingCart} />
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})