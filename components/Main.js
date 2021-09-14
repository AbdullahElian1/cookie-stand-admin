import React,{ useState } from "react";
import Creatform from "./Creatform";
import ReportTable from "./ReportTable";
import Footer from "./Footer";


export default function Main() {
    const data=['6am'	,'7am',	'8am',	'9am',	'10am',	'11am',	'12pm',	'1pm',	'2pm',	'3pm',	'4pm',	'5pm',	'6pm',	'7pm']
    const [store , setStore]=useState([])
    const [total , setTotal]=useState([])

   
     const  sumtotals =()=>{ 
        const sumtotal=[]  
         for (let i=0;i<=store.length-1;i++){
            for (let j=0;j<=store[i].hourlySales.length-1;j++)
                if (sumtotal[j]){
                    sumtotal[j]+=store[i].hourlySales[j]
                }else{
                sumtotal.push(store[i].hourlySales[j])
                }
        }
        setTotal([sumtotal,sumtotal.reduce((a, b) => a + b, 0)])
        console.log(total);

    }
    

    const onCreate =((event)=>{
        event.preventDefault()
        const storeCity={
            location:event.target.location.value,
            min:event.target.min.value,
            max:event.target.max.value,
            avg:event.target.avg.value
        }
        const hourlySales=data.map(()=>{
            return Math.floor(Math.random() * parseInt(storeCity.avg) * (parseInt(storeCity.max) - parseInt(storeCity.min)+ 1) + parseInt(storeCity.min))
         })
        
        const objectData={
            location:event.target.location.value,
            hourlySales:hourlySales,
            sum:hourlySales.reduce((a, b) => a + b, 0)

        }
        setStore(store => [...store, objectData])
        sumtotals()       

    })
    
    return (
        <>
        <Creatform onCreate={onCreate}/>
        <ReportTable store={store} total={total} />
        <Footer reports={store} />
        </>
    )
}