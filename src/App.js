import './App.css';
import Forecast from './Components/Forecast';
import Inputs from './Components/Inputs';
import TempAndDetails from './Components/TempAndDetails';
import TimeAndLocation from './Components/TimeAndLocation';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'

import TopButtons from './Components/TopButtons';


function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      
      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
