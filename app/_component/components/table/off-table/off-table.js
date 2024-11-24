import React, {useState} from 'react';
import {CONST} from "../../../../_core/const";
import moment from "moment-jalaali";
import Image from "next/image";
import Search from "../../search/search";
import MyMap from "../../../map";

const OffTable = ({data}) => {

    const [filterSearch , setFilterSearch] = useState([])
    const [changeFilter , setChangeFilter] = useState(false)

    const handleSearch = (e) => {
        setFilterSearch(e)
        setChangeFilter(true)
    }

    return (
        <>
            <div
                className="relative w-full  bg-white rounded-lg  flex flex-col items-start w-full  !mt-5 overflow-auto ">
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
                                {"AREA SIZE"}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"MAP LOCATION"}
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"PRICE"}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"PAYMENT PLAN"}
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 !text-center  w-4 font-normal text-gray-600 text-sm">
                            <div className={"mt-1"}>
                                {"VIEW TYPE"}
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
                    {data?.map((item, index) => (
                        (filterSearch?.includes(index) || filterSearch.length === 0 && !changeFilter) &&
                        <tr key={index} className="bg-white border-b border-gray-400">
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
                                    item?.unitType?.map((valueItem, index) => {
                                        return(
                                            <div key={index + "table"} className={"text-gray-500 text-sm mt-1"}>
                                                {valueItem.value}
                                            </div>
                                        )
                                    })
                                }
                            </td>

                            <td className="px-6 py-4 text-center">
                                {
                                    item?.amenities?.map((valueItem, index) => {
                                        return(
                                            <div key={index + "table"} className={"text-gray-500 text-sm mt-1"}>
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
                                            <div key={index + "table"} className={"text-gray-500 text-sm mt-1"}>
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
                                            <div key={index + "table"} className={"text-gray-500 text-sm mt-1"}>
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
                                            <div key={index + "table"} className={"text-gray-500 text-sm mt-1"}>
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
                    <tr className={""}>
                        <td>

                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"developerName"} />
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"projectName"}/>
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"unitType"}/>
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"amenities"}/>
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"location"}/>
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"size"}/>
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"totaPrice"}/>
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"paymentPlan"}/>
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"view"}/>
                        </td>
                        <td>
                            <Search onChange={handleSearch} keySearch={"handOoverTime"}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <MyMap location={CONST.oFFmodal}/>
        </>
    );
};

export default OffTable;
