import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Weather from "./Weather"


const apiPage = () => {

  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array
  const [geoData, setGeoData] = useState([]); //useState hook to initialize the state to an empty array

    const getData = async (location) => {
      const geoKey = '234979e2ff9e423095e4b2c869c1c97b'; //Move this to secure location
      const travelLocation = location;
      
      const query = await fetch('https://api.geoapify.com/v1/geocode/search?text='+ travelLocation +
      "&limit=1&format=json&apiKey=" +
      geoKey);
      const response = await query.json();
      console.log(response);
      setGeoData(response.results);
    };
    
  return(
    <>
    {/* <div className="w-screen mx-auto my-4">
      <h1 className="text-xl">test page for API Data</h1>

      <h4>Click a button to test the GeoLocation API</h4> 
      <button onClick={() => getData("New York")}
      className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
      New York
      </button>

      <button onClick={() => getData("Los Angeles")}      
      className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
      Los Angeles
      </button>

      <button onClick={() => getData("Memphis")}      
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Memphis
      </button>
    </div>

  <div className="w-screen mx-auto my-4 justify-center">
  */}
    
{/* Geo Data API Call */}

  {/* {
    
   geoData && geoData.length && geoData.map((result, i, weatherResult, v) => {
    return(
      <div>
        <div key={i}>
          <h4 id="city">City = <span className='font-bold'>{result.city}</span></h4>
          <h4 id="country">Country = <span className='font-bold'>{result.country}</span></h4>
          <h4 id="Timezone">Timezone = <span className='font-bold'>{result.timezone.name}</span></h4>
        </div>
    </div>
    )
    
    })}  */}

    <Weather />
{/*     
  <Link href="/demo">
  <a href="/demo"
      className="px-4 md:px-8 mx-auto my-4 py-2 md:py-3 text-center rounded-full bg-green-500 text-white font-bold uppercase border-green-600 border hover:bg-green-700"
      >
      Go back to Animation Demo Page    
      
    </a>
  </Link>
  </div> */}

    </>
  )
};

  export default apiPage;