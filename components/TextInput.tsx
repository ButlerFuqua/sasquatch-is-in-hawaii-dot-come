type TextInputPropTypes = {
    placeHolder?: string;
    value: any;
    setValue: any;
}

export default function TextInput({ value, setValue, placeHolder }: TextInputPropTypes) {

    const handleOnChange = (event: any) => {
        setValue(event.target.value);
    }

    return (
        <input placeholder={placeHolder} value={value} onChange={handleOnChange} type="text" className="border border-black border-l-4 border-b-4 rounded-lg p-2 w-full" />
    )
}