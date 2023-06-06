import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

//components
import MyAppButton from "./../components/common/MyAppButton";
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";

function OrderDetailScreen(props) {
  const categoriesData = [
    {
      imageSource: require("../../assets/Images/p2.png"),
      title: "Massage",
    },
    {
      imageSource: require("../../assets/Images/p1.png"),
      title: "Clean",
    },
    {
      imageSource: require("../../assets/Images/p3.png"),
      title: "Repair",
    },
    {
      imageSource: require("../../assets/Images/p1.png"),
      title: "Auto",
    },
    {
      imageSource: require("../../assets/Images/p2.png"),
      title: "Clean",
    },
  ];

  return (
    <View style={styles.screen}>
      {/* Nav */}
      <View
        style={{
          width: "100%",
          height: RFPercentage(28),
          backgroundColor: "#EAE8FE",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          borderBottomLeftRadius: RFPercentage(7),
          borderBottomRightRadius: RFPercentage(7),
        }}
      >
        <View style={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(8), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image style={{ width: RFPercentage(2.6), height: RFPercentage(2) }} source={require("../../assets/Images/back.png")} />
          </TouchableOpacity>
          <Text style={{ marginLeft: RFPercentage(1.5), color: "#15228F", fontSize: RFPercentage(2.1), fontWeight: "bold" }}>Order Detail</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{ justifyContent: "center", alignItems: "center", top: RFPercentage(-10), width: "90%", height: RFPercentage(12), backgroundColor: "#F9F9FC", borderRadius: RFPercentage(2.5) }}
      >
        <Image style={{ width: RFPercentage(10), height: RFPercentage(18), position: "absolute", left: 0 }} source={require("../../assets/Images/box.png")} />
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Text style={{ color: "#15228F", fontSize: RFPercentage(2.3), fontWeight: "bold" }}>Lets Fix it</Text>
          <Text style={{ color: "#080F18", fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.5) }}>Electronic Appliance</Text>
          <Text style={{ color: "#080F18", fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.5) }}>Maintenance Services</Text>
        </View>
      </TouchableOpacity>

      {/* Body */}
      <ScrollView style={{ flex: 1, width: "100%", marginTop: RFPercentage(-5) }}>
        <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
          <View style={{ width: "90%", justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2.1), fontWeight: "bold" }}>Select Service Category</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              overflow: "hidden",
              marginTop: RFPercentage(4),
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: RFPercentage(16),
              backgroundColor: "#F9F9FC",
              borderRadius: RFPercentage(1),
            }}
          >
            <Image style={{ width: RFPercentage(12), height: "100%", position: "absolute", left: 0 }} source={require("../../assets/Images/box2.png")} />
            <View style={{ justifyContent: "center", alignItems: "flex-start", width: "50%", left: RFPercentage(3) }}>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(2.3), fontWeight: "bold" }}>Reinstall OS</Text>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.5) }}>including install support software, and clean all virus.</Text>
              <Text style={{ marginTop: RFPercentage(2), color: "#080F18", fontSize: RFPercentage(2), fontWeight: "bold" }}>$5/ Unit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              overflow: "hidden",
              marginTop: RFPercentage(4),
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: RFPercentage(16),
              backgroundColor: "#F9F9FC",
              borderRadius: RFPercentage(1),
            }}
          >
            <Image style={{ width: RFPercentage(12), height: "100%", position: "absolute", left: 0 }} source={require("../../assets/Images/box2.png")} />
            <View style={{ justifyContent: "center", alignItems: "flex-start", width: "50%", left: RFPercentage(3) }}>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(2.3), fontWeight: "bold" }}>Reinstall OS</Text>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.5) }}>including install support software, and clean all virus.</Text>
              <Text style={{ marginTop: RFPercentage(2), color: "#080F18", fontSize: RFPercentage(2), fontWeight: "bold" }}>$5/ Unit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              overflow: "hidden",
              marginTop: RFPercentage(4),
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: RFPercentage(16),
              backgroundColor: "#F9F9FC",
              borderRadius: RFPercentage(1),
            }}
          >
            <Image style={{ width: RFPercentage(12), height: "100%", position: "absolute", left: 0 }} source={require("../../assets/Images/box2.png")} />
            <View style={{ justifyContent: "center", alignItems: "flex-start", width: "50%", left: RFPercentage(3) }}>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(2.3), fontWeight: "bold" }}>Reinstall OS</Text>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.5) }}>including install support software, and clean all virus.</Text>
              <Text style={{ marginTop: RFPercentage(2), color: "#080F18", fontSize: RFPercentage(2), fontWeight: "bold" }}>$5/ Unit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              overflow: "hidden",
              marginTop: RFPercentage(4),
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: RFPercentage(16),
              backgroundColor: "#F9F9FC",
              borderRadius: RFPercentage(1),
            }}
          >
            <Image style={{ width: RFPercentage(12), height: "100%", position: "absolute", left: 0 }} source={require("../../assets/Images/box2.png")} />
            <View style={{ justifyContent: "center", alignItems: "flex-start", width: "50%", left: RFPercentage(3) }}>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(2.3), fontWeight: "bold" }}>Reinstall OS</Text>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.5) }}>including install support software, and clean all virus.</Text>
              <Text style={{ marginTop: RFPercentage(2), color: "#080F18", fontSize: RFPercentage(2), fontWeight: "bold" }}>$5/ Unit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              overflow: "hidden",
              marginTop: RFPercentage(4),
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: RFPercentage(16),
              backgroundColor: "#F9F9FC",
              borderRadius: RFPercentage(1),
            }}
          >
            <Image style={{ width: RFPercentage(12), height: "100%", position: "absolute", left: 0 }} source={require("../../assets/Images/box2.png")} />
            <View style={{ justifyContent: "center", alignItems: "flex-start", width: "50%", left: RFPercentage(3) }}>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(2.3), fontWeight: "bold" }}>Reinstall OS</Text>
              <Text style={{ color: "#080F18", fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.5) }}>including install support software, and clean all virus.</Text>
              <Text style={{ marginTop: RFPercentage(2), color: "#080F18", fontSize: RFPercentage(2), fontWeight: "bold" }}>$5/ Unit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: RFPercentage(14),
          backgroundColor: Colors.white,
          borderTopLeftRadius: RFPercentage(3),
          borderTopRightRadius: RFPercentage(3),
        }}
      >
        <View style={{ width: "86%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
          <View>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2), fontFamily: "Poppins_500Medium" }}>Total Payment</Text>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2), marginTop: RFPercentage(0.5), fontFamily: "Poppins_500Medium" }}>$30</Text>
          </View>

          {/* Button */}
          <View style={{ alignItems: "center", position: "absolute", right: 0 }}>
            <MyAppButton
              title="Order Process"
              padding={RFPercentage(1.7)}
              backgroundColor={Colors.primary}
              borderColor={Colors.primary}
              borderWidth={RFPercentage(0.2)}
              color={Colors.white}
              bold={false}
              fontSize={RFPercentage(2)}
              fontFamily={"Poppins_500Medium"}
              borderRadius={RFPercentage(1.5)}
              width={RFPercentage(20)}
            />
          </View>
        </View>
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

export default OrderDetailScreen;
