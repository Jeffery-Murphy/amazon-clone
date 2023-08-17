import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async() => {
      try {
        const token = await AsyncStorage.getItem("authToken");
    if(token) {
      navigation.replace("Main")
    }
      } catch (error) {
        console.log("Error Message", error);
      }
    }
    checkLoginStatus()
  }, [])
  
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://10.0.2.2:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main")
      })
      .catch((error) => {
        Alert.alert(
          "Login failed, please try again",
        );
        console.log("Login failed", error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{ width: 150, height: 150, marginTop: 40 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Welcome back!
          </Text>
          <Text style={{ fontSize: 15, marginTop: 12, color: "#041E42" }}>
            Login in to your account to continue!
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 5,
              alignItems: "center",
              gap: 10,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 3,
            }}
          >
            <MaterialIcons name="email" size={24} color="gray" />
            <TextInput
              value={email}
              onChangeText={(text)=>setEmail(text)}
              placeholder="Enter Email"
              style={{ color: "gray", marginVertical: 5, width: 345 }}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 7,
              alignItems: "center",
              gap: 10,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 3,
            }}
          >
            <AntDesign name="lock" size={24} color="gray" />
            <TextInput
              value={password}
              onChangeText={(text)=>setPassword(text)}
              placeholder="Password"
              secureTextEntry={true}
              style={{ color: "gray", marginVertical: 5, width: 345 }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between',}}>
          <Text>Keep me logged in</Text>
          <Text style={{fontWeight: '500', fontSize: 16, color: "#007FFF"}}>Forgot Password</Text>
        </View>
        <View style={{marginTop: 50}}>
          <Pressable
            style={{
              backgroundColor: '#FEBE10',
              borderRadius: 3,
              padding: 15,

            }}
            onPress={handleLogin}
          >
            <Text style={{textAlign: "center", color: 'white', fontSize: 16, fontWeight: '500'}}>Login</Text>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate("Register")} style={{marginTop: 20}}>
            <Text style={{color: 'gray', fontSize: 16, textAlign: 'center'}}>Don't have an account? Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
