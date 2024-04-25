import {navigationMap, Page} from "@/organism/form/navigation/navigationLogic";
import Start from "@/organism/start/start";
import Geolocation from "@/organism/geolocalization/geolocation";
import Duration from "@/organism/time/duration";
import People from "@/organism/people/people";
import Price from "@/organism/price/price";
import Season from "@/organism/season/season";
import Region from "@/organism/region/region";
import Purpose from "@/organism/purpose/purpose";
import AllInclusive from "@/organism/all-inclusive/allInclusive";
import Transport from "@/organism/transport/transport";
import {TravelFormData} from "@/organism/form/formData";

type ContentProps = {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    formData: TravelFormData;
    country: string;
    geolocationSucceed: boolean;
    setFormData: (formData: TravelFormData) => void;
}

const Content = ({currentPage, setCurrentPage, formData, setFormData, country, geolocationSucceed}: ContentProps) => {
    return <div className="m-8">
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
        {currentPage === Page.SEASON && <Season formData={formData} setSeason={fd => setFormData(fd)}/>}
        {currentPage === Page.REGION && <Region formData={formData} setRegion={fd => setFormData(fd)}/>}
        {currentPage === Page.PURPOSE && <Purpose formData={formData} setPurpose={fd => setFormData(fd)}/>}
        {currentPage === Page.ALL_INCLUSIVE &&
            <AllInclusive formData={formData} setAllInclusive={fd => setFormData(fd)}/>}
        {currentPage === Page.TRANSPORT &&
            <Transport formData={formData} setTransport={fd => setFormData(fd)}/>}
    </div>
}

export default Content;
