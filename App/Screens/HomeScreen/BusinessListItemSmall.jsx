import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function BusinessListItemSmall({business}) {
  return (
    <View>
			<Image source={{uri:business?.images[0]?.url}} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
	image: {
		width: 160,
		height: 100,
		borderRadius: 10
	}
})