import { StyleSheet, Text, View, FlatList,Image, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'
import {useDispatch, useSelector} from "react-redux";
import { productSlice } from '../store/productSlice';

const ProductsScreen = ({navigation}) => {
  const products =useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  return (
    <FlatList
    data={products}
    numColumns={2}
    renderItem={({item})=>(
      <Pressable
       onPress={()=>{
        // update selected product 
        dispatch(productSlice.actions.setSelectedProduct(item.id));
        navigation.navigate("Product Details")}} 
      style={styles.itemContainer}>
      <Image
    source={{uri:item.image}}
    style={styles.image}
     />
      </Pressable>
    )}
     />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    image:{
        width:"100%",
        aspectRatio:1
      },
      itemContainer:{
        width:"50%",
        padding:1
      }
})