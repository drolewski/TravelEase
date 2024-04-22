import Radio from "@/atoms/radio/radio";
import {useEffect, useState} from "react";
import Input from "@/atoms/input/input";
import Loading from "@/atoms/loading/loading";
import {TravelFormData} from "@/organism/form/formData";

type GeolocationProps = {
    country: string;
    formData: TravelFormData;
    setCountry: (formData: TravelFormData) => void;
    geolocationSucceed: boolean;
}

const Geolocation = ({country, geolocationSucceed, formData, setCountry}: GeolocationProps) => {
    const [isProperGeolocation, setIsProperGeolocation] = useState<boolean>(true);
    const [inputGeolocation, setInputGeolocation] = useState<string | undefined>();

    useEffect(() => {
        if (isProperGeolocation && geolocationSucceed && country) {
            setCountry({...formData, country: country});
            return;
        }
        if (inputGeolocation !== undefined) {
            setCountry({...formData, country: inputGeolocation});
        }
    }, [isProperGeolocation, inputGeolocation]);

    if (!country && geolocationSucceed) {
        return <Loading/>
    }

    if (!geolocationSucceed && !country) {
        return <>
            <span className="text-lg">What country are you from?</span>
            <Input value={inputGeolocation} placeholder="Country"
                   defaultValue={formData?.country}
                   onChange={(e) => setInputGeolocation(e.target.value)}/>
        </>
    }

    return (
        <>
            <span className="text-lg">Are you from {country}?</span>
            <Radio label="Yes" value={isProperGeolocation}
                   onChange={() => setIsProperGeolocation(true)}/>
            <Radio label="No" value={!isProperGeolocation}
                   onChange={() => setIsProperGeolocation(false)}/>
            {!isProperGeolocation &&
                <Input value={inputGeolocation} placeholder="Country"
                       defaultValue={formData?.country}
                       onChange={(e) => setInputGeolocation(e.target.value)}/>}
        </>
    );
}

export default Geolocation;