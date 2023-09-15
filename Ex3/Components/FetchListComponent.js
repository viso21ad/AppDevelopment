import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { COUNTRIES, GET_USERS_URL } from "../const";

const FetchListComponent = () => {
  // Define state variables using the useState hook
  const [users, setUsers] = useState({}); // State to store fetched users
  const [msg, setMsg] = useState(""); // State for error messages
  const [amount, setAmount] = useState(2); // State to control the number of users to fetch

  // useEffect is used to load users when the component is mounted or when 'amount' changes
  useEffect(() => {
    loadUsers();
  }, [amount]);

  // Function to fetch users from an API
  const loadUsers = async () => {
    try {
      // Fetch data from the specified URL, appending 'amount' to the URL
      const response = await fetch(GET_USERS_URL + amount);

      // Parse the response as JSON
      const json = await response.json();

      // Update the 'users' state with the fetched data
      setUsers(json.results);
    } catch (error) {
      // If there's an error during the fetch, set the error message in 'msg' state
      setMsg(error);
    }
  };

  return (
    // Conditional rendering based on the length of 'users' array
    users.length > 0 ? (
      <View style={styles.container}>
        {/* Title with styling */}
        <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 40 }}>
          3 Brugere i liste: {users.length} - Fetch Object list
        </Text>
        {/* TextInput to allow the user to set the 'amount' state */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            width: "70%",
            padding: 4,
          }}
          onChangeText={setAmount} // Update 'amount' when the text input changes
          value={amount.toString()} // Display the current 'amount' value
          placeholder={`default antal: 1`}
          keyboardType={"numeric"}
        />
        <ScrollView bounces={true} style={{ height: 350, width: "60%" }}>
          {/* Mapping over the 'users' array to render user data */}
          {users.map((user, index) => {
            return (
              <View key={index} style={{ alignItems: "center", padding: 10 }}>
                <Text>
                  Navn: {user.name.first} {user.name.last}
                </Text>
                <Image
                  source={{ uri: user.picture.medium }}
                  style={{ width: 50, height: 50 }}
                />
              </View>
            );
          })}
        </ScrollView>
        {/* Display error message if 'msg' is not empty */}
        <Text>{msg ? msg : ""}</Text>
      </View>
    ) : (
      <View>
        <Text style={{ textAlign: "center" }}> Loading... </Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default FetchListComponent;
