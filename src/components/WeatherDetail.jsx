import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const WeatherDetail = (props) => {
  const { icon, title, value } = props;
  const img = "../../assets/icons/drop.png";
  return (
    <View className=" flex-row justify-between items-center p-3 border-b-[1px] border-gray-700">
      <View className="flex flex-row  items-center gap-2 ">
        <Image source={require(img)} className="w-6 h-6" />
        <Text className="text-gray-200 text-sm">{title}</Text>
      </View>
      <Text className="text-white">{value}</Text>
    </View>
  );
};

export default WeatherDetail;
