import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  useWindowDimensions,
  ScrollView, 
  Pressable
} from "react-native";
import React from "react";
import products from "../data/products";
import {useDispatch, useSelector} from "react-redux";
import { cartSlice } from "../store/cartSlice";


const ProductDetailsScreen = () => {

  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

 // const product = products[0];
  const { width } = useWindowDimensions();

  const addToCart = () =>{
    dispatch(cartSlice.actions.addCartItem({product:product}));
  }
  return (
    <View>
    <ScrollView>
      <FlatList
        data={product.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: width, aspectRatio: 1 }}
          />
        )}
      />

      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{product.name}</Text>

        <Text style={styles.price}>${product.price}</Text>

        <Text style={styles.description}>{product.description}</Text>
      </View>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    title:{
        fontSize:34,
        fontWeight:"500",
        marginVertical:10
    },
    price:{
        fontWeight:"500",
        fontSize:16,
        letterSpacing:1.5
    },
    description:{
        marginVertical:10,
        fontSize:18,
        lineHeight:30,
        fontWeight:"300"
    },
    button:{
        position:"absolute",
        bottom:30,
        backgroundColor:"black",
        alignSelf:"center",
        width:"90%",
        padding:20,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:"white",
        fontWeight:"500",
        fontSize:16
    }
});
