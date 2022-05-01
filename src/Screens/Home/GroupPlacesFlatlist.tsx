import Color from "color";

import React, { useState } from "react";
import { Image, Pressable, View, Text } from "react-native";
import BookmarkButton from "../../Components/BookmarkButton";
import AppDimensions from "../../Constants/AppDimensions";
import {
  BookmarkedIcon,
  BookmarkIcon,
  HourGlassIcon,
} from "../../Constants/AppIcons";
import DefaultTheme from "../../Constants/DefaultTheme";

const GroupPlacesFlatList = ({ navigation }) => {
  const GroupPlacesItem = ({ index, item }: { index: number; item: any }) => {
    return (
      <Pressable
        key={"groupTours" + index.toString()}
        style={{
          padding: AppDimensions.width / 12,
          paddingBottom: AppDimensions.width / 50,
        }}
        onPress={() => {
          navigation.navigate("PlaceInfo", item);
        }}
      >
        <View>
          <View
            style={{
              position: "absolute",
              top: -20,
              left: -20,
              zIndex: 1,
              elevation: 1,
            }}
          >
            <BookmarkButton />
          </View>
          <Image
            source={{ uri: item.image }}
            style={{
              height: AppDimensions.width / 1.9,
              width: AppDimensions.width / 1.9,
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Times New Roman",
              color: DefaultTheme.colors.text,
              marginTop: 7.5,
              fontWeight: "500",
            }}
          >
            {item.name}
          </Text>
        </View>
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
              size={16}
            />
            <Text
              style={{
                fontSize: 13,
                color: Color(DefaultTheme.colors.text)
                  .alpha(0.75)
                  .rgb()
                  .toString(),
              }}
            >
              {item.time}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: Color(DefaultTheme.colors.text)
                .alpha(0.75)
                .rgb()
                .toString(),
            }}
          >
            {item.price} / Person
          </Text>
        </View>
      </Pressable>
    );
  };
  const GroupTours = [
    {
      name: "Chadar Trek",
      time: "14 hours",
      price: "$60",
      image:
        "https://static-blog.treebo.com/wp-content/uploads/2018/06/Chadar-Trek-on-frozen-Zanskar.jpg",
      description:
        "One of the best and most thrilling experiences that Ladakh has on offer is the Chadar Trek. The trek route is over a 100 kilometres long and takes many days. It’s a great way to bond with your friends over a shared love of adventure. \n\nThis is a once in a lifetime experience, and what better way to experience it than with people you love.",
    },
    {
      name: "Pangong Lake",
      time: "6 hours",
      price: "$100",
      image:
        "https://static-blog.treebo.com/wp-content/uploads/2018/03/Pangong-Lake.jpg",
      description:
        "Pangong Lake, situated at a height of 4350 metres in the Himalayas, is one of the biggest tourist attractions in Ladakh. This lake is famous for its beauty and allure – it keeps changing colours. \n\nThis spot is a favourite for budding photographers and the backdrop makes for fantastic group pictures with your best buddies. Don’t visit during the winter as the lake will be frozen. You and your friends can also enjoy bird watching as several species of migratory birds visit this lake.",
    },
    {
      name: "Gokarna",
      time: "8 hours",
      price: "$80",
      image:
        "https://static-blog.treebo.com/wp-content/uploads/2018/06/Gokarna-village-Karnataka.jpg",
      description:
        "Gokarna, also known as ‘mini-goa’, has some of the best beaches, often less crowded when compared to Goa. It is well known for its sprawling, gorgeous beaches, with crystal clear waters, swaying coconut trees and pristine sands. \n\nSome of the famous beaches that you can visit here with your buddies are Om Beach, Gokarna Beach and Kudle Beach.",
    },
    {
      name: "Hampi",
      time: "5 hours",
      price: "$40",
      image:
        "https://static-blog.treebo.com/wp-content/uploads/2018/07/Hampi-1.jpg",
      description:
        "Hampi is a temple town located amidst the ruins of Vijayanagara, Karnataka. This collection of ancient Hindu temples sums up the rich cultural and religious heritage of the region. \n\nHampi is a treat to explore with near and dear ones, visiting the temples, ancient ruins and enjoying the hippie culture made popular by the visitors from around the world who visit this laid back holiday spot.",
    },
    {
      name: "Pondicherry",
      time: "15 hours",
      price: "$130",
      image:
        "https://static-blog.treebo.com/wp-content/uploads/2018/06/Webp.net-compress-image-5.jpg",
      description:
        "Pondicherry, fondly referred to as ‘Pondy’, has a lot to offer groups of friends. Explore the beautiful town filled with French influences in architecture and food. You get to see awesome colonial buildings, churches, temples, and statues. \n\nThere are also amazing beaches here. Pondy is famous for its delicious food, especially authentic French cuisine. However, you can also sample the Indian, Italian, Mexican, Thai and Chinese fare, too.",
    },
  ];
  return GroupTours.map((item, index) => {
    return <GroupPlacesItem index={index} item={item} />;
  });
};

export default GroupPlacesFlatList;
