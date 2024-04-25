'use client'
import Geolocation from "@/organism/geolocalization/geolocation";
import Navigation from "@/atoms/form/navigation/navigation";
import {navigationMap, Page} from "@/organism/form/navigation/navigationLogic";
import {useState} from "react";
import {TravelFormData} from "@/organism/form/formData";
import Start from "@/organism/start/start";
import useGeolocation from "@/hooks/useGeolocation";
import Price from "@/organism/price/price";
import Loading from "@/atoms/loading/loading";
import Duration from "@/organism/time/duration";
import People from "@/organism/people/people";
import Season from "@/organism/season/season";

const Form = () => {
    const {country, geolocationSucceed} = useGeolocation();
    const [formData, setFormData] = useState<TravelFormData>(new TravelFormData());
    const [currentPage, setCurrentPage] = useState<Page>(Page.START);

    const isNavigationActive = (): boolean => {
        if (currentPage === Page.GEOLOCATION) {
            return !!formData?.country;
        }
        if (currentPage === Page.DURATION) {
            return !!formData?.duration && !!formData?.durationType;
        }
        if (currentPage === Page.PEOPLE) {
            return !!formData?.people
        }
        if (currentPage === Page.PRICE) {
            return !!formData?.price
        }
        if (currentPage === Page.SEASON) {
            return !!formData?.price
        }
        return true;
    }

    if (!country && geolocationSucceed) {
        return <Loading/>
    }

    return <div className="flex flex-col w-6/12 bg-blue-200/20 text-blue-800 font-bold rounded">
        <span className="self-center text-2xl m-4">Find your travel destination</span>
        <div className="m-8">
            {currentPage === Page.START &&
                <Start onStartClick={() => setCurrentPage(navigationMap.get(currentPage)?.next)}/>}
            {currentPage === Page.GEOLOCATION &&
                <Geolocation country={country}
                             geolocationSucceed={geolocationSucceed}
                             formData={formData}
                             setCountry={fd => setFormData(fd)}/>}
            {currentPage === Page.DURATION &&
                <Duration formData={formData}
                          setDuration={fd => setFormData(fd)}/>}
            {currentPage === Page.PEOPLE && <People formData={formData}
                                                    setPeople={fd => setFormData(fd)}/>}
            {currentPage === Page.PRICE && <Price formData={formData}
                                                  setPrice={fd => setFormData(fd)}/>}
            {currentPage === Page.SEASON && <Season/>}
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