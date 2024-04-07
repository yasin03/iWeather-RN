import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./router/Router";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
      <StatusBar />
    </NavigationContainer>
  );
}
