"use client"
import React, {useState} from 'react';
import Search from "../../../_component/components/search/search";
import {CONST} from "../../../_core/const";
import moment from "moment-jalaali";
import Filter from "../../../_component/components/UI/filter/filter";
import CustomSelect from "../../../_component/components/UI/customSelect/customSelect";
import RentTable from "../../../_component/components/table/rent-table/rent-table";
import OffTable from "../../../_component/components/table/off-table/off-table";

let list = [
    {value:"Rent" , name:"Rent"},
    {value:"Off" , name:'Off Plan'},
]
const Page = () => {
    const [tableType , setTableType] = useState("Off")

    return (
        <div>
            <div className={"flex gap-10 mt-1"}>
                <div className={"w-1/5"}>
                    <CustomSelect options={list} onChange={(e) => setTableType(e)}/>
                </div>
                {/*<Filter/>*/}
            </div>
            {
                tableType.value === "Rent" ?
                    <RentTable/>
                    :
                    <OffTable data={CONST.oFFmodal}/>
            }
        </div>
    );
};

export default Page;
