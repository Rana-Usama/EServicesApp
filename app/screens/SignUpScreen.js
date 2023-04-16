import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

//components
import MyAppButton from "./../components/common/MyAppButton";
import InputField from "../components/common/InputField";

//config
import Colors from "../config/Colors";

function SignUpScreen(props) {
  const [indicator, showIndicator] = useState(false);

  const [inputField, SetInputField] = useState([
    {
      placeholder: "Full Name",
      value: "",
    },
    {
      placeholder: "Phone Number or Email",
      value: "",
    },
    {
      placeholder: "Password",
      value: "",
      secure: true,
    },
  ]);

  const handleChange = (text, i) => {
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  const handleLogin = () => {
    showIndicator(true);
    let tempfeilds = [...inputField];

    if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "") {
      alert("Please fill all the feilds to proceed");
      showIndicator(false);
      return true;
    }

    try {
      // API INTEGRATION WILL COME HERE
    } catch (error) {
      alert("Error");
    }

    showIndicator(false);
  };

  return (
    <View style={styles.screen}>
      {/* Nav */}
      <View style={{ justifyContent: "flex-Start", alignItems: "center", backgroundColor: "#EAE8FE", width: "100%", height: RFPercentage(30) }}>
        <View style={{ marginTop: RFPercentage(10), width: "85%", justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("SignInScreen")} style={{ position: "absolute", left: 0 }}>
            <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.2) }} color="#131B92" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: Colors.white,
            width: "100%",
            height: RFPercentage(8),
            borderTopRightRadius: RFPercentage(4),
            borderTopLeftRadius: RFPercentage(4),
          }}
        />
      </View>

      <View style={{ width: "83%", justifyContent: "flex-start", alignItems: "flex-start", marginTop: RFPercentage(-2) }}>
        <Text style={{ color: Colors.black, fontSize: RFPercentage(3), fontFamily: "Poppins_600SemiBold" }}>Let's Create</Text>
        <Text style={{ color: Colors.black, fontSize: RFPercentage(3), fontFamily: "Poppins_600SemiBold", marginTop: RFPercentage(0.3) }}>Your Account!</Text>
      </View>

      {/* Input field */}
      <View style={{ marginTop: RFPercentage(3), justifyContent: "center", alignItems: "center", width: "100%", alignSelf: "center" }}>
        {inputField.map((item, i) => (
          <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1), alignSelf: "center" }}>
            <InputField
              placeholder={item.placeholder}
              placeholderColor={"#080F18"}
              placeholderAtCenter={false}
              height={RFPercentage(6.8)}
              backgroundColor={null}
              // borderColor={Colors.black}
              secure={item.secure}
              borderRadius={RFPercentage(1.4)}
              color={Colors.black}
              fontSize={RFPercentage(2)}
              icon={item.icon}
              handleFeild={(text) => handleChange(text, i)}
              value={item.value}
              width={"96%"}
            />
          </View>
        ))}
      </View>

      {/* Button */}
      <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(10) }}>
        <MyAppButton
          title="Sign up"
          onPress={() => handleLogin()}
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

      <View style={{ width: "60%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(5) }}>
        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.1), fontFamily: "Poppins_400Regular", textAlign: "center" }}>Already have an account ?</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("SignInScreen")}>
          <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.1), fontFamily: "Poppins_600SemiBold", textAlign: "center" }}>Sign in!</Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default SignUpScreen;
