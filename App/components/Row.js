import React from "react";
import { View, Text,  StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff"
  },

  content: {
    alignItems: "flex-start",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3a3a3a"
  },
  
  separator: {
    backgroundColor: "#ececec",
    height: 1
  },
  right: {
    alignItems: "flex-end",
    flex: 1
  },
  

});

export const Row = ({  title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
  
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
   
    </View>
    <View style={styles.right}>
      <Ionicons name="ios-arrow-forward" color="#666" size={20} />
    </View>
  </TouchableOpacity>
);

export const Separator = () => <View style={styles.separator} />;
