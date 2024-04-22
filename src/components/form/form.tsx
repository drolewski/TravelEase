import Input from "@/components/input/input";
import Radio from "@/components/radio/radio";

const Form = () => {
    return <div className="flex flex-col items-center w-6/12 bg-blue-200/20 text-blue-800 font-bold rounded">
        <span className="text-2xl">Find your travel destination</span>
        <span className="text-lg">Where are you from?</span>
        <Input/>
        <Radio label="Value"/>
    </div>
}

export default Form;