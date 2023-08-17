import { StyleSheet, Text, View,SafeAreaView, TextInput } from "react-native";
import React ,{useEffect} from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const OrderScreen = () => {
    const navigation = useNavigation()
    // useEffect(() => {
    //     setTimeout(() => {
    //       navigation.replace("Main");
    //     }, 1300);
    //   }, []);
  return (
    <View
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: Platform.OS === "android" ? 20 : 0,
        }}
      >
    <View
          style={{
            backgroundColor: "#D0D0D0",
            marginHorizontal: 8,
            paddingHorizontal: 6,
            paddingVertical: 6,
            borderRadius: 4,
            marginVertical: 8,
            gap: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="search" size={24} color="black" />
          <TextInput placeholder="Search Amazon.in" />
        </View>
      <LottieView
        source={require("../assets/data/thumbs.json")}
        // ref={animation}
        style={{
          height: 260,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your Order Has been Recieved
      </Text>
      <LottieView
        source={require("../assets/data/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});