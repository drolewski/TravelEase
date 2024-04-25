import {RegionType, TravelFormData} from "@/organism/form/formData";
import Radio from "@/atoms/radio/radio";

type RegionProps = {
    formData: TravelFormData;
    setRegion: (region: TravelFormData) => void;
}

const Region = ({formData, setRegion}: RegionProps) => {
    return <>
        <div>Region</div>
        {Object.values(RegionType).map(r => <Radio key={r} label={r}
                                                   value={formData.region === r}
                                                   onChange={() => setRegion({...formData, region: r})}/>)}
    </>
}

export default Region;
