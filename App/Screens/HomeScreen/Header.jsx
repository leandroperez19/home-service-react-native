import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();

  if (!user) return;

  return (
    <View style={styles.container}>
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text style={{ color: Colors.WHITE }}>Welcome,</Text>
            <Text style={{ fontSize: 20, color: Colors.WHITE }}>
              {user?.fullName}
            </Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search" style={styles.textInput} />
        <FontAwesome name="search" size={24} color={Colors.PRIMARY} style={styles.searchBtn}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8
  }
});
