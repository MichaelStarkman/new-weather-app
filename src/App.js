import { useState, useEffect } from 'react';
import './App.css';
import Forecast from './Components/Forecast';
import Inputs from './Components/Inputs';
import TempAndDetails from './Components/TempAndDetails';
import TimeAndLocation from './Components/TimeAndLocation';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './Components/TopButtons';
import getFormattedWeatherData from './services/weatherService';


function App() {

  const [query, setQuery] = useState({q: "denver" })
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then(
        (data) => {
          setWeather(data);
        });
    };

    fetchWeather();
  },[query, units])

  

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      
    {weather && (
      <div>
        <TimeAndLocation weather={weather}/>
        <TempAndDetails weather={weather}/>

        <Forecast title="hourly forecast" items={weather.hourly}/>
        <Forecast title="daily forecast" items={weather.daily}/>
      </div>
    )}
    </div>
  );
}

export default App;
