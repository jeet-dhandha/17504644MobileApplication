import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import AppDimensions from "../../Constants/AppDimensions";
import { HourGlassIcon, LeftArrow } from "../../Constants/AppIcons";
import DefaultTheme from "../../Constants/DefaultTheme";
import Backdrop from "../../Components/Backdrop";
import { black } from "../../Constants/colors";
import BookmarkButton from "../../Components/BookmarkButton";
import Color from "color";

const PlaceInfo = ({ navigation, route }) => {
  const params = route.params;
  return (
    <View>
      <View>
        <Pressable
          style={{
            position: "absolute",
            top: AppDimensions.width / 8,
            left: AppDimensions.width / 15,
            zIndex: 1,
            elevation: 1,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <LeftArrow color={DefaultTheme.colors.accent} size={24} />
        </Pressable>
        <Image
          source={{ uri: params.image }}
          style={{
            width: AppDimensions.width,
            height: AppDimensions.height / 2.5,
          }}
        />
        <View
          style={{
            width: AppDimensions.width,
            height: AppDimensions.height / 2.5,
            backgroundColor: black,
            opacity: 0.25,
            position: "absolute",
          }}
        />
      </View>
      <View
        style={{
          margin: -15,
          height: AppDimensions.height - AppDimensions.height / 2.5 + 15,
          backgroundColor: DefaultTheme.colors.primary,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          paddingHorizontal: 35,
          paddingTop: 30,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: -20,
            right: AppDimensions.width / 8,
            zIndex: 1,
            elevation: 1,
          }}
        >
          <BookmarkButton />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingBottom: AppDimensions.height / 5 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 2.5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HourGlassIcon
                  color={Color(DefaultTheme.colors.text)
                    .alpha(0.75)
                    .rgb()
                    .toString()}
                  size={20}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: Color(DefaultTheme.colors.text)
                      .alpha(0.75)
                      .rgb()
                      .toString(),
                  }}
                >
                  {params.time}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 52,
                fontFamily: "Times New Roman",
                fontWeight: "500",
                paddingVertical: 10,
                color: DefaultTheme.colors.text,
              }}
            >
              {params.name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: DefaultTheme.colors.text,
              }}
            >
              {params.price} / Person
            </Text>
            <View style={{ marginTop: 15 }}>
              <Image
                source={{ uri: params.image }}
                style={{
                  height: AppDimensions.width / 6,
                  width: AppDimensions.width / 6,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: Color(DefaultTheme.colors.text)
                  .alpha(0.75)
                  .rgb()
                  .toString(),
                marginTop: 20,
                textAlign: "justify",
              }}
            >
              {params.description}
            </Text>
          </View>
        </ScrollView>
        <Pressable
          style={{
            width: AppDimensions.width / 1.2,
            padding: 7.5,
            paddingVertical: 15,
            backgroundColor: DefaultTheme.colors.text,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 30,
            alignSelf: "center",
            zIndex: 1,
            elevation: 1,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: DefaultTheme.colors.accent,
            }}
          >
            {"Book the Tour"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PlaceInfo;
