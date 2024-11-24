"use client"

import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { Post } from "../../_core/apis/api";
import CustomInput from "../../_component/components/UI/customInput/customInput";
import CustomButton from "../../_component/components/UI/customButton/customButton";
import Link from "next/link";
import SelectButton from "../../_component/components/UI/selectButton";
import CustomSelect from "../../_component/components/UI/customSelect/customSelect";
import { CONST } from "../../_core/const";
import DatePickerCustom from "../../_component/components/UI/datePicker/datePicker";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required('First Name is required'),
  LastName: Yup.string().required('Last Name is required'),
  Email: Yup.string().email('Invalid email').required('Email is required'),
  Mobile: Yup.string().required('Mobile is required'),
  DateOfBirth: Yup.date().required('Date of Birth is required'),
  Gender: Yup.string().required('Gender is required'),
  CurrentLocation: Yup.string().required('Current Location is required'),
  UserId: Yup.string().required('User Id is required'),
  EmiratesId: Yup.string().required('Emirates Id is required'),
  Password: Yup.string().required('Password is required'),
  ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match').required('Confirm Password is required'),
  CompanyName: Yup.string().when('type', {
    is: 2,
    then: Yup.string().required('Company Name is required'),
  }),
  BusinessField: Yup.string().when('type', {
    is: 2,
    then: Yup.string().required('Business Field is required'),
  }),
  CompanySize: Yup.string().when('type', {
    is: 2,
    then: Yup.string().required('Company Size is required'),
  }),
});

