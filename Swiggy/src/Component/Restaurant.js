import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import SimmerRest from "./SimmerRest";

export default function Restaurant() {

    const [restData, setrestData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const response = await fetch(proxyServer + swiggyAPI)
            const data = await response.json();
            setrestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        }
        fetchData();
    }, []);

    if(restData.length == 0){
        return <><SimmerRest></SimmerRest></>
    }
    
    // console.log(restData);
    return(
        <>
            <div className="flex flex-wrap gap-10 justify-center items-center w-[80%] container mx-auto mt-20">
                {
                    restData.map((restData)=><RestCard key={restData.info.id} data = {restData}></RestCard>)
                }
            </div>
        </>
    )


}