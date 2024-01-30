import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login() {
  return (
    <View style={{alignItems: 'center'}}>
        <Image source={require('../../../assets/Images/login.png')} style={styles.loginImage}/>
        <View style={styles.subContainer}>
            <Text style={styles.mainText}>
                Let's Find
                <Text style={{fontWeight: 'bold'}}> Professional Cleaning and Repair </Text>
                Service 
            </Text>
            <Text style={styles.secondaryText}>Best App to find services near you wich deliver you a professional service</Text>
            <View style={styles.button}>
                <Text style={{fontSize: 17, color: Colors.PRIMARY}}>Get Started</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 15
    },

    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },

    mainText: {
        textAlign: 'center',
        color: Colors.WHITE,
        fontSize: 27
    },

    secondaryText: {
        fontSize: 17,
        color: Colors.WHITE,
        textAlign: 'center',
        marginTop: 20
    },

    button: {
        backgroundColor: Colors.WHITE,
        padding: 15,
        borderRadius: 99,
        alignItems: 'center',
        marginTop: 40
    }
})