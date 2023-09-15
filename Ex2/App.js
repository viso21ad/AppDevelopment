import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstComponent from "./components/firstComponent";
import PropsComponent from "./components/PropsComponent";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponet";
import AssetComponent from "./components/AssetComponent";
import FirstImage from "./Pictures/LiveLaughLove.png"

export default function App() {
  return (
    <View style={styles.container}>
      <PropsComponent name={"Jeres navne"} />
      <AssetComponent url={FirstImage}/>
      <ButtonComponent/>   
      <InputComponent/>
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
