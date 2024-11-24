"use client"

import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import {Post} from "../../_core/apis/api";
import CustomInput from "../../_component/components/UI/customInput/customInput";
import CustomButton from "../../_component/components/UI/customButton/customButton";
import Link from "next/link";

const Page = () => {
  const [type, setType] = useState(1);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);


  const handleForm = ({ name, value }) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setForm({});
  }, [type]);

  const handleSubmit = () => {
    setLoading(true);
    Post("ForgetPassword", { ...form })
      .then((res) => {

      })
      .catch((error) => {
        toast.error(error.data.message || error.data.msg)
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <div className={"flex flex-col justify-center items-center mt-10 mb-10 md:mb-0 md:mt-20"}>
      {
        <div  className={"rounded-lg bg-white p-5 flex items-center justify-center flex-col min-w-[350px] gap-5 shadow-2xl"}>
          <span className={"text-gray-900 text-lg text-customPrimary-300 font-normal"}>{"Forget Password"}</span>
          <CustomInput
            placeHolder={"email"}
            label={"email"}
            name={"email"}
            onchange={handleForm}
          />
          <CustomButton loading={loading} onClick={handleSubmit} title={"Send Code"} />
			<div className={"w-full flex justify-center cursor-pointer"}>
				<Link href={"/auth/login"}>
				  <span className={"text-customPrimary-300 text-xs text-end w-full font-semibold"}>
					{"back to login"}
				  </span>
				</Link>
			</div>
        </div>
      }
    </div>
  );
};

export default Page;
