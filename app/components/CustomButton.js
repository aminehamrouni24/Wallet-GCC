import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS, SIZES } from "../Utils/theme";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => (props.onPress ? props.onPress() : "")}
    >
      {props.color ? (
        <View
          style={[
            { ...styles.button, backgroundColor: props.color },
            props.btnSm && { height: 40 },
            props.btnRounded && { borderRadius: 30 },
          ]}
        >
          <Text style={{ ...FONTS.h5, color: COLORS.white }}>
            {props.title}
          </Text>
        </View>
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#d79649", "#9b6e39"]}
          style={[
            { ...styles.button },
            props.btnSm && { height: 40 },
            props.btnRounded && { borderRadius: 30 },
          ]}
        >
          <Text style={{ ...FONTS.h5, color: COLORS.white }}>
            {props.title}
          </Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomButton;
