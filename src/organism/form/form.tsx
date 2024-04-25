'use client'
import Navigation from "@/atoms/form/navigation/navigation";
import {navigationMap, Page} from "@/organism/form/navigation/navigationLogic";
import {useState} from "react";
import {TravelFormData} from "@/organism/form/formData";
import useGeolocation from "@/hooks/useGeolocation";
import Loading from "@/atoms/loading/loading";
import {isActive} from "@/organism/form/navigation/isActive";
import Content from "@/organism/form/content/content";
import fetch from "node-fetch";

const Form = () => {
    const {country, geolocationSucceed} = useGeolocation();
    const [formData, setFormData] = useState<TravelFormData>(new TravelFormData());
    const [currentPage, setCurrentPage] = useState<Page>(Page.START);
    const [result, setResult] = useState<string | undefined>();

    const onSubmit = () => {
        fetch('/api/travels', {
            method: 'POST', body: JSON.stringify({
                ...formData
            })
        })
            .then(res => res.json())
            .then(data => {
                setResult(data);
                setCurrentPage(Page.RESULT)
            })
    }

    if (!country && geolocationSucceed) {
        return <Loading/>
    }

    return <div className="flex flex-col w-6/12 bg-blue-200/20 text-blue-800 font-bold rounded">
        <span className="self-center text-2xl m-4">Find your travel destination</span>
        <Content country={country} currentPage={currentPage} formData={formData} result={result}
                 geolocationSucceed={geolocationSucceed} setFormData={setFormData} setCurrentPage={setCurrentPage}/>
        {currentPage !== Page.START &&
            <Navigation isActive={isActive(currentPage, formData)}
                        isPreviousVisible={navigationMap.get(currentPage)?.previous ?? false}
                        isNextVisible={navigationMap.get(currentPage)?.next ?? false}
                        onPreviousClick={() => setCurrentPage(navigationMap.get(currentPage)?.previous)}
                        onNextClick={() => setCurrentPage(navigationMap.get(currentPage)?.next)}
                        onSubmitClick={() => onSubmit()}/>}
    </div>
}

export default Form;