"use client"

import React, {useState} from 'react';
import { useSearchParams } from 'next/navigation'
import {toast} from "react-toastify";
import {Post} from "../../_core/apis/api";
import CustomInput from "../../_component/components/UI/customInput/customInput";
import CustomButton from "../../_component/components/UI/customButton/customButton";
import Timer from "../../_component/components/timer/Timer";
import Link from "next/link";

const Page = () => {
  const [type , setType] = useState(1)
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)
  let [searchParams, setSearchParams] = useSearchParams();

  const handleForm = ({name, value}) => {
    setForm((prevState) => ({...prevState, [name]: +value}))
  }

  const handleSubmitOtp = () => {
    setLoading(true)
    if(searchParams.get("mobile")) {
      Post("verify-code" , {...form , mobile:searchParams.get("mobile") }).then((res) => {

      }).catch((error) => {
        toast.error(error.data.message || error.data.msg)
      }).finally(() => {
        setLoading(false)
      })
    } else {
      Post("forget-password/verify-code" , {...form , email:searchParams.get("email") }).then((res) => {

      }).catch((error) => {
        toast.error(error.data.message || error.data.msg)
      }).finally(() => {
        setLoading(false)
      })
    }
  }
  return (
    <div className={"flex flex-col justify-center items-center mt-10 mb-10 md:mb-0 md:mt-20"}>
          <div className={"rounded-lg bg-white p-5 py-10 flex items-center justify-center flex-col w-[350px]  gap-5 shadow-2xl rounded-lg"}>
            <span className={"text-customPrimary-300 text-sm text-center"}>{"Enter the code sent to the email"}</span>
            <div>
              <Timer/>
            </div>
            <CustomInput
              placeHolder={'code'}
              label={'code'}
              name={`code`}
              onchange={(e) => handleForm(e)}
            />

            <CustomButton onClick={handleSubmitOtp} loading={loading} title={"Register"}/>
            <div className={"w-full gap-4 flex justify-center cursor-pointer"}>
              <div onClick={() => setType(2)}>
               <Link href={"#"} className={"text-customPrimary-300 text-xs text-end w-full font-normal"}>
                  {"Send Again"}
               </Link>
              </div>

            </div>
          </div>
    </div>
  );
};

export default Page;
