import { useState } from "react"
import RestaurantCategoryItems from "./RestaurantCategoryItems"
import RestaurantCategoryItemsNested from "./RestaurantCategoryItemsNested"


export default function RestaurantCategory({ data, foodSelect }) {

    const [isOpen, setIsOpen] = useState(true);

    const vegData = data?.card?.card?.itemCards?.filter((data) => "isVeg" in data?.card?.info);
    const nonvegData = data?.card?.card?.itemCards?.filter((data) => !("isVeg" in data?.card?.info));

    //Sub Category
    if ("categories" in data?.card?.card) {

        return (
            <div className="w-fill ">
                {/* <div className="flex justify-center items-center mt-10">
                    <div className="w-[60%] text-2xl font-bold">{data?.card?.card?.title}</div>
                </div> */}
                <div className="flex justify-center items-center mt-10 mb-3">
                    <div className="w-[60%] flex justify-between">
                        <div className="text-2xl font-bold">{data?.card?.card?.title}</div>
                        {/* <button onClick={()=>setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen?"˄":"˅"}</button> */}
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center container mx-auto gap-3">
                    {
                        data?.card?.card?.categories?.map((data) => <RestaurantCategoryItemsNested key={data?.title} data={data} foodSelect={foodSelect}></RestaurantCategoryItemsNested>)
                    }
                </div>
                <div className="w-[60%] container mx-auto h-5 bg-gray-200"></div>

            </div>
        )
    }


    if (!isOpen) {
        return (
            <div className="w-full">
                <div className="flex justify-center items-center mt-10 mb-3">
                    <div className="w-[60%] flex justify-between">
                        <div className="text-2xl font-bold">{data?.card?.card?.title}</div>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen ? "˄" : "˅"}</button>
                    </div>
                </div>
                <div className="w-[60%] container mx-auto h-5 bg-gray-200"></div>
            </div>
        )
    }


    // Veg 
    if (foodSelect === "veg") {
        return (
            <div className="w-full ">
                {vegData?.length !== 0 &&

                    <div className="flex justify-center items-center mt-10 mb-3">
                        <div className="w-[60%] flex justify-between">
                            <div className="text-2xl font-bold">{data?.card?.card?.title}</div>
                            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen ? "˄" : "˅"}</button>
                        </div>
                    </div>
                }
                <div className="w-[60%] flex flex-col justify-center container mx-auto gap-10 ">
                    {
                        data?.card?.card?.itemCards?.filter((data) => "isVeg" in data?.card?.info).map((data) => <RestaurantCategoryItems key={data?.card.info.id} data={data}></RestaurantCategoryItems>)
                    }
                </div>

                {vegData?.length !== 0 &&

                    <div className="w-[60%] container mx-auto h-5 bg-gray-200"></div>
                }

            </div>
        )
    }
    // NonVeg
    if (foodSelect === "nonVeg") {
        return (
            <div className="w-full ">
                {nonvegData.length !== 0 &&

                    <div className="flex justify-center items-center mt-10 mb-3">
                        <div className="w-[60%] flex justify-between">
                            <div className="text-2xl font-bold">{data?.card?.card?.title}</div>
                            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen ? "˄" : "˅"}</button>
                        </div>
                    </div>
                }
                <div className="w-[60%] flex flex-col justify-center container mx-auto gap-10 ">
                    {
                        data?.card?.card?.itemCards?.filter((data) => !("isVeg" in data?.card?.info)).map((data) => <RestaurantCategoryItems key={data?.card.info.id} data={data}></RestaurantCategoryItems>)
                    }
                </div>

                {nonvegData.length !== 0 &&
                    <div className="w-[60%] container mx-auto h-5 bg-gray-200"></div>
                }

            </div>
        )
    }



    return (
        <>
            <div className="w-full ">
                <div className="flex justify-center items-center mt-10 mb-3">
                    <div className="w-[60%] flex justify-between">
                        <div className="text-2xl font-bold">{data?.card?.card?.title}</div>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen ? "˄" : "˅"}</button>
                    </div>
                </div>
                <div className="w-[60%] flex flex-col justify-center container mx-auto gap-10 ">
                    {
                        data?.card?.card?.itemCards?.map((data) => <RestaurantCategoryItems key={data?.card.info.id} data={data}></RestaurantCategoryItems>)
                    }
                </div>

                <div className="w-[60%] container mx-auto h-5 bg-gray-200"></div>

            </div>
        </>
    )
}

