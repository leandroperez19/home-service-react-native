import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { getCategories } from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function Categories() {
  const [categories, setCategories] = useState();

  const getCategory = () => {
    getCategories().then((resp) => {
      setCategories(resp?.categories);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <View style={{marginTop: 10}}>
      <Heading text={"Categories"} isViewAll/>
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) => index <= 3 && (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image source={{uri: item?.icon?.url}} style={{width: 30, height: 30}}/>
                </View>
                <Text style={{fontFamily: 'outfit-medium', marginTop: 5}}>{item.name}</Text>
            </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: Colors.LIGH_GRAY,
        padding: 17,
        borderRadius: 99
    }
})
