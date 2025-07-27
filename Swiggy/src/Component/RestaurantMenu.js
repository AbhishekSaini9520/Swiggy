import { useParams } from "react-router"
import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerItems from "./ShimmerItems";
import { Link } from "react-router";

export default function RestaurantMenu(){

    let {id} = useParams();
    console.log(id);

    const [restData, setrestData] = useState([]);



    const [selected, setSelected] = useState(null);
    

    useEffect(() => {
            async function fetchData() {
                const proxyServer = "https://cors-anywhere.herokuapp.com/";
                const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
                const response = await fetch(proxyServer + swiggyAPI)
                const data = await response.json();
                const tempData = data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterData = tempData.filter((items)=>'title' in items?.card?.card)
                setrestData(filterData);
    
            }
            fetchData();
        }, []);

        if(restData.length == 0){
            return <ShimmerItems></ShimmerItems>
        }

        // console.log(restData);

    return(
        <>
            <div className="w-[60%] mx-auto flex justify-center items-center my-10">
                <Link className="w-full" to={`/city/delhi/${id}/search`}>
                <p className="w-full py-4 px-8 mr-4 text-center bg-gray-100 mx-auto border rounded-2xl text-2xl">Search for dishes</p>
                </Link>
            </div>

            <div className="w-[60%] mx-auto flex gap-2.5 mt-10">
                <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="veg"?"bg-green-400":"bg-gray-300"}`} onClick={()=>setSelected(selected==="veg"?null:"veg")}>Veg</button>
                <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="nonVeg"?"bg-red-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==="nonVeg"?null:"nonVeg")}>Non Veg</button>
            </div>


            <div className="mb-20">
                {
                    restData?.map((data) => <RestaurantCategory key={data?.card?.card?.title} data = {data} foodSelect = {selected}></RestaurantCategory>)
                }
            </div>

   

            

        </>
    )
}