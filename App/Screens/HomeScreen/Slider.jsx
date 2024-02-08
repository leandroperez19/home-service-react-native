import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import { getSlider } from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";

export default function Slider() {
  const [slider, setSlider] = useState();

  const getSliders = () => {
    getSlider().then((resp) => {
      setSlider(resp?.sliders);
    });
  };

  useEffect(() => {
    getSliders();
  }, []);

  return (
    <View>
      <Heading text={'Offers For You'}/>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slider}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImg}
            />
            {/* <Text>{item.name}</Text> */}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderImg: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "fill",
  },
});
