import { View, Text } from "react-native";
import React from "react";
import AppDimensions from "../Constants/AppDimensions";

const Backdrop = () => {
  return (
    <View
      style={{
        position: "absolute",
        height: AppDimensions.height,
        width: AppDimensions.width,
        backgroundColor: "rgba(0,0,0,0.35)",
      }}
    />
  );
};

export default Backdrop;
