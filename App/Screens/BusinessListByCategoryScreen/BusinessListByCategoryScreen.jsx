import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { getBusinessListByCategory } from "../../Utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";
import Colors from "../../Utils/Colors";

export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [businesses, setBusinesses] = useState();

  useEffect(() => {
    param && getBusinessByCategory();
  }, []);

  const getBusinessByCategory = () => {
    getBusinessListByCategory(param.category).then((resp) => {
      setBusinesses(resp.businessLists);
      console.log(resp.businessLists);
    });
  };

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {param.category}
        </Text>
      </View>
      {businesses?.length > 0 ? (
        <FlatList
          style={{ marginTop: 15 }}
          data={businesses}
          renderItem={({ item, index }) => <BusinessListItem business={item} />}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: Colors.GRAY,
            fontSize: 20,
            textAlign: "center",
            marginTop: "50%",
          }}
        >
          Sorry, no business were found :c
        </Text>
      )}
    </View>
  );
}
