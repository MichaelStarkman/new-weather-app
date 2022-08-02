import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons"

function TempAndDetails() {
  return (
    <div>

        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>Super Sunny!</p>
        </div>
        <div className="flex flex-row items-center justify-between text-white py-3">
            <img 
            src="https://i.imgur.com/2JHPmCK.png" 
            alt="" 
            className="w-20"
            />
            <p className="text-5xl"> 34° </p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center">
                    <UilTemperature  size={18} className="mr-1"/>
                    Real Feel:
                    <span className="font-medium ml-1">34°</span>
                </div>
                <div className="flex font-light text-sm items-center">
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className="font-medium ml-1">69%</span>
                </div>
                <div className="flex font-light text-sm items-center">
                    <UilWind  size={18} className="mr-1"/>
                    Wind Speed:
                    <span className="font-medium ml-1">6-8 MPH</span>
                </div>
            </div>
        </div>
    <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
            Rise: <span className="font-medium ml-1">6:00 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
            Set: <span className="font-medium ml-1">9:65 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
            High: <span className="font-medium ml-1">69°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
            Low: <span className="font-medium ml-1">42°</span>
        </p>
    </div>
    </div>
  )
}

export default TempAndDetails