import Radio from "@/atoms/radio/radio";
import {TravelFormData} from "@/organism/form/formData";

type AllInclusiveProps = {
    formData: TravelFormData,
    setAllInclusive: (formData: TravelFormData) => void,
}

const AllInclusive = ({formData, setAllInclusive}: AllInclusiveProps) => {
    return <>
        <div>Would you like to go on all-inclusive travel?</div>
        <Radio label="Yes" value={!!formData.allInclusive}
               onChange={() => setAllInclusive({...formData, allInclusive: true})}/>
        <Radio label="No" value={!formData.allInclusive}
               onChange={() => setAllInclusive({...formData, allInclusive: false})}/>
    </>
}

export default AllInclusive;
