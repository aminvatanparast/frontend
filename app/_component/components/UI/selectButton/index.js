import React from 'react';

const SelectButton = ({id , selected , onChangeSelected , label}) => {
    return (
        <button className={`${selected ? "bg-customPrimary-300 !text-white" : ""} rounded-lg border-2 border-customPrimary-300 w-full p-5`} onClick={() => onChangeSelected(id)}>
            <span className={`${selected ? "!text-white" : ""} text-customPrimary-300`}>{label}</span>
        </button>
    );
};

export default SelectButton;
