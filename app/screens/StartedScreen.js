import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import MyAppButton from "./../components/common/MyAppButton";
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";

function StartedScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image style={{ marginTop: RFPercentage(20), width: RFPercentage(25), height: RFPercentage(30) }} source={require("../../assets/Images/boxes.png")} />

      <Text style={{ marginTop: RFPercentage(6), fontSize: RFPercentage(3.2), color: Colors.black, fontFamily: "Poppins_600SemiBold" }}>Welcome Fatima!</Text>

      <View style={{ width: "80%", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center", color: "#6B6F74", fontSize: RFPercentage(2.2), marginTop: RFPercentage(2), lineHeight: RFPercentage(2.9) }}>
          Have some problem today? Don’t worry, now you are part of E Services. Lets us help you.
        </Text>
      </View>

      {/* Button */}
      <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(10) }}>
        <MyAppButton
          title="Home"
          onPress={() => props.navigation.navigate("HomeScreen")}
          padding={RFPercentage(2)}
          backgroundColor={Colors.primary}
          borderColor={Colors.primary}
          borderWidth={RFPercentage(0.2)}
          color={Colors.white}
          bold={false}
          fontSize={RFPercentage(2)}
          fontFamily={"Poppins_500Medium"}
          borderRadius={RFPercentage(1.6)}
          width={"50%"}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default StartedScreen;
