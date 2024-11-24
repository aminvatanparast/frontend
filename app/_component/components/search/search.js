import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {CONST} from "../../../_core/const";
import filter from "../UI/filter/filter";

const Search = ({title = "search" , onChange , keySearch}) => {
  const [search , setSearch] = useState("")
  const [searchRow , setSearchRow] = useState([])

  const data  = CONST.oFFmodal

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const foundIndices = [];

    data.forEach((item, index) => {
      let find;

      if (typeof item[`${keySearch}`] === "object") {
        find = item[`${keySearch}`]?.filter((f) => {
          return f?.value?.toLowerCase().includes(value);
        });

        if (find && find.length > 0) {
          foundIndices.push(index);
        }
      } else {
        find = item[`${keySearch}`]?.toLowerCase().includes(value);
        if (find) {
          foundIndices.push(index);
        }
      }
    });

    setSearchRow(foundIndices);
    onChange(foundIndices);
  };

  return (
    <div className={"border border-gray-400 border-1 h-[48px]"}>
      <label htmlFor="default-search"
             className=" text-sm font-medium text-gray-900 sr-only dark:text-white">{"search"}</label>
      <div className="relative">
        <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input onChange={handleChange} type="search" id="default-search"
               className="block w-full p-2 pe-10 outline-none text-sm text-gray-900 text-sm text-gray-300 placeholder:!text-sm placeholder:text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 !mt-0 "
               placeholder={"search"} required/>

      </div>

    </div>
  );
};

export default Search;
