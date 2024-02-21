import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Heading({ text, isViewAll = false, viewAllFunc }) {
  const [viewAllText, setViewAllText] = useState("View All");
  const viewAllHandler = () => {
    viewAllFunc();
    setViewAllText(viewAllText === "View All" ? "View Less" : "View All");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && (
        <Text onPress={viewAllFunc && viewAllHandler}>{viewAllText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
});
