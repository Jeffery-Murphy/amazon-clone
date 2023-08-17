import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigations/StackNavigation";
import { Provider } from "react-redux";
import store from "./store";
import { ModalPortal } from "react-native-modals";
import { UserContext } from "./UserContext";

export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <UserContext>
      <StackNavigation />
      <ModalPortal />
      </UserContext>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
