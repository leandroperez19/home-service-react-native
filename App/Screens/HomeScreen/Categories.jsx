import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { getCategories } from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const [categories, setCategories] = useState();
  const [maxCategories, setMaxCategories] = useState(3);
  const navigation = useNavigation();

  const setViewAll = () => setMaxCategories(maxCategories === 3 ? 12 : 3);

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
      <Heading text={"Categories"} isViewAll viewAllFunc={setViewAll}/>
      <FlatList
        data={categories}
        numColumns={4}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({ item, index }) => index <= maxCategories && (
            <TouchableOpacity onPress={() => navigation.push('business-list', {category: item.name})} style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image source={{uri: item?.icon?.url}} style={{width: 30, height: 30}}/>
                </View>
                <Text style={{fontFamily: 'outfit-medium', marginTop: 5}}>{item.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: Colors.LIGH_GRAY,
        padding: 17,
        borderRadius: 99
    }
})
