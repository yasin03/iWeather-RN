import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const DayDetail = (props) => {
  const { day, icon, maxTemp, minTemp } = props;
  return (
    <View className="flex flex-col justify-between items-center">
      <Text className="text-gray-200">{day}</Text>
      <Image
        source={require("../../assets/weatherIcons/ClearDay.png")}
        className="w-12 h-12"
      />
      <Text className="text-white">{maxTemp}</Text>
      <Text className="text-gray-400">{minTemp}</Text>
    </View>
  );
};

export default DayDetail;
