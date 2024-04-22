import Radio from "@/atoms/radio/radio";
import {useState} from "react";
import Input from "@/atoms/input/input";
import Loading from "@/atoms/loading/loading";

type GeolocationProps = {
    country: string;
}

const Geolocation = ({country}: GeolocationProps) => {
    const [isProperGeolocation, setIsProperGeolocation] = useState<boolean>(true);
    const [inputGeolocation, setInputGeolocation] = useState<string | undefined>();

    if (!country) {
        return <Loading />
    }

    return (
        <>
            <span className="text-lg">Are you from {country}?</span>
            <Radio label="Yes" value={isProperGeolocation} onChange={() => setIsProperGeolocation(true)}/>
            <Radio label="No" value={!isProperGeolocation} onChange={() => setIsProperGeolocation(false)}/>
            {!isProperGeolocation &&
                <Input value={inputGeolocation} placeholder="Country"
                       onChange={(e) => setInputGeolocation(e.target.value)}/>}
        </>
    );
}

export default Geolocation;