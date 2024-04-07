import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useCallback,  useState } from "react";
import { Image } from "expo-image";
import fetchCities from "../api/weather";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const navigation = useNavigation();

  const handleLocationChange = useCallback((text) => {
    filterCities(text);
  }, []);

  const filterCities = async (text) => {
    try {
      const cities = await fetchCities(text);
      setFilteredCities(cities);
    } catch (error) {
      console.error("Error filtering cities:", error);
      setFilteredCities([]);
    }
  };

  const handleCityPress = (city) => {
    navigation.navigate("Home", { cityName: city.name });
  };

  return (
    <View className="flex-1 w-full h-full relative p-8">
      <Image
        source={require("../assets/logo-name.png")}
        className=" w-40 h-8 mx-auto mt-12"
      />
      <View className="flex flex-col gap-y-3 justify-between items-center  my-auto p-3">
        <View className="flex flex-col justify-between items-center">
          <Text className="text-white text-xl">
            Welcome to{" "}
            <Text className="text-blueLight animate-spin">TypeWeather</Text>
          </Text>
          <Text className="text-sm text-gray-200">
            Choose a location to see the weather forecast
          </Text>
        </View>
        <View className="w-full  ">
          <TextInput
            placeholder="Search Location"
            placeholderTextColor={"#7F7F98"}
            className="p-3 bg-gray-800  rounded-[8px] text-white"
            onChangeText={handleLocationChange}
            defaultValue="anka"
          />

          <View className="w-full bg-gray-500 rounded-lg">
            <FlatList
              data={filteredCities}
              
              renderItem={({ item,index }) => (
                <TouchableOpacity key={index} onPress={() => handleCityPress(item)}>
                  {loading && (
                    <Image
                      className="animate-spin text-white z-50 w-6 h-6 absolute top-3 right-3 "
                      source={require("../assets/loading.svg")}
                    />
                  )}
                  <Text className="text-gray-100 p-3 border-b-[1px]">
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View className="h-[1px]"></View>}
            />
          </View>
        </View>
      </View>

      <Image
        source={require("../assets/bg.png")}
        className="absolute top-0 -z-50 w-screen h-screen"
      />
    </View>
  );
};

export default SearchScreen;
