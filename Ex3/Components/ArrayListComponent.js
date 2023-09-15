import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { CARS, COUNTRIES, GET_USERS_URL } from "../const"; // Importing constants

const ArrayListComponent = (props) => {
  return (
    <View style={styles.container}>
      {/* A ScrollView container */}
      <ScrollView style={styles.scrollView}>
        {/* Header text */}
        <Text style={styles.headertext}>Dette er min kontainer</Text>
        {/* Mapping over the COUNTRIES array and displaying each country */}
        {COUNTRIES.map((country, key) => {
          return <Text key={key}>Oh boy i love "{country}"</Text>;
        })}
      </ScrollView>
    </View>
  );
};

export default ArrayListComponent; // Exporting the component

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b0e0e6", // Background color of the main container
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    flex: 1, // Take up all available space
  },
  headertext: {
    fontSize: 24, // Font size for the header text
    fontWeight: "bold", // Bold font weight for the header text
  },
  scrollView: {
    marginHorizontal: 20, // Horizontal margin around the ScrollView
  },
});