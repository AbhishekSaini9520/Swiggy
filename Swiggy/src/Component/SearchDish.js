
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import RestaurantCategoryItems from "./RestaurantCategoryItems";

export default function SearchDish() {
    const [food, setFood] = useState("");
    const { id } = useParams();
    const [restData, setRestData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

            try {
                const response = await fetch(proxyServer + swiggyAPI);
                const data = await response.json();

                const groupedCard = data.data?.cards?.find(card => card?.groupedCard)?.groupedCard;
                const tempData = groupedCard?.cardGroupMap?.REGULAR?.cards || [];

                const filterData = tempData.filter(item => 'title' in item?.card?.card);
                setRestData(filterData);
            } catch (err) {
                console.error("Error fetching menu:", err);
            }
        }

        fetchData();
    }, [id]);

    // Use Map to store items uniquely by ID
    const allItems = useMemo(() => {
        const itemMap = new Map();

        restData.forEach(section => {
            section?.card?.card?.itemCards?.forEach(item => {
                const info = item?.card?.info;
                if (info && !itemMap.has(info.id)) {
                    itemMap.set(info.id, info);
                }
            });

            section?.card?.card?.categories?.forEach(category => {
                category?.itemCards?.forEach(item => {
                    const info = item?.card?.info;
                    if (info && !itemMap.has(info.id)) {
                        itemMap.set(info.id, info);
                    }
                });
            });
        });
        // console.log("hello world")

        return Array.from(itemMap.values());
    }, [restData]);

    // Filter items based on search
    const filteredItems = useMemo(() => {
        return allItems.filter(item =>
            item?.name?.toLowerCase().includes(food.toLowerCase())
        );
    }, [allItems, food]);

    return (
        <div className="w-full">
            <div className="w-[60%] mx-auto flex justify-center items-center my-10">
                <input
                    value={food}
                    className="w-full py-2 px-8 mr-4 bg-gray-100 border rounded-2xl text-2xl"
                    placeholder="Search Here"
                    onChange={(e) => setFood(e.target.value)}
                />
            </div>

            <div className="w-[60%] flex flex-col justify-center container mx-auto gap-10">
                {(filteredItems.length > 0 ?? food.length > 0) ? (
                    filteredItems.map((value) => (
                        <RestaurantCategoryItems
                            key={value.id}
                            data={{ card: { info: value } }}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No matching dishes found.</p>
                )}
            </div>
        </div>
    );
}

// import { useState, useEffect, useMemo } from "react";
// import { useParams } from "react-router";
// import RestaurantCategoryItems from "./RestaurantCategoryItems"

// export default function SearchDish() {

//     const [food, setFood] = useState("");
//     let { id } = useParams();
//     const [restData, setrestData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const proxyServer = "https://cors-anywhere.herokuapp.com/";
//             const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
//             const response = await fetch(proxyServer + swiggyAPI)
//             const data = await response.json();
//             const tempData = data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//             const filterData = tempData.filter((items) => 'title' in items?.card?.card)
//             setrestData(filterData);

//         }
//         fetchData();
//     }, []);

//     const allItems = [];
//     restData.forEach(section => {
//         section?.card?.card?.itemCards?.forEach(item => {
//             if (item?.card?.info) {
//                 allItems.push(item);
//             }
//         });

//         section?.card?.card?.categories?.forEach(category => {
//             category?.itemCards?.forEach(item => {
//                 if (item?.card?.info) {
//                     allItems.push(item);
//                 }
//             });
//         });
//     });

//     // Filter items based on search input
//     const filteredItems = allItems.filter(item =>
//         item?.card?.info?.name?.toLowerCase().includes(food.toLowerCase())
//     );

//     console.log(filteredItems);



//     return (
//         <>
//             <div className="w-[60%] mx-auto flex justify-center items-center my-10">
//                 <input value={food} className="w-full py-2 px-8 mr-4  bg-gray-100 mx-auto border rounded-2xl text-2xl" placeholder="Search Here" onChange={(e) => setFood(e.target.value)}></input>
//             </div>

//             <div>{food}</div>

//             <div>
//                 {
//                     filteredItems.map((value) =><h1>{value?.card?.info?.name}</h1>)
//                 }
//             </div>

//         </>
//     )
// }