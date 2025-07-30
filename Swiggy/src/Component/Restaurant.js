import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import SimmerRest from "./SimmerRest";
import FoodCard from "./FoodCard";

export default function Restaurant() {

    const [restData, setrestData] = useState([]);

    const [dishData, setDishData] = useState([]);

    useEffect(() => {
        async function fetchData1() {
                    const proxyServer = "https://cors-anywhere.herokuapp.com/";
                    const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
                    const response = await fetch(proxyServer + swiggyAPI)
                    const data = await response.json();
                    setDishData(data?.data?.cards[0]?.card?.card);
        
                }
                fetchData1();
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
            <div className="border-b mb-4 pb-4 w-[80%] mx-auto ">
                <div className="w-[80%] mx-auto font-bold text-2xl mt-10">{dishData?.header?.title}</div>
                <div className="flex flex-wrap w-full gap-2.5 container mx-auto mt-2.5">
                    {
                        dishData?.imageGridCards?.info?.map((data)=><FoodCard key={data?.id} foodData = {data}></FoodCard>)
                    }
                </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center items-center w-[80%] container mx-auto mt-20 border-b mb-10 pb-10">
                {
                    restData.map((restData)=><RestCard key={restData.info.id} data = {restData}></RestCard>)
                }
            </div>
        </>
    )


}