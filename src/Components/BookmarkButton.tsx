import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import DefaultTheme from "../Constants/DefaultTheme";
import { BookmarkedIcon, BookmarkIcon } from "../Constants/AppIcons";

const BookmarkButton = () => {
  const [isBookmarked, setBookmarked] = useState(false);
  return (
    <Pressable
      style={{
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: DefaultTheme.colors.text,
        borderRadius: DefaultTheme.roundness.round,
      }}
      onPress={() => {
        setBookmarked(!isBookmarked);
      }}
    >
      {isBookmarked ? (
        <BookmarkIcon size={25} color={DefaultTheme.colors.accent} />
      ) : (
        <BookmarkedIcon size={25} color={DefaultTheme.colors.accent} />
      )}
    </Pressable>
  );
};

export default BookmarkButton;
