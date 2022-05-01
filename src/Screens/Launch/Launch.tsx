import { View, Image, Text } from "react-native";
import React from "react";
import AppDimensions from "../../Constants/AppDimensions";
import Backdrop from "../../Components/Backdrop";
import { size } from "lodash";
import DefaultTheme from "../../Constants/DefaultTheme";
import { SendIcon } from "../../Constants/AppIcons";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  NavigationHelpers,
  StackActionHelpers,
} from "@react-navigation/native";
import {
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";

const LotusIcon = ({ size }: { size: number }) => (
  <View
    style={{ position: "absolute", zIndex: 1, elevation: 1, top: 60, left: 30 }}
  >
    <Image
      source={require("../../assets/images/lotus.png")}
      style={{
        height: size,
        width: size,
        tintColor: DefaultTheme.colors.surface,
      }}
      resizeMode={"cover"}
    />
  </View>
);
const ExploreIcon = ({
  navigation,
}: {
  navigation: StackNavigationHelpers<any>;
}) => {
  const pressed = useSharedValue(false);
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
    onCancel: (event, ctx) => {
      pressed.value = false;
    },
    onFail: (event, ctx) => {
      pressed.value = false;
    },
    onFinish: (event, ctx) => {
      pressed.value = false;
    },
  });
  const uas = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(pressed.value ? 1.75 : 1) }],
      opacity: withSpring(pressed.value ? 0.3 : 1),
    };
  });
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 1,
        elevation: 1,
        bottom: 60,
        left: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TapGestureHandler
        onGestureEvent={eventHandler}
        onActivated={() => {
          navigation.replace("Home");
        }}
      >
        <Animated.View
          style={{
            borderRadius: DefaultTheme.roundness.round,
            backgroundColor: DefaultTheme.colors.accent,
            padding: DefaultTheme.padding.extra_large,
            height: 55,
            width: 55,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated.View
            style={[
              {
                height: 55,
                width: 55,
                position: "absolute",
                borderWidth: 1,
                borderColor: DefaultTheme.colors.accent,
                borderRadius: DefaultTheme.roundness.round,
              },
              uas,
            ]}
          />
          <View style={{ marginRight: -3 }}>
            <SendIcon color={DefaultTheme.colors.text} size={24} />
          </View>
        </Animated.View>
      </TapGestureHandler>

      <Text
        style={{
          fontSize: 18,
          color: DefaultTheme.colors.accent,
          paddingLeft: DefaultTheme.padding.extra_large,
        }}
      >
        Explore Now
      </Text>
    </View>
  );
};
const Launch = (props: { navigation: StackNavigationHelpers<any> }) => {
  return (
    <View style={{ width: AppDimensions.width, height: AppDimensions.height }}>
      <LotusIcon size={AppDimensions.width / 8} />
      <Image
        source={require("../../assets/images/launch.jpg")}
        style={{ width: "100%", height: AppDimensions.height }}
        resizeMode={"cover"}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          elevation: 2,
          top: AppDimensions.height / 2.5,
          paddingLeft: 30,
        }}
      >
        <Text
          style={{
            fontSize: 54,
            fontFamily: "Times New Roman",
            color: DefaultTheme.colors.accent,
            marginTop: 7.5,
            fontWeight: "500",
          }}
        >
          {"Travelling"}
        </Text>
        <Text
          style={{
            fontSize: 54,
            fontFamily: "Times New Roman",
            color: DefaultTheme.colors.accent,
            marginTop: 7.5,
            fontWeight: "500",
          }}
        >
          {"Guide"}
        </Text>
      </View>
      <ExploreIcon navigation={props.navigation} />
      <Backdrop />
    </View>
  );
};

export default Launch;
