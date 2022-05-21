import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faReceipt,
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const bottomData = [
  {
    icon: faHome,
    text: "Home",
  },
  {
    icon: faSearch,
    text: "Browser",
  },
  {
    icon: faShoppingBag,
    text: "Grocery",
  },
  {
    icon: faReceipt,
    text: "Order",
  },
  {
    icon: faUser,
    text: "Account",
  },
];

export default function BottomTab() {
  return (
    <View style={styles.bottomTab}>
      {bottomData.map((data, index) => (
        <TouchableOpacity key={index}>
          <FontAwesomeIcon style={styles.icon} size={25} icon={data.icon} />
          <Text style={styles.text}>{data.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginHorizontal: 30,
  },
  icon: {
      color:"teal",
    marginBottom: 3,
    alignSelf: "center",
  },
  text:{
      color:"#000"
  }
});
