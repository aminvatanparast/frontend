import React, { useEffect, useState, useRef } from 'react';
import DatePicker from "react-multi-date-picker";
import moment from "moment-jalaali";


const DatePickerCustom = ({ placeholder, onChange, value, name, defaultValue, noTime = true, en }) => {
  const [label, setLabel] = useState(false);
  const inputRef = useRef(null);
  const dir = "rtl";
  const [shouldCloseCalendar, setShouldCloseCalendar] = useState(false)
  const handleDate = (e) => {
    const formattedDate = moment.unix(e.unix).format("YYYY-MM-DD");
    onChange({
      name: name,
      value: formattedDate
    });
    setLabel(true);
  };
  const handleLabelClick = () => {
    setLabel(true);
    inputRef.current.focus();
    setShouldCloseCalendar(false)
  };

  useEffect(() => {
    if (value || defaultValue) {
      setLabel(true);
    } else {
      setLabel(false);
    }
  }, [value, defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShouldCloseCalendar(true);
      } else {
        setShouldCloseCalendar(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {

      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative block w-full h-full">
      <div
        id={name}
        className={`date block h-[48px] w-full rounded-lg border-2 border-customPrimary-300 bg-transparent px-2 text-sm text-gray-900 focus:outline-none focus:ring-0 focus:border-blue-500 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 peer`}
      >
        <DatePicker
          value={value ? moment(value).format("jYYYY-jMM-jDD" ) : (defaultValue ? moment(defaultValue).format('MM-DD-YYYY') : null)}
          format={!noTime ? "MM/DD/YYYY" : "MM-DD-YYYY"}
          calendarPosition="bottom-right"
          onChange={handleDate}
          inputClass="block w-full h-full bg-transparent border-none outline-none"
          buttonClass="border-none outline-none bg-transparent focus:outline-none"
          ref={inputRef}
          onClose={() => shouldCloseCalendar}
        />
      </div>
      <label
        htmlFor={name}
        className={`absolute left-2"  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-1/2 ${
          label
            ? `top-2 text-main dark:text-blue-500 scale-75 -translate-y-5 text-[13px] !left-0`
            : 'top-1/2 text-gray-500 dark:text-gray-400 scale-100'
        } z-10 bg-white dark:bg-gray-900 px-2 mx-1 group-focus-within:px-1 group-focus-within:text-main group-focus-within:dark:text-blue-500 group-focus-within:scale-75 group-focus-within:-translate-y-4`}
        onClick={handleLabelClick}
      >
        {placeholder ? placeholder : ''}
      </label>
    </div>
  );
};

export default DatePickerCustom;
