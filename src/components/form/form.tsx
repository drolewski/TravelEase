'use client'
import Geolocation from "@/organism/geolocalization/geolocation";
import Navigation from "@/components/form/navigation/navigation";
import {NavigationLogic} from "@/components/form/navigation/navigationLogic";

const Form = () => {
    const currentPage = NavigationLogic.GEOLOCATION;

    const next = () => {
        console.log("next");
    }

    const previous = () => {
        console.log("previous");
    }

    return <div className="flex flex-col w-6/12 bg-blue-200/20 text-blue-800 font-bold rounded">
        <span className="self-center text-2xl m-4">Find your travel destination</span>
        <div className="m-8">
            <Geolocation/>
        </div>
        <Navigation isPreviousVisible={currentPage.previous ?? false} onPreviousClick={previous} onNextClick={next}/>
    </div>
}

export default Form;