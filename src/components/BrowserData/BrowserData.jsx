import React, { useState } from 'react';
//Importing the Sidebar component from the components folder.
import { Sidebar } from "../Sidebar/Sidebar";

const BrowserData = () => {
      const[eventData, setEventData] = useState({})
      window.addEventListener("message", function(event) {
            if (event.source == window &&
                event.data.direction &&
                event.data.direction == "from-content-script") {
              // alert("Page script received message: \"" + event.data.message + "\"");
            }
            console.log(event.data.message)
            setEventData(event.data.message)
          });
  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
        <div className="w-[16.2vw]">
           {/*Calling the Sidebar Component*/}
          <Sidebar />
          {/*Creating the Classname as of the required */}
        </div>
        <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
           <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Data</h1>
        </div>
        <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
        <h1 className='font-medium text-4xl p-6'>Browser History</h1>
        <div className="bg-white ml-[8vw] h-[16vh] w-[64vw] text-center rounded-2xl">           
              <p className='text-[3.4vh] pt-5 font-semibold'>Browser Data Policy</p>
              <p className='text-[2.7vh] pt-[1vh]'>We collect data only for analysing with user permission. The data is not directly shared with third parties. </p>   
        </div>
        <div className="bg-white mt-6 ml-[8vw] h-[46vh] w-[64vw] rounded-2xl">              
              <p className='pt-9 text-3xl font-semibold ml-[1vw] text-center'>Data Collected</p>
              <div className=' overflow-auto h-[34.7vh] space-y-[1vh] mt-[2vh]'>
        <div className='flex flex-row'>
              <p className='px-[5vw] text-[2.65vh] flex flex-row'><span>{Object.keys(eventData).map((item,i) => (<p key={i}>You have spent <span>{Math.floor((eventData[item].time_on_site)/1000)}</span> seconds on {item.slice(0,25)} webpage</p>))}</span><span className='flex flex-col'>{Object.keys(eventData).map(() => (<span className='px-24 text-red-500 text-2xl'>X</span>))}</span></p>
        </div>
      </div>
        </div>
      </div>   
    </div>
  )
}

export default BrowserData
