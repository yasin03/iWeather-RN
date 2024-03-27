import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import WeatherDetail from "./components/WeatherDetail";
import DayDetail from "./components/DayDetail";

const Home = () => {
  return (
    <View className="flex-1 flex-col p-6 justify-center items-center gap-y-3 ">
      <View className=" basis-2/5 w-full rounded-2xl">
        <Image
          source={require("../assets/weather/StormNight.png")}
          className="w-full h-full rounded-2xl"
        />
      </View>
      <View className="bg-gray-800 w-full rounded-2xl p-3 basis-2/5 ">
        <View className="flex-1 flex-col justify-between">
          <WeatherDetail
            icon="drop"
            title="Thermal Sensation"
            value="26&#186;C"
          />
          <WeatherDetail icon="drop" title="Probability of rain" value="0%" />
          <WeatherDetail icon="drop" title="Wind speed" value="8 km/h" />
          <WeatherDetail icon="drop" title="Air humidity" value="40%" />
          <WeatherDetail icon="drop" title="UV Index" value="5" />
        </View>
      </View>
      <View className="bg-gray-800 basis-1/5 w-full p-3 rounded-2xl">
        <View className="flex flex-row justify-between items-center h-full">
          <DayDetail day="Mon" icon="drop" minTemp="28" maxTemp="33" />
          <DayDetail day="Tue" icon="drop" minTemp="28" maxTemp="33" />
          <DayDetail day="Wed" icon="drop" minTemp="28" maxTemp="33" />
          <DayDetail day="Thu" icon="drop" minTemp="28" maxTemp="33" />
          <DayDetail day="Sun" icon="drop" minTemp="28" maxTemp="33" />
        </View>
      </View>
      <StatusBar />
    </View>
  );
};

export default Home;
