import React, { useEffect, useState } from "react";
import Creatform from "./Creatform";
import ReportTable from "./ReportTable";
import Footer from "./Footer";
import useResource from "../hocks/useResource";
import { useAuth } from '../contexts/auth'



export default function Main() {
    const { user, login, logout } = useAuth();

    const { resources, loading, createResource, deleteResource } = useResource();

    const data = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
    const [store, setStore] = useState([])
    const [total, setTotal] = useState([])


    const sumtotals = () => {
        const sumtotal = []
        for (let i = 0; i <= store.length - 1; i++) {
            for (let j = 0; j <= store[i].hourlySales.length - 1; j++)
                if (sumtotal[j]) {
                    sumtotal[j] += store[i].hourlySales[j]
                } else {
                    sumtotal.push(store[i].hourlySales[j])
                }
        }
        setTotal([sumtotal, sumtotal.reduce((a, b) => a + b, 0)])
        console.log(total);

    }


    useEffect(() => {
        sumtotals()
    }, [store])
    
    const onCreate = ((event) => {
        event.preventDefault()
        const storeCity = {
            location: event.target.location.value,
            hourly_sales: data.map(() => {
                return Math.floor(Math.random() * parseInt(event.target.avg.value) * (parseInt(event.target.max.value) - parseInt(event.target.min.value) + 1) + parseInt(event.target.min.value))
            }),
            minimum_customers_per_hour: event.target.min.value,
            maximum_customers_per_hour: event.target.max.value,
            average_cookies_per_sale: event.target.avg.value,
            owner:user.id
        }
        const hourlySales = storeCity.hourly_sales

        const objectData = {
            location: event.target.location.value,
            hourlySales: hourlySales,
            sum: hourlySales.reduce((a, b) => a + b, 0)
            

        }
        setStore(store => [...store, objectData])

        createResource(storeCity)
        

    })

    return (
        <>
            <Creatform onCreate={onCreate} />
            {/* <ReportTable store={store} total={total} /> */}
            <Footer reports={store} />
        </>
    )
}