type InputProps = {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    defaultValue?: string;
    type?: 'text' | 'number';
}

const Input = ({value, placeholder, onChange, defaultValue, type}: InputProps) => {
    return <input
        value={value ?? defaultValue ?? ''}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className="block rounded-md border-0 py-1.5 px-7 text-blue-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
}

export default Input;