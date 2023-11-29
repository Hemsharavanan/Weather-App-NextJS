import Image from "next/image";

function CurrentWeather({ weatherData }): JSX.Element {
  if (!weatherData) {
    return <h1>Loading....</h1>;
  }

  function getCurrentTime(): string {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    // Add leading zero to minutes if less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Construct the time string
    const currentTime = hours + ":" + minutes + " " + ampm;

    return currentTime;
  }

  function metersToMiles(meters: number): number {
    const miles = meters * 0.000621371;
    return Math.round(miles);
  }

  return (
    <div className="flex justify-center sm:flex-row">
      <div className="flex items-center p-4 rounded-md">
        <div className="mr-4">
          <Image src="/Sun.svg" alt="Weather icon" width={150} height={150} />
        </div>
        <div className="text-center">
          <p className="tracking-wider text-xl font-bold uppercase pt-3">
            {weatherData.name}, {weatherData.sys.country}
          </p>
          <p className="text-8xl font-bold">{weatherData.main.temp}°</p>
          <p className="text-4xl font-bold p-2 capitalize">
            {weatherData.weather[0].description}
          </p>
          <p className="text-sm p-3">updated at {getCurrentTime()}</p>
          <p className="text-sm flex space-x-4 pt-4">
            <span>Feels like {weatherData.main.feels_like}</span>
            <span>|</span>
            <span>Wind {weatherData.wind.speed}mph</span>
            <span>|</span>
            <span>Visibility {metersToMiles(weatherData.visibility)}mi</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
