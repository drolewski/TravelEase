type RadioProps = {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

const Radio = ({label, value, onChange}: RadioProps) => {
    return (
        <div className="flex items-center ps-3">
            <input id={"radio-id-" + label} type="radio" value="" name={"radio-id-" + label}
                   checked={value}
                   onChange={onChange}
                   className="w-4 h-4 text-blue-800 bg-gray-800 border-gray-800 dark:focus:text-blue-800 dark:ring-offset-blue-800 dark:bg-blue-800 dark:border-blue-800"/>
            <label htmlFor={"radio-id-" + label}
                   className="w-full py-3 ms-2 text-sm font-medium v">{label}</label>
        </div>
    )
}

export default Radio;