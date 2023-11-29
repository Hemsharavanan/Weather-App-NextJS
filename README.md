# Weather App

This Weather App is a web application built with Next.js that provides weather information based on location using the OpenWeather API.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo Video](#demo-video)

## Overview

This application fetches weather data based on user input for a specific location and displays the current weather conditions, along with a daily forecast for the next week.

## Features

- **Location-based Weather:** Enter a city name to get the current weather and the weekly forecast.
- **Current Weather:** Displays current weather conditions including temperature, description, feels-like temperature, wind speed, and visibility.
- **Daily Forecast:** Shows the forecast for the next 7 days with temperature and weather description.

## Technologies Used

- Next.js: A React framework for building web applications.
- React: For building UI components.
- Tailwind CSS: For styling
- OpenWeather API: Provides weather data used in the application.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Hemsharavanan/Weather-App-NextJS.git
```

2. Install dependencies:
   cd weather-app
   npm install

3. Create a `.env` file in the root directory:

```bash
   NEXT_PUBLIC_API_KEY=your_openweather_api_key
   NEXT_PUBLIC_API_URI=required_openweather_api_endpoint
```

Replace your_openweather_api_key with your OpenWeather API key.
Replace required_openweather_api_endpoint with the specific API which you want to utilize.

4. Run the application:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

Enter the city name in the search bar to get weather information for that location.
View the current weather details and the daily forecast.

## Screenshots

![Screenshot 1](/public/Demo/Weather-App-Screenshot1.png)
![Screenshot 2](/public/Demo/Weather-App-Screenshot2.png)
![Screenshot 3](/public/Demo/Weather-App-Screenshot3.png)

<!-- Add more screenshots as needed -->

## Demo Video

[Watch Demo Video](/public/Demo/Weather-App-Demo-Video.mp4)
