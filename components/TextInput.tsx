type TextInputPropTypes = {
    placeHolder?: string;
    value: any;
    setValue: any;
    required?: boolean
    inputType?: string
}

export default function TextInput({ value, setValue, placeHolder, required, inputType }: TextInputPropTypes) {

    const handleOnChange = (event: any) => {
        setValue(event.target.value);
    }

    return (
        <input required={!!required} placeholder={placeHolder} value={value} onChange={handleOnChange} type={inputType ?? "text"} className="border border-black border-l-4 border-b-4 rounded-lg p-2 w-full" />
    )
}