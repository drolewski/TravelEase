type RadioProps = {
    label: string;
}

const Radio = ({label}: RadioProps) => {
    return (
        <div className="flex items-center ps-3">
            <input id="radio-id" type="radio" value="" name="radio-id"
                   className="w-4 h-4 text-blue-800 bg-gray-800 border-gray-800 dark:focus:text-blue-800 dark:ring-offset-blue-800 dark:bg-blue-800 dark:border-blue-800"/>
            <label htmlFor="radio-id"
                   className="w-full py-3 ms-2 text-sm font-medium v">{label}</label>
        </div>
    )
}

export default Radio;