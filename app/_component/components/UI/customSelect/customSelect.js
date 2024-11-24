import React, { useState, useEffect, useRef } from 'react';
import {ArrowDown, SearchIcon} from "../../../icons/icons";


const CustomSelect = ({ options, onchange, name, label , disable , defaultValue , enName , agent = false}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [searchTerm, setSearchTerm] = useState('');
   const selectRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setValue(option[`name`])
    onchange({name:option.name , value:option.value , id:option.id});
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    setFilteredOptions([]);

    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = options.filter(option =>
      option[`name`].toLowerCase().includes(term)
    );


    setTimeout(() => {
      setFilteredOptions(filtered);
    } ,10)

  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);





  return (
    <div className={`relative w-full ${disable ? "opacity-50 pointer-events-none" :""}`} ref={selectRef}>
      <div
        className={`flex justify-between px-2.5 pb-2.5 pt-4 w-full text-sm outline outline-1 outline-none text-gray-900 bg-transparent rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-0 border-2 border-customPrimary-300 peer cursor-pointer`}
        onClick={toggleDropdown}
      >
        {value || label}
        <ArrowDown/>
      </div>
      {isOpen && (
        <div
          className="absolute z-20 w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-1 max-h-[200px] overflow-auto"
        >

           { filteredOptions?.map((option , index) => (
            <div
              key={option[`name`] + index}
              className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${selectedOption?.id === option.id ? ' ' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {
                option[`name`]
              }
            </div>
          ))}
        </div>
      )}
      <label
        htmlFor={`id-${name}`}
        className={`absolute ${value ? " text-main !text-[10px] -translate-y-4 top-2" : "top-1/2 -translate-y-1/2"} peer-focus:text-main text-sm text-gray-500 dark:text-gray-400 duration-300 transform  z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-focus:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 start-1 cursor-pointer`}
        onClick={toggleDropdown}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomSelect;
