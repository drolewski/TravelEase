import {SeasonType, TravelFormData} from "@/organism/form/formData";
import Radio from "@/atoms/radio/radio";

type SeasonProps = {
    formData: TravelFormData;
    setSeason: (formData: TravelFormData) => void;
}

const Season = ({formData, setSeason}: SeasonProps) => {
    return <>
        <span className="text-lg">What is your travel season?</span>
        {Object.values(SeasonType).map(s => <Radio key={s} label={s} value={formData?.season === s}
                                                   onChange={() => setSeason({...formData, season: s})}/>)}
    </>
}

export default Season;
