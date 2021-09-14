import React,{ useState } from "react";
import Creatform from "./Creatform";
import ReportTable from "./ReportTable";


export default function Main() {
    const data=['6am'	,'7am',	'8am',	'9am',	'10am',	'11am',	'12pm',	'1pm',	'2pm',	'3pm',	'4pm',	'5pm',	'6pm',	'7pm']
    const [store , setStore]=useState([])
    const onCreate =((event)=>{
        event.preventDefault()
        const storeCity={
            location:event.target.location.value,
            min:event.target.min.value,
            max:event.target.max.value,
            avg:event.target.avg.value
        }
        const objectData={
            location:event.target.location.value,
            hourlySales:data.map(()=>{
               return Math.floor(Math.random() * parseInt(storeCity.avg) * (parseInt(storeCity.max) - parseInt(storeCity.min)+ 1) + parseInt(storeCity.min))
            })

        }
        setStore(store => [...store, objectData])
        console.log(store);
    })
    
    return (
        <>
        <Creatform onCreate={onCreate}/>
        <ReportTable report={store} data={data}/>
        </>
    )
}