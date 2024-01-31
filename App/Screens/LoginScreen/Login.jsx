import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { maybeCompleteAuthSession } from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/Images/login.png")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={styles.mainText}>
          Let's Find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Professional Cleaning and Repair{" "}
          </Text>
          Service
        </Text>
        <Text style={styles.secondaryText}>
          Best App to find services near you wich deliver you a professional
          service
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ fontSize: 17, color: Colors.PRIMARY }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },

  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  mainText: {
    textAlign: "center",
    color: Colors.WHITE,
    fontSize: 27,
  },

  secondaryText: {
    fontSize: 17,
    color: Colors.WHITE,
    textAlign: "center",
    marginTop: 20,
  },

  button: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 99,
    alignItems: "center",
    marginTop: 40,
  },
});
