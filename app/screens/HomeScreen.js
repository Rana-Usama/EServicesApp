import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

//components
import MyAppButton from "./../components/common/MyAppButton";
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";

function HomeScreen(props) {
  const categoriesData = [
    {
      imageSource: require("../../assets/Images/p2.png"),
      title: "Clean",
    },
    {
      imageSource: require("../../assets/Images/p1.png"),
      title: "Clean",
    },
    {
      imageSource: require("../../assets/Images/p2.png"),
      title: "Clean",
    },
    {
      imageSource: require("../../assets/Images/p1.png"),
      title: "Clean",
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
          height: RFPercentage(38),
          backgroundColor: "#EAE8FE",
          justifyContent: "flex-start",
          alignItems: "center",
          borderBottomLeftRadius: RFPercentage(10),
          borderBottomRightRadius: RFPercentage(10),
        }}
      >
        <View style={{ width: "90%", justifyContent: "flex-start", alignItems: "center", marginTop: RFPercentage(8), flexDirection: "row" }}>
          <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
            <Text style={{ color: "#17278D", fontSize: RFPercentage(3), fontWeight: "bold", fontFamily: "Poppins_700Bold" }}>Hello Fatima</Text>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(1.7), marginTop: RFPercentage(0.4), fontFamily: "Poppins_400Regular" }}>Need a Help?</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
            <Image style={{ width: RFPercentage(11), height: RFPercentage(11) }} source={require("../../assets/Images/icon.png")} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: RFPercentage(6),
            borderRadius: RFPercentage(1),
            width: "90%",
            height: RFPercentage(7),
            backgroundColor: Colors.white,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Feather name="search" style={{ fontSize: RFPercentage(2.3), marginLeft: RFPercentage(2) }} color="#FF6610" />
          <TextInput placeholder="Search" placeholderTextColor={"#FF6610"} style={{ left: RFPercentage(1), width: "100%", fontFamily: "Poppins_400Regular" }} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: RFPercentage(2), width: "100%" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categoriesData.map((item, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                style={{
                  left: RFPercentage(2),
                  justifyContent: "center",
                  alignItems: "center",
                  width: RFPercentage(14.5),
                  height: RFPercentage(19),
                  borderRadius: RFPercentage(3),
                  backgroundColor: "#F9F9FC",
                  marginLeft: i !== 0 ? RFPercentage(2) : 0,
                }}
              >
                <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={item.imageSource} />
                <Text style={{ marginTop: RFPercentage(3), color: "#17278D", fontSize: RFPercentage(2) }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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

export default HomeScreen;
