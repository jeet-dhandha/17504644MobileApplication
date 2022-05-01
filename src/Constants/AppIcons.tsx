import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DefaultTheme from "./DefaultTheme";

export const SendIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Ionicons name="ios-send" size={size} color={color} />;
export const BookmarkedIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => (
  <MaterialCommunityIcons
    name="bookmark-minus-outline"
    size={size}
    color={color}
  />
);
export const BookmarkIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => (
  <MaterialCommunityIcons name="bookmark-minus" size={size} color={color} />
);
export const HourGlassIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <MaterialIcons name="hourglass-bottom" size={size} color={color} />;
export const MenuIcon = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Ionicons name="menu-outline" size={size} color={color} />;
export const LeftArrow = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Entypo name="chevron-thin-left" size={size} color={color} />;
export const RightLevel = ({
  color = DefaultTheme.colors.accent,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <AntDesign name="caretright" size={size} color={color} />;