const Page = () => {
  const [type, setType] = useState(1);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    Post("login", { ...values })
        .then((res) => {
          // handle success
        })
        .catch((error) => {
          toast.error(error.data.message || error.data.msg);
        })
        .finally(() => {
          setLoading(false);
        });
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [step]);

  return (
      <div className={"flex flex-col justify-center items-center mt-10 mb-10 md:mb-0 md:mt-20 my-container"}>
        <div className={"rounded-lg bg-white p-5 flex items-center justify-center flex-col w-full gap-5 shadow-2xl"}>
          <span className={"text-gray-900 text-lg text-customPrimary-300 font-normal"}>{"Register"}</span>
          <div className={`flex-col gap-5 ${step === 1 ? "flex" : "hidden"} w-1/4`}>
            <div className={"flex gap-5 mb-5"}>
              <SelectButton selected={type === 1} label={"Individual"} id={1} onChangeSelected={() => setType(1)} />
              <SelectButton selected={type === 2} label={"Company"} id={2} onChangeSelected={() => setType(2)} />
            </div>
            <CustomButton loading={loading} onClick={() => setStep(2)} title={"Next Step"} />
          </div>

          <Formik
              initialValues={{
                FirstName: '',
                LastName: '',
                Email: '',
                Mobile: '',
                DateOfBirth: '',
                Gender: '',
                CurrentLocation: '',
                UserId: '',
                EmiratesId: '',
                Password: '',
                ConfirmPassword: '',
                CompanyName: '',
                BusinessField: '',
                CompanySize: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
                <Form>
                  <div className={`w-full flex-wrap justify-center gap-5 ${step === 2 && type === 1 ? "grid" : "hidden"} grid-cols-1 md:grid-cols-4`}>
                    <Field name="FirstName">
                      {({ field }) => <CustomInput {...field} placeHolder={"First Name"} label={"First Name"} />}
                    </Field>
                    <ErrorMessage name="FirstName" component="div" className="text-red-500" />

                    <Field name="LastName">
                      {({ field }) => <CustomInput {...field} placeHolder={"Last Name"} label={"Last Name"} />}
                    </Field>
                    <ErrorMessage name="LastName" component="div" className="text-red-500" />

                    <Field name="Email">
                      {({ field }) => <CustomInput {...field} placeHolder={"Email"} label={"Email"} />}
                    </Field>
                    <ErrorMessage name="Email" component="div" className="text-red-500" />

                    <Field name="Mobile">
                      {({ field }) => <CustomInput {...field} placeHolder={"Mobile"} label={"Mobile"} />}
                    </Field>
                    <ErrorMessage name="Mobile" component="div" className="text-red-500" />

                    <Field name="DateOfBirth">
                      {({ field }) => <DatePickerCustom {...field} placeholder={"Date of Birth"} />}
                    </Field>
                    <ErrorMessage name="DateOfBirth" component="div" className="text-red-500" />

                    <Field name="Gender">
                      {({ field }) => <CustomSelect options={CONST.gender} {...field} placeHolder={"Gender"} label={"Gender"} />}
                    </Field>
                    <ErrorMessage name="Gender" component="div" className="text-red-500" />

                    <Field name="CurrentLocation">
                      {({ field }) => <CustomSelect options={CONST.location} {...field} placeHolder={"Current Location"} label={"Current Location"} />}
                    </Field>
                    <ErrorMessage name="CurrentLocation" component="div" className="text-red-500" />

                    <Field name="UserId">
                      {({ field }) => <CustomInput {...field} placeHolder={"User Id"} label={"User Id"} />}
                    </Field>
                    <ErrorMessage name="UserId" component="div" className="text-red-500" />

                    <Field name="EmiratesId">
                      {({ field }) => <CustomInput {...field} placeHolder={"Emirates Id"} label={"Emirates Id"} />}
                    </Field>
                    <ErrorMessage name="EmiratesId" component="div" className="text-red-500" />

                    <Field name="Password">
                      {({ field }) => <CustomInput type={"Password"} {...field} placeHolder={"Password"} label={"Password"} />}
                    </Field>
                    <ErrorMessage name="Password" component="div" className="text-red-500" />

                    <Field name="ConfirmPassword">
                      {({ field }) => <CustomInput type={"Password"} {...field} placeHolder={"Confirm Password"} label={"Confirm Password"} />}
                    </Field>
                    <ErrorMessage name="ConfirmPassword" component="div" className="text-red-500" />
                  </div>

                  <div className={`w-full flex flex-col justify-center gap-5 ${step === 2 && type === 2 ? "grid" : "hidden"} grid-cols-1 md:grid-cols-4`}>
                    <Field name="CompanyName">
                      {({ field }) => <CustomInput {...field} placeHolder={"Company Name"} label={"Company Name"} />}
                    </Field>
                    <ErrorMessage name="CompanyName" component="div" className="text-red-500" />

                    <Field name="BusinessField">
                      {({ field }) => <CustomSelect options={CONST.business} {...field} placeHolder={"Business Field"} label={"Business Field"} />}
                    </Field>
                    <ErrorMessage name="BusinessField" component="div" className="text-red-500" />

                    <Field name="CompanySize">
                      {({ field }) => <CustomSelect options={CONST.CompanySize} {...field} placeHolder={"Company Size"} label={"Company Size"} />}
                    </Field>
                    <ErrorMessage name="CompanySize" component="div" className="text-red-500" />

                    {/* Add more fields for Company type as needed */}
                  </div>

                  <div className={` ${step !== 1 ? "flex" : "hidden"} gap-5 justify-start md:w-1/3`}>
                    <CustomButton loading={loading} onClick={() => setStep(1)} title={"Prev Step"} />
                    <CustomButton styles={"!bg-customPrimary-500"} loading={loading} type="submit" title={"Submit"} disabled={isSubmitting} />
                  </div>

                  <div className={"w-full flex justify-center cursor-pointer"}>
                    <Link href={"/auth/login"}>
                  <span className={"text-customPrimary-300 text-xs text-end w-full font-semibold"}>
                    {"Already have an account? Login here"}
                  </span>
                    </Link>
                  </div>
                </Form>
            )}
          </Formik>
        </div>
      </div>
  );
};

export default Page;
