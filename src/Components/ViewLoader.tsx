import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import AppDimensions from "../Constants/AppDimensions";
import DefaultTheme from "../Constants/DefaultTheme";

const ViewLoader = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <View
      style={{
        position: "absolute",
        height: AppDimensions.height,
        width: AppDimensions.width,
        backgroundColor: DefaultTheme.colors.accent,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        elevation: 1,
      }}
    >
      <ActivityIndicator
        animating={true}
        color={DefaultTheme.colors.text}
        size="large"
        style={{ zIndex: 1, elevation: 1 }}
      />
    </View>
  ) : null;
};

export default ViewLoader;
