'use client'
import Geolocation from "@/organism/geolocalization/geolocation";
import Navigation from "@/atoms/form/navigation/navigation";
import {navigationMap, Page} from "@/organism/form/navigation/navigationLogic";
import {useEffect, useState} from "react";
import {TravelFormData} from "@/organism/form/formData";
import Start from "@/organism/start/start";
import useGeolocation from "@/hooks/useGeolocation";

const Form = () => {
    const {country, geolocationSucceed} = useGeolocation();
    const [formData, setFormData] = useState<TravelFormData>();
    const [currentPage, setCurrentPage] = useState<Page>(Page.START);

    const isNavigationActive = (): boolean => {
        if (currentPage === Page.GEOLOCATION) {
            return !!formData?.country;
        }
        return true;
    }

    return <div className="flex flex-col w-6/12 bg-blue-200/20 text-blue-800 font-bold rounded">
        <span className="self-center text-2xl m-4">Find your travel destination</span>
        <div className="m-8">
            {currentPage === Page.START &&
                <Start onStartClick={() => setCurrentPage(navigationMap.get(currentPage)?.next)}/>}
            {currentPage === Page.GEOLOCATION &&
                <Geolocation country={country}
                             isGeolocation={formData?.isGeolocation ?? true}
                             geolocationSucceed={geolocationSucceed}
                             formData={formData}
                             setCountry={fd => {
                                 console.log(fd);
                                 setFormData(fd)
                             }}/>}
            {currentPage === Page.PRICE && <div>Price</div>}
        </div>
        {currentPage !== Page.START &&
            <Navigation isActive={isNavigationActive()}
                        isPreviousVisible={navigationMap.get(currentPage)?.previous ?? false}
                        isNextVisible={navigationMap.get(currentPage)?.next ?? false}
                        onPreviousClick={() => setCurrentPage(navigationMap.get(currentPage)?.previous)}
                        onNextClick={() => setCurrentPage(navigationMap.get(currentPage)?.next)}/>}
    </div>
}

export default Form;