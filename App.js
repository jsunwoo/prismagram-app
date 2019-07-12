import React, { useState, useEffect } from "react";
import { AppLoading, Font, Asset } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/icon.png")]);
    } catch (error) {
      console.log(error);
    }
    setLoaded(true);
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  ) : (
    <AppLoading />
  );
}
