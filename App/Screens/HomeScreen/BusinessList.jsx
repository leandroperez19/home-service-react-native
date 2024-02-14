import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import { getBusinessList } from "../../Utils/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {
  const [business, setBusiness] = useState();

  const getBussiness = () => {
    getBusinessList().then((resp) => {
      setBusiness(resp?.businessLists);
    });
  };

  useEffect(() => {
    getBussiness();
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Heading text={"Latest Business"} isViewAll />
      <FlatList
        data={business}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{marginRight: 10}}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
