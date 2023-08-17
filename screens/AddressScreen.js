import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
  } from "react-native";
  import React, { useEffect, useState,useContext } from "react";
  import axios from "axios";
  import { useNavigation } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { UserType } from "../UserContext";
  
  const AddressScreen = () => {
      const navigation = useNavigation();
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const {userId, setUserId} = useContext(UserType);


    useEffect(()=> {
      const fetchUser = async() => {
        const token = await AsyncStorage.getItem("authToken")
        const decodedToken = jwt_decode(token)
        const userId = decodedToken.userId;
        setUserId(userId)
      }
      fetchUser();
    },[])

    console.log(userId)

    const handleAddAddress = () => {
      const address = {
          name,
          mobileNo,
          houseNo,
          street,
          landmark,
          postalCode
      }

      axios.post("http://10.0.2.2:8000/addresses",{userId,address}).then((response) => {
          Alert.alert("Success","Addresses added successfully");
          setName("");
          setMobileNo("");
          setHouseNo("");
          setStreet("");
          setLandmark("");
          setPostalCode("");

          setTimeout(() => {
            navigation.goBack();
          },500)
      }).catch((error) => {
          Alert.alert("Error","Failed to add address")
          console.log("error",error.response.data)
      })
  }


    return (
        <View style={{flex: 1, paddingTop: 35, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 8, justifyContent: 'space-between'}}>
        <Pressable onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            New Address
          </Text>
          <Text />
        </View>
        
  
        <View style={{ padding: 10 }}>
  
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Country"
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
  
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Full name (First and last name)
            </Text>
  
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder="Enter your name"
            />
          </View>
  
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Mobile numebr
            </Text>
  
            <TextInput
              value={mobileNo}
              onChangeText={(text) => setMobileNo(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder="Mobile No"
            />
          </View>
  
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Flat,House No,Building,Company
            </Text>
  
            <TextInput
              value={houseNo}
              onChangeText={(text) => setHouseNo(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder=""
            />
          </View>
  
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Area,Street,sector,village
            </Text>
            <TextInput
              value={street}
              onChangeText={(text) => setStreet(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder=""
            />
          </View>
  
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Landmark</Text>
            <TextInput
              value={landmark}
              onChangeText={(text) => setLandmark(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder="Eg near appollo hospital"
            />
          </View>
  
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pincode</Text>
  
            <TextInput
              value={postalCode}
              onChangeText={(text) => setPostalCode(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder="Enter Pincode"
            />
          </View>
  
          <Pressable
            onPress={handleAddAddress}
            style={{
              backgroundColor: "#FFC72C",
              padding: 14,
              borderRadius: 4,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Add Address</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  
  export default AddressScreen;
  
  const styles = StyleSheet.create({});