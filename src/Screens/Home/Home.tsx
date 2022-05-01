import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AppDimensions from "../../Constants/AppDimensions";
import DefaultTheme from "../../Constants/DefaultTheme";
import { ScrollView } from "react-native-gesture-handler";
import ViewLoader from "../../Components/ViewLoader";
import { MenuIcon, RightLevel } from "../../Constants/AppIcons";
import GroupPlacesFlatList from "./GroupPlacesFlatlist";

const Home = ({ navigation }) => {
  let mainRef = React.useRef();
  const Profile = () => {
    return (
      <Pressable
        style={{ position: "absolute", zIndex: 1, right: 20, top: 50 }}
      >
        <Image
          source={require("../../assets/images/profile.jpg")}
          style={{
            height: 45,
            width: 45,
            borderRadius: DefaultTheme.roundness.round,
          }}
        />
        <View
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            backgroundColor: DefaultTheme.colors.accent,
            height: 12.5,
            width: 12.5,
            borderWidth: 2,
            borderColor: DefaultTheme.colors.primaryLight,
            borderRadius: DefaultTheme.roundness.round,
          }}
        />
      </Pressable>
    );
  };
  const [thisReadyList, setReadyList] = useState<any>([]);
  const [currentScreen, setCurrentScreen] = useState<any>("Group Tours");
  const HorizontalFlatlist = () => {
    let readyList = React.createRef();
    const [indexRefList, setIndexRef] = useState<any>([]);
    const horizontalList = [
      "Places",
      "Accomodation",
      "Group Tours",
      "Individual Tours",
      "Activities",
      "Foods",
      "Notes",
    ];

    useEffect(() => {
      if (indexRefList.length == 0) {
        setIndexRef(
          horizontalList.map((item, index) => {
            return {
              index: index,
              text: item,
            };
          })
        );
      }
    }, []);

    return thisReadyList.length === 0
      ? indexRefList.map((item, index) => (
          <Text
            onTextLayout={({ nativeEvent: { lines } }) => {
              let list = [
                ...((readyList.current ?? []).length === 0
                  ? indexRefList
                  : readyList.current),
              ];

              list[index] = {
                ...list[index],
                style: {
                  height: lines[0].width,
                  width: lines[0].width,
                },
              };
              if (
                ((readyList.current ?? []).length === 0
                  ? indexRefList
                  : readyList.current
                ).filter((val) => val.style === undefined).length
              ) {
                readyList.current = list;
                if (
                  list.filter((val) => val.style === undefined).length === 0
                ) {
                  setReadyList(list);
                }
              }
            }}
            key={"horizontalList" + item.index.toString()}
            style={{ flexWrap: "wrap" }}
          >
            {item.text}
          </Text>
        ))
      : thisReadyList.map((item) => (
          <Pressable
            onPress={() => {
              setCurrentScreen(item.text);
            }}
            key={"horizontalListReady" + item.index.toString()}
          >
            {currentScreen === item.text ? (
              <View
                style={{
                  position: "absolute",
                  top: item.style.width - 10,
                  left: 15,
                }}
              >
                <RightLevel color={DefaultTheme.colors.accent} />
              </View>
            ) : null}
            <Text
              style={
                item.style
                  ? {
                      ...item.style,
                      transform: [
                        { rotate: "-90deg" },
                        { translateY: item.style.width / 2 },
                      ],
                      alignSelf: "center",
                      marginVertical: item.style.width / 2,
                      color: DefaultTheme.colors.accent,
                    }
                  : {}
              }
            >
              {item.text}
            </Text>
          </Pressable>
        ));
  };

  return (
    <View
      ref={mainRef}
      style={{
        width: AppDimensions.width,
        height: AppDimensions.height,
        backgroundColor: DefaultTheme.colors.accent,
        flexDirection: "row",
      }}
    >
      <ViewLoader isLoading={thisReadyList.length === 0} />
      <View
        style={{
          backgroundColor: DefaultTheme.colors.text,
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            position: "absolute",
            right: AppDimensions.width / 3.5 / 2 - 20,
            top: 50,
          }}
        >
          <View style={{}}>
            <MenuIcon color={DefaultTheme.colors.accent} size={30} />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginLeft: -20, width: AppDimensions.width / 3.5 }}
        >
          <View
            style={{ flexWrap: "wrap", paddingVertical: 50, paddingTop: 90 }}
          >
            <HorizontalFlatlist />
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: DefaultTheme.colors.primary,
          flex: 1,
          alignItems: "center",
        }}
      >
        <Profile />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: AppDimensions.width - AppDimensions.width / 3.5,
            alignSelf: "center",
          }}
        >
          <View
            style={{ flexWrap: "wrap", paddingVertical: 50, paddingTop: 80 }}
          >
            <GroupPlacesFlatList navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
