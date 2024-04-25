import {TransportType, TravelFormData} from "@/organism/form/formData";
import Radio from "@/atoms/radio/radio";

type TransportProps = {
    formData: TravelFormData;
    setTransport: (formData: TravelFormData) => void;
}

const Transport = ({formData, setTransport}: TransportProps) => {
    return <>
        <div>How are you going to travel?</div>
        {Object.values(TransportType).map(tt => <Radio value={tt === formData.transport} key={tt} label={tt}
                                                       onChange={() => setTransport({...formData, transport: tt})}/>)}
    </>
}

export default Transport;
