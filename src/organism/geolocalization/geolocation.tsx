import Radio from "@/components/radio/radio";
import {useState} from "react";
import Input from "@/components/input/input";

const Geolocation = () => {
    const [isProperGeolocation, setIsProperGeolocation] = useState<boolean>(true);
    const [inputGeolocation, setInputGeolocation] = useState<string | undefined>();
    return (
        <>
            <span className="text-lg">Are you from Poland?</span>
            <Radio label="Yes" value={isProperGeolocation} onChange={() => setIsProperGeolocation(true)}/>
            <Radio label="No" value={!isProperGeolocation} onChange={() => setIsProperGeolocation(false)}/>
            {!isProperGeolocation &&
                <Input value={inputGeolocation} placeholder="Country"
                       onChange={(e) => setInputGeolocation(e.target.value)}/>}
        </>
    );
}

export default Geolocation;