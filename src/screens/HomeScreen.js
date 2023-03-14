import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      {/* <TouchableOpacity onPress={() => console.log("List Pressed")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign: "center",
  },
});

export default HomeScreen;
