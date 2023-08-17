import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, ImageBackground, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";

const ProductScreen = () => {
    const route = useRoute();
    const { width } = Dimensions.get("window");
    const navigation = useNavigation();
    const height = (width * 100) / 100;
    const [addedToCart, setAddedToCart] = useState(false);

    const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
    
  return (
    <View style={{flex: 1, paddingTop: 35, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 8, gap: 20}}>
        <Pressable onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
        <View
          style={{
            backgroundColor: "#D0D0D0",
            marginHorizontal: 8,
            paddingHorizontal: 6,
            paddingVertical: 6,
            borderRadius: 4,
            flex: 1,
            marginTop: 5,
            gap: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="search" size={24} color="black" />
          <TextInput placeholder="Search Amazon.in" />
        </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#C60C30",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  20% off
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>

            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "auto",
                marginLeft: 20,
                marginBottom: 20,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
        </ScrollView>
        <ScrollView>
        <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "normal", textAlign: 'justify' }}>
          {route?.params?.title}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 6 }}>
          {route?.params?.price} $
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Color: </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.color}
        </Text>
      </View>
       <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Size: </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.size}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>
          Total : {route.params.price} $
        </Text>
        <Text style={{ color: "#00CED1" }}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
        </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="location" size={24} color="black" />

          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Deliver To Ghana, Accra Kasoa 37.
          </Text>
        </View>

        <Text style={{ color: "green", marginHorizontal: 10, fontWeight: "500" }}>IN Stock</Text>

        <Pressable
        onPress={() => addItemToCart(route?.params?.item)}
        style={{
          backgroundColor: "#FFC72C",
          padding: 14,
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >

{addedToCart ? (
          <View>
            <Text>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart</Text>
        )}
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "#FFAC1C",
          padding: 14,
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Text>Buy Now</Text>
      </Pressable>
        
        </ScrollView>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})