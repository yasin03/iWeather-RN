import axios from "axios";
import { OPENWEATHER_API_KEY, WEATHERAPI_API_KEY } from "../src/utils/settings";
const key = OPENWEATHER_API_KEY;
const key2 = WEATHERAPI_API_KEY;

export const fetchForecast = async (location) => {
  try {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${key2}&q=${location}&days=7&aqi=yes&alerts=no`
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching forecast data : ", error);
    return null;
  }
};

const fetchCities = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=${key2}&q=${searchTerm}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cities :", error);
    return [];
  }
};

export default fetchCities;
