import {useEffect, useState} from "react";

const useGeolocation = () => {
    // TODO locale from client
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    const [country, setCountry] = useState<string>();
    const [geolocationSucceed, setGeolocationSucceed] = useState<boolean>(false);
    const [location, setLocation] = useState();

    const fetchApiData = async ({latitude, longitude}) => {
        const res = await fetch(`/api/countries?lat=${latitude}&lng=${longitude}`, {method: 'GET'});
        const countryCode = await res.json();
        setCountry(regionNames.of(countryCode));
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                ({coords}) => {
                    const {latitude, longitude} = coords;
                    setLocation({latitude, longitude});
                },
                () => setGeolocationSucceed(false))
        }
    }, []);

    useEffect(() => {
        if (location) {
            fetchApiData(location);
            setGeolocationSucceed(true);
        }
    }, [location]);

    return {country, geolocationSucceed};
}

export default useGeolocation;