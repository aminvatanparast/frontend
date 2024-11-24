import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import CustomInput from "../../_component/components/UI/customInput/customInput";
import CustomButton from "../../_component/components/UI/customButton/customButton";
import {Post} from "../../_core/apis/api";
import { useSearchParams } from 'next/navigation'

const Index = () => {
  const [type, setType] = useState(1);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const handleForm = ({ name, value }) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setForm({});
  }, [type]);

  const handleSubmit = () => {
    setLoading(true);
    Post("forget-password/change-password", { ...form , email:searchParams.get("email") , code:searchParams.get("code") })
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
      <div key={"login"} className={"rounded-lg bg-white p-5 flex items-center justify-center flex-col min-w-[350px] gap-5 shadow-2xl"}>
        <span className={"text-gray-900 text-base"}>{"new Password"}</span>
        <CustomInput
          placeHolder={'password'}
          label={'password'}
          name={"password"}
          onchange={handleForm}
        />
        <CustomButton loading={loading} onClick={handleSubmit} title={"continue"} />
        <div className={"w-full flex justify-center cursor-pointer"}>
          <div onClick={() => setType(1)}>
              <span className={"text-main text-xs text-end w-full"}>
                {"login WidthS tate"}
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
