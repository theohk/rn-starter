import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 22 },
    { name: "Friend #3", age: 25 },
    { name: "Friend #4", age: 19 },
    { name: "Friend #5", age: 40 },
    { name: "Friend #6", age: 27 },
    { name: "Friend #7", age: 21 },
    { name: "Friend #8", age: 20 },
    { name: "Friend #9", age: 26 },
  ];

  return (
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} Age:{item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 40,
  },
});

export default ListScreen;
