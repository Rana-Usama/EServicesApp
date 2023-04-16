import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import Screen from "./../components/Screen";
import MyAppButton from "./../components/common/MyAppButton";
//config
import Colors from "../config/Colors";

function WelcomeScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image style={{ width: RFPercentage(30), height: RFPercentage(33), top: RFPercentage(12) }} source={require("../../assets/Images/tiles.png")} />

      <Text style={{ color: Colors.white, fontSize: RFPercentage(5), fontFamily: "Poppins_600SemiBold", marginTop: RFPercentage(5), alignSelf: "center" }}>E-Services</Text>

      <View style={{ width: "70%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(10) }}>
        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.6), fontFamily: "Poppins_600SemiBold", textAlign: "center" }}>
          Have a problem that you want solved? Don’t worry, lets get started.
        </Text>
      </View>

      {/* Button */}
      <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(12) }}>
        <MyAppButton
          title="Get Started"
          onPress={() => props.navigation.navigate("SignInScreen")}
          padding={RFPercentage(2)}
          backgroundColor={Colors.white}
          borderColor={Colors.white}
          borderWidth={RFPercentage(0.2)}
          color={"#FF9532"}
          bold={false}
          fontSize={RFPercentage(2.2)}
          fontFamily={"Poppins_600SemiBold"}
          borderRadius={RFPercentage(1.6)}
          width={"65%"}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
});

export default WelcomeScreen;
