"use client"
import React, {useState} from 'react';
import MyMap from "../../_component/map";
import {CONST} from "../../_core/const";
import CustomSelect from "../../_component/components/UI/customSelect/customSelect";
import CustomCheckBox from "../../_component/components/UI/customCheckBox/customCheckBox";

const Page = () => {
    const [developerName , setDeveloperName] = useState(false)
    const [property , setProperty] = useState(0)
    let list = [
        {value:"DAMAC" , name:"DAMAC" , id:1},
        {value:"DANUBE" , name:'DANUBE' , id:2},
    ]
    const filterDeveloper = (developerList) => {
        return developerList?.filter((item) => {
            return (
                +item.id === +developerName.id
            )
        })
    }
    return (
        <div>
            <div className={"flex items-center"}>
                <div className={"w-1/5 m-2"}>
                    <CustomSelect options={list} onChange={(e) => setDeveloperName(e)}/>
                </div>
                <div className={"w-1/5 m-2"}>
                    <CustomCheckBox onCheck={(e) => setProperty(e)} label={"see property"}/>
                </div>
            </div>
            <MyMap  property={property} location={filterDeveloper(CONST.allUser)}/>
        </div>
    );
};

export default Page;
