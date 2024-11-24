import React from 'react';
import {CONST} from "../../../../_core/const";
import moment from "moment-jalaali";
import Image from "next/image";

const OffTable = () => {
    return (
        <>
            <div
                className="relative w-full  bg-white rounded-lg  flex flex-col items-start w-full h-[85vh] !mt-5 overflow-auto ">
                <table className="text-sm text-gray-500 w-full">
                    <thead className="text-xs text-gray-700 uppercase ">
                    <tr className={"border-b border-gray-400"}>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"ROW"}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"PROJECT NAME"}
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"DEVELOPER NAME"}
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"UNIT TYPE"}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"AMENITIES"}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"SIZE"}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"LOCATION"}
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"TOTAL PRICE"}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"PAYMENT PLAN"}
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"VIEW"}
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"HAND OVER TIME"}
                            </div>
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {CONST.rentModal?.map((item, index) => (
                        <tr key={index + "render"} className="bg-white border-b border-gray-400">
                            <td className="px-6 py-4 text-center">
                                <div className={"text-gray-500 text-sm mt-1"}>
                                    {index + 1}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className={"text-gray-500 text-sm mt-1"}>
                                    {item.developerName}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className={"text-gray-500 text-sm mt-1"}>
                                    {item.projectName}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                {
                                    item?.unitType?.map((valueItem ,index) => {
                                        return(
                                            <div key={index + "render"} className={"text-gray-500 text-sm mt-1"}>
                                                {valueItem.value}
                                            </div>
                                        )
                                    })
                                }
                            </td>

                            <td className="px-6 py-4 text-center">
                                {
                                    item?.amenities?.map((valueItem ,index) => {
                                        return(
                                            <div key={index + "render"} className={"text-gray-500 text-sm mt-1"}>
                                                {valueItem.value}
                                            </div>
                                        )
                                    })
                                }
                            </td>

                            <td className="px-6 py-4 text-center">
                                {
                                    item?.location?.map((valueItem , index) => {
                                        return(
                                            <div key={index + "render"} className={"text-gray-500 text-sm mt-1"}>
                                                {valueItem.value}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td className="px-6 py-4 text-center">
                                {
                                    item?.size?.map((valueItem , index) => {
                                        return(
                                            <div key={index + "render"} className={"text-gray-500 text-sm mt-1"}>
                                                {valueItem.value}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className={"text-gray-500 text-sm mt-1"}>
                                    {item.totaPrice}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                {
                                    item?.paymentPlan?.map((valueItem , index) => {
                                        return(
                                            <div key={index + "render"} className={"text-gray-500 text-sm mt-1"}>
                                                {valueItem.value}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className={"text-gray-500 text-sm mt-1"}>
                                    {item.view}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className={"text-gray-500 text-sm mt-1"}>
                                    {item.handOoverTime}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OffTable;
