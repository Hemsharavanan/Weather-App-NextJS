function DailyForecast({ forecastData }): JSX.Element {
  const nextWeekData = forecastData?.list.slice(0, 7);

  const getWeatherIcon = (currentDayWeather: string): string => {
    switch (currentDayWeather) {
      case "Clear":
        return "/Sun.svg";
      case "Clouds":
        return "/Blah.svg";
      case "Snow":
        return "/Freezing.svg";
      case "Rain":
        return "/Blah.svg";
      default:
        return "/Sun.svg";
    }
  };

  function getDaySuffix(day) {
    const lastDigit = day % 10;

    if (day == 11 || day == 12 || day == 13) {
      return "th";
    }

    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  if (!forecastData) {
    return <div>Loading..</div>;
  }
  //Clear, Clouds, Snow, Rain
  return (
    <>
      <p className="text-lg font-bold p-4 ml-20">Daily Forecast</p>
      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center space-x-4 p-4 pb-9">
        {nextWeekData?.map((currentDayForecast, index) => {
          let today = new Date(); // Create a new date object for each iteration
          today.setDate(today.getDate() + index); // Modify the date

          // Get the day using Intl.DateTimeFormat
          const day = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
          }).format(today);

          const bgColor = index === 0 ? "border-gray-100" : "border-gray-200";

          return (
            <div
              key={index}
              className={`flex flex-col items-center bg-gray-100 p-4 rounded-2xl border-2 "border-gray-400" ${bgColor}`}
            >
              <p className="text-lg pb-2">
                {day} {today.getDate()}
                {getDaySuffix(today.getDate())}
              </p>
              <img
                src={getWeatherIcon(currentDayForecast.weather[0].main)}
                alt="Weather icon"
                width={120}
                height={120}
              />
              <p className="text-2xl font-bold p-3">
                {currentDayForecast.main.temp}°
              </p>
              <p className="text-lg font-bold capitalize">
                {currentDayForecast.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DailyForecast;
