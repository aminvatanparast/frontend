import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const CustomCheckBox = ({ label, onCheck, defaultValue, disable }) => {
  const [check, setCheck] = useState(defaultValue);
  const { t } = useTranslation();

  useEffect(() => {
    setCheck(defaultValue);
  }, [defaultValue]);

  return (
    <div className={`flex items-center ${disable && "pointer-events-none opacity-25"}`}>
      <input
        checked={check}
        id={"link-checkbox" + label}
        type="checkbox"
        className="w-6 h-6 text-main bg-white rounded focus:ring-0 border-gray-600 cursor-pointer"
        onChange={() => {
          const newCheck = !check;
          setCheck(newCheck);
          onCheck(newCheck);
        }}
      />
      <label htmlFor={"link-checkbox" + label} className="ms-2 text-sm font-normal !text-secondary-300 select-none">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
