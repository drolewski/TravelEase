'use client'
import Form from "@/components/form/form";
import {useEffect, useState} from "react";

export default function Home() {
    const [mensen, setMensen] = useState([]);
    const [location, setLocation] = useState();

    const fetchApiData = async ({ latitude, longitude }) => {
        const res = await fetch(`https://openmensa.org/api/v2/canteens?near[lat]=${latitude}&near[lng]=${longitude}&near[dist]=50000`);
        const data = await res.json();
        setMensen(data);
        console.log(data)
    };

    useEffect(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                console.log(latitude, longitude);
                setLocation({ latitude, longitude });
            })
        }
    }, []);

    useEffect(() => {
        // Fetch data from API if `location` object is set
        console.log(location)
        if (location) {
            fetchApiData(location);
            console.log(mensen)
        }
    }, [location]);

  return (
      <div className="flex flex-col items-center">
        <Form/>
      </div>
  );
}
