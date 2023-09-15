// Make a map component that displays a map of the world
// and a marker on the location of the user.
// The map should be centered on the user's location.
// The marker should be draggable.
// The marker should have a popup that displays the user's
// latitude and longitude.


// Path: Ex2/components/MapComponent.js
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapComponent = () => {
    