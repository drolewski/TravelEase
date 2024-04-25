import {PurposeType, TravelFormData} from "@/organism/form/formData";
import Radio from "@/atoms/radio/radio";

type PurposeProps = {
    formData: TravelFormData;
    setPurpose: (formData: TravelFormData) => void;
}

const Purpose = ({formData, setPurpose}: PurposeProps) => {
    return <>
        <div>What is your travel purpose?</div>
        {Object.values(PurposeType).map(pt => <Radio value={pt === formData.purpose} key={pt} label={pt}
                                                     onChange={() => setPurpose({...formData, purpose: pt})}/>)}
    </>
}

export default Purpose;
