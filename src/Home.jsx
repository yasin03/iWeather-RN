import { View, Text, Image as RNImage } from "react-native";
import React, { useEffect, useState } from "react";
import WeatherDetail from "./components/WeatherDetail";
import DayDetail from "./components/DayDetail";
import { getData, setData } from "./utils/asyncStorage";
import { fetchForecast } from "../api/weather";
import { epochToLocalDateTime, getDayOfWeek } from "./utils/date";

const Home = ({ route }) => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");

  const cityName = route.params.cityName;

  function extractIconName(url) {
    const parts = url.split("/");
    const lastIndex = parts.length - 1;
    const iconName = `${parts[lastIndex - 1]}/${parts[lastIndex]}`;
    return iconName;
  }

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetchForecast(cityName);
      console.log(res);
      setForecast(res.forecast.forecastday);
      setWeather(res);
      setData("weather", JSON.stringify(res));
    } catch (error) {
      Alert.alert("Hata", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    setImg(extractIconName(weather?.current?.condition?.icon));
  }, [cityName]);
  console.log(img);
  return (
    <View className="relative flex-1 flex-col p-6 justify-center items-center gap-y-3 ">
      <View className="relative basis-2/5 w-full  rounded-2xl">
        <View className="flex flex-col justify-between w-full h-full p-3">
          <View>
            <Text className="text-white text-lg font-semibold">
              {weather?.location?.name}
            </Text>
            <Text className="text-white">
              {epochToLocalDateTime(weather?.location?.localtime_epoch)}
            </Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <View className="">
              <Text className="text-white text-[48px] font-semibold">
                {weather?.current?.temp_c}ºC
              </Text>
              <Text className="text-white text-lg font-semibold">
                {forecast[0]?.day?.mintemp_c}ºc / {forecast[0]?.day?.maxtemp_c}
                ºc
              </Text>
              <Text className="text-white">
                {weather?.current?.condition?.text}
              </Text>
            </View>
            <RNImage
              source={{ uri: weather?.current?.condition?.icon }}
              style={{ width: 150, height: 150 }}
            />
          </View>
        </View>

        <RNImage
          source={require("../assets/weather/StormNight.png")}
          className="absolute -z-50 w-full h-full rounded-2xl"
        />
      </View>
      <View className="bg-gray-800 w-full rounded-2xl p-3 basis-2/5 ">
        <View className="flex-1 flex-col justify-between">
          <WeatherDetail
            icon="thermometer"
            title="Thermal Sensation"
            value="26&#186;C"
          />
          <WeatherDetail
            icon="drop"
            title="Probability of rain"
            value={weather?.current?.precip_mm + "%"}
          />
          <WeatherDetail
            icon="drop"
            title="Wind speed"
            value={weather?.current?.wind_kph + " km/h"}
          />
          <WeatherDetail
            icon="drop"
            title="Air humidity"
            value={weather?.current?.humidity + "%"}
          />
          <WeatherDetail
            icon="drop"
            title="UV Index"
            value={weather?.current?.uv}
          />
        </View>
      </View>
      <View className="bg-gray-800 basis-1/5 w-full p-3 rounded-2xl">
        <View className="flex flex-row justify-between items-center h-full">
          {forecast?.map((day, index) => (
            <DayDetail
              key={index}
              day={getDayOfWeek(day?.date)}
              icon={img}
              minTemp={day?.day?.mintemp_c}
              maxTemp={day?.day?.maxtemp_c}
            />
          ))}
          {/* <DayDetail day="Mon" icon="drop" minTemp="28" maxTemp="33" />
          <DayDetail day="Tue" icon="drop" minTemp="28" maxTemp="33" />
          <DayDetail day="Wed" icon="drop" minTemp="28" maxTemp="33" />
          <DayDetail day="Thu" icon="drop" minTemp="28" maxTemp="33" />
          <DayDetail day="Sun" icon="drop" minTemp="28" maxTemp="33" /> */}
        </View>
      </View>
      <RNImage
        source={require("../assets/bg.png")}
        className="absolute top-0 -z-50 w-screen h-screen"
      />
    </View>
  );
};

export default Home;
