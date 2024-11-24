"use client"
import React from 'react';
import Search from "../../../_component/components/search/search";
import {CONST} from "../../../_core/const";

const Page = () => {
    return (
        <div>
            <div
                className="relative w-full  bg-white rounded-lg  flex flex-col items-center w-full !mt-5  ">
                <table className="w-full text-sm text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase ">
                    <tr className={"border-b border-gray-400"}>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"row"}
                            </div>
                        </th>
                        <th scope="col" className=" py-3  !text-center  font-normal text-gray-600 text-sm">
                            <div className={"mt-1 flex text-center justify-center"}>
                                {"developer name"}
                            </div>
                        </th>


                        <th scope="col" className=" py-3  text-center  font-normal text-gray-600 text-sm">
                            <div className={"mt-1 flex text-center justify-center "}>
                                {"founder"}
                            </div>
                        </th>


                        <th scope="col" className=" py-3  text-center  font-normal text-gray-600 text-sm">
                            <div className={"mt-1 flex flex justify-center"}>
                                {"nationality"}
                            </div>
                        </th>

                        <th scope="col" className=" py-3  text-center font-normal text-gray-600 text-sm">
                            <div className={"mt-1 flex flex justify-center"}>
                                {"established"}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-center  w-[200px] font-normal text-gray-600 text-sm">
                            <Search/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {CONST.fakeData?.map((item, index) => (
                        <tr key={index} className="bg-white border-b border-gray-400">
                            <td className="px-6 py-4 text-center">
                                <div className={"text-gray-500 text-sm mt-1"}>
                                    {index + 1}
                                </div>
                            </td>
                            <td className=" py-4 text-center text-primary-400 text-base font-medium">
                                <div className={"mt-1 flex text-center justify-center"}>
                                    {item.developer_name}
                                </div>
                            </td>

                            <td className=" py-4 text-center text-start text-primary-400 text-base font-medium max-w-10">
                                <div className={"mt-1 flex text-center justify-center"}>
                                    {item.founder}
                                </div>
                            </td>

                            <td className=" py-4 text-center  text-gray-500 text-sm font-medium">
                                <div className={"mt-1 flex justify-center"}>
                                    {item.nationality}
                                </div>
                            </td>


                            <td className=" py-4 text-center  text-gray-500 text-sm font-medium">
                                <div className={"mt-1 flex justify-center"}>
                                    {item.established}
                                </div>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
