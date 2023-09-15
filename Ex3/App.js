import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ArrayListComponent from "./Components/ArrayListComponent";
import FlatListComponent from "./Components/FlatListComponent";
import FetchListComponent from "./Components/FetchListComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <ArrayListComponent/>
      <FlatListComponent/>
      <FetchListComponent/>
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
    marginTop:40
  },
});
