import React, {useEffect, useState} from 'react';

const CustomTextArea = ({placeHolder, type = "text", onchange, name , label ,className, defaultValue}) => {
  const [value, setValue] = useState(null)

  const handleChange = (e) => {
    setValue(e.target.value)
    onchange({name:name , value:e.target.value})
  }
  useEffect(() => {
    setValue(defaultValue || "")
  } ,[defaultValue])
  return (
    <div className={`relative w-full ${className}`}>
      <textarea  id={`id-${name}`}
             className={`block min-h-[85px] px-2.5 pb-2.5 pt-4 w-full text-xs md:text-sm text-gray-900 bg-transparent rounded-lg border-2 border-customPrimary-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-main peer`}
             placeholder={""}
                 value={value || ""}
                 onChange={(e) => handleChange(e)}
      />
      <label htmlFor={`id-${name}`}
             className={`absolute ${value ? " text-main !text-[10px]" : ""}  peer-focus:text-main text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:text-[10px] peer-focus:-translate-y-4   start-1`}>
        {label}
      </label>
    </div>
  );
};

export default CustomTextArea;
