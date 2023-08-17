import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartReducer";

const ProductItem = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch()
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  }
  return (
    <Pressable style={{ marginVertical: 20, marginHorizontal: 25 }}>
      <Image
        source={{ uri: item?.image }}
        style={{ width: 150, height: 150, resizeMode: "contain" }}
      />
      <Text style={{width: 150, marginTop: 8, fontSize: 16}} numberOfLines={1}>{item?.title}</Text>
      <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{item?.price} $</Text>
      <Text style={{color: '#FFC72C', fontWeight: 'bold'}}>{item?.rating?.rate} rating</Text>
      </View>
      <Pressable 
      onPress={()=>addItemToCart(item)}
      style={{
        backgroundColor: "#FFC72C",
        padding: 8,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
      }}>
        {addedToCart ? (
          <View>
            <Text>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart</Text>
        )}
      </Pressable>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
