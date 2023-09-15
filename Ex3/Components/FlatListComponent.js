import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CARS, COUNTRIES, GET_USERS_URL } from "../const"; // Importing constants

// Define a functional component named FlatListComponent
const FlatListComponent = (props) => {
  // Define a nested functional component named CarItem
  const CarItem = ({ item, msg }) => {
    return (
      <Text>
        {msg} "{item}"
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {/* Display a title */}
      <Text style={styles.text}>Mine biler - Flatlist</Text>
      {/* Create a FlatList component */}
      <FlatList
        style={{ height: 80 }}
        data={CARS} // Data source for the FlatList
        renderItem={({ item }) => {
          // Render each item using the CarItem component
          return <CarItem item={item} msg={"Oh boy i love"} />;
        }}
        keyExtractor={(item) => item} // Extract unique keys for each item
      />
    </View>
  );
};

export default FlatListComponent; // Export the FlatListComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0ffff", // Background color of the main container
    flex: 1, // Take up all available space
  },
  text: {
    fontSize: 20, // Font size for the title
    textAlign: "center", // Center the text horizontally
    paddingTop: 40, // Add some top padding
  },
});
