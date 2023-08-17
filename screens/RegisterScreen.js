import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://10.0.2.2:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
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
            Welcome
          </Text>
          <Text style={{ fontSize: 15, marginTop: 12, color: "#041E42" }}>
            Register new account to continue!
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
            
            <Ionicons name="person-sharp" size={24} color="gray" />
            <TextInput
              value={name}
              onChangeText={(text)=>setName(text)}
              placeholder="Enter name"
              style={{ color: "gray", marginVertical: 5, width: 345 }}
            />
          </View>
        </View>
              <View style={{ marginTop: 20 }}>
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
        <View style={{marginTop: 50}}>
          <Pressable
            style={{
              backgroundColor: '#FEBE10',
              borderRadius: 3,
              padding: 15,

            }}
            onPress={handleRegister}
          >
            <Text style={{textAlign: "center", color: 'white', fontSize: 16, fontWeight: '500'}}>Register</Text>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate("Login")} style={{marginTop: 20}}>
            <Text style={{color: 'gray', fontSize: 16, textAlign: 'center'}}>Already have an account Sign In</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
