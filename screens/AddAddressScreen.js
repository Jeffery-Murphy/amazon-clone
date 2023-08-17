import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useContext, useState, useCallback } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserType } from "../UserContext";
import { Ionicons } from '@expo/vector-icons';
  
  const AddAddressScreen = () => {
    const navigation = useNavigation();
    const [addresses, setAddresses] = useState([]);

    const { userId, setUserId } = useContext(UserType);
  console.log("userId", userId);
  useEffect(() => {
    fetchAddresses();
  }, []);
  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:8000/addresses/${userId}`
      );
      const { addresses } = response.data;

      setAddresses(addresses);
    } catch (error) {
      console.log("error", error);
    }
  };
  //refresh the addresses when the component comes to the focus ie basically when we navigate back
  useFocusEffect(
    useCallback(() => {
      fetchAddresses();
    }, [])
  );
    
    //refresh the addresses when the component comes to the focus ie basically when we navigate back
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
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
  
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>
  
          <Pressable
            onPress={() => navigation.navigate("Add")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              paddingVertical: 14,
              paddingHorizontal: 5,
            }}
          >
            <Text>Add a new Address</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </Pressable>
  
          <Pressable>
            {/* all the added adresses */}
            {addresses?.map((item, index) => (
              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: "#D0D0D0",
                  padding: 10,
                  flexDirection: "column",
                  gap: 5,
                  marginVertical: 10,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {item?.name}
                  </Text>
                  <Entypo name="location-pin" size={24} color="red" />
                </View>
  
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  {item?.houseNo}, {item?.landmark}
                </Text>
  
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  {item?.street}
                </Text>
  
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  Ghana, Accra
                </Text>
  
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  phone No : {item?.mobileNo}
                </Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  pin code : {item?.postalCode}
                </Text>
  
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 7,
                  }}
                >
                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Edit</Text>
                  </Pressable>
  
                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Remove</Text>
                  </Pressable>
  
                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Set as Default</Text>
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </Pressable>
        </View>
      </ScrollView>
    );
  };
  
  export default AddAddressScreen;
  
  const styles = StyleSheet.create({});