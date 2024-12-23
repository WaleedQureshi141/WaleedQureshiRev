interface InputProps
{
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    type?: string;
}

export function Input({value, setValue, placeholder, type}: InputProps)
{
    return (
        <input
        value={value}
        placeholder={placeholder} 
        type={type}
        onChange={(e) => setValue(e.target.value)} />
    )
}