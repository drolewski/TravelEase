import {DurationType, TravelFormData} from "@/organism/form/formData";

type DurationProps = {
    formData?: TravelFormData,
    setDuration?: (formData: TravelFormData) => void,
}

const Duration = ({formData, setDuration}: DurationProps) => {
    return <>
        <span className="text-lg">What is your travel time?</span>
        <div className="flex">
            <label htmlFor="durationType" className="sr-only">Duration Type</label>
            <select id="durationType" name="durationType"
                    value={formData?.durationType}
                    onChange={event => setDuration({...formData, durationType: event.target.value})}
                    className="flex-shrink-0 z-10 inline-flex rounded-l-md px-2.5 items-center text-sm font-medium text-center border border-e-0 text-blue-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                {Object.values(DurationType).map(d => <option key={d}>{d}</option>)}
            </select>
            <input type="number" name="days" id="days"
                   value={formData?.duration}
                   onChange={event => setDuration({...formData, duration: event.target.value})}
                   min={1}
                   max={31}
                   className="block rounded-r-md border-0 py-1.5 pl-7 pr-3 text-blue-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder={"Number of " + formData?.durationType}/>
        </div>
    </>
}

export default Duration;
