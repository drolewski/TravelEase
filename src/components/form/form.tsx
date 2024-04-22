'use client'
import Geolocation from "@/organism/geolocalization/geolocation";
import Navigation from "@/components/form/navigation/navigation";
import {navigationMap, Page} from "@/components/form/navigation/navigationLogic";
import {useState} from "react";

const Form = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.GEOLOCATION);

    return <div className="flex flex-col w-6/12 bg-blue-200/20 text-blue-800 font-bold rounded">
        <span className="self-center text-2xl m-4">Find your travel destination</span>
        <div className="m-8">
            {currentPage === Page.GEOLOCATION && <Geolocation/>}
            {currentPage === Page.PRICE && <div>Price</div>}
        </div>
        <Navigation isPreviousVisible={navigationMap.get(currentPage)?.previous ?? false}
                    onPreviousClick={() => {
                        setCurrentPage(navigationMap.get(currentPage)?.previous)
                    }}
                    onNextClick={() => {
                        setCurrentPage(navigationMap.get(currentPage)?.next)
                    }}/>
    </div>
}

export default Form;