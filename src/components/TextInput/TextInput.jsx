function TextInput({label , text  ,value , onChange}){
    return(
        <>
            <label className="block">
                {label && <span className="text-gray-700 text-xl">{label}</span>} 
                <input
                    type={text}
                    value={value}
                    placeholder={label}
                    onChange={onChange}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:"
                />
            </label>
        </>
    );
}

export default TextInput;