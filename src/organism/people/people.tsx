import Input from "@/atoms/input/input";
import {TravelFormData} from "@/organism/form/formData";

type PeopleProps = {
    formData: TravelFormData,
    setPeople: (data: TravelFormData) => void,
}

const People = ({formData, setPeople}: PeopleProps) => {
    return <>
        <span className="text-lg">How many people travel?</span>
        <Input value={formData?.people} placeholder="People"
               type="number"
               onChange={(e) => setPeople({...formData, people: e.target.value})}/>
    </>
}

export default People;