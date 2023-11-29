import NavBar from "./components/navBar";
import CurrentWeather from "./components/currentWeather";
import DailyForecast from "./components/dailyForecast";
import { useEffect, useState } from "react";
require("dotenv").config();

export default function Home(): JSX.Element {
  const [location, setLocation] = useState<string>("Kansas City");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY || "";
  const API_URI: string = process.env.NEXT_PUBLIC_API_URI || "";

  useEffect(() => {
    const fetchData = async () => {
      const weatherResponse = await fetch(
        `${API_URI}weather?q=${location}&appid=${API_KEY}&units=imperial`
      );
      const forecastResponse = await fetch(
        `${API_URI}forecast?q=${location}&cnt=7&appid=${API_KEY}&units=imperial`
      );

      try {
        const [weatherData, forecastData] = await Promise.all([
          weatherResponse.json(),
          forecastResponse.json(),
        ]);

        setWeatherData(weatherData);
        setForecastData(forecastData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [location]);

  const handleLocationChange = (newLocation: string): void => {
    setLocation(newLocation);
  };

  return (
    <main className="appBackground">
      <NavBar onLocationChange={handleLocationChange} />
      <CurrentWeather weatherData={weatherData} />
      <DailyForecast forecastData={forecastData} />
    </main>
  );
}
