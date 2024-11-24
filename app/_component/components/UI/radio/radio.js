import React from 'react';

const Radio = ({name , label , id}) => {
  return (
    <>
      <div className="flex items-center mb-4 ">
        <input id={name + id} type="radio" value="" name={name}
               className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor={name + id} className="ms-2 text-sm  text-gray-900 mr-5">{label}</label>
      </div>
    </>
  );
};

export default Radio;
