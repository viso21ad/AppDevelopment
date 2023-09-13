import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstComponent from "./components/firstComponent";
import PropsComponent from "./components/PropsComponent";
import ButtonComponent from "./components/ButtonComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <PropsComponent name={"Jeres navne"} />
      <ButtonComponent/>
      <StatusBar style="auto" />
    </View>
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
