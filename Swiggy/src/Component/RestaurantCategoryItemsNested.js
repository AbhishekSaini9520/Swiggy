import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { useState } from "react";


export default function RestaurantCategoryItemsNested({ data, foodSelect }) {

    const [isOpen, setIsOpen] = useState(true);

    const vegData = data?.itemCards?.filter((data) => "isVeg" in data?.card?.info);
    const nonvegData = data?.itemCards?.filter((data) => !("isVeg" in data?.card?.info));

    if (!isOpen) {
        return (
            <div className="w-full">
                <div className="flex justify-center items-center mt-5 ">
                    <div className="w-[60%] flex justify-between border-b border-gray-200 pb-3">
                        <div className="font-bond text-[20px] ">{data?.title}</div>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen ? "˄" : "˅"}</button>
                    </div>
                </div>
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
                            <div className="text-2xl font-bold">{data?.title}</div>
                            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen ? "˄" : "˅"}</button>
                        </div>
                    </div>
                }
                <div className="w-[60%] flex flex-col justify-center container mx-auto">
                    {
                        data?.itemCards?.filter((data) => "isVeg" in data?.card?.info).map((data) => <RestaurantCategoryItems key={data?.card?.info?.id} data={data}></RestaurantCategoryItems>)
                    }
                </div>

                <div className="w-[60%] container mx-auto h-5 bg-gray-200"></div>

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
                            <div className="text-2xl font-bold">{data?.title}</div>
                            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen ? "˄" : "˅"}</button>
                        </div>
                    </div>
                }
                <div className="w-[60%] flex flex-col justify-center container mx-auto">
                    {
                        data?.itemCards?.filter((data) => !("isVeg" in data?.card?.info)).map((data) => <RestaurantCategoryItems key={data?.card?.info?.id} data={data}></RestaurantCategoryItems>)
                    }
                </div>

                <div className="w-[60%] container mx-auto h-5 bg-gray-200"></div>

            </div>
        )
    }

    return (
        <div className=" border-b border-gray-200">
            <div className="flex justify-center items-center mt-5 ">
                <div className="w-[60%] flex justify-between">
                    <div className="text-2xl font-bold">{data?.title}</div>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">{isOpen ? "˄" : "˅"}</button>
                </div>
            </div>
            <div className="w-[60%] flex flex-col justify-center container mx-auto">
                {
                    data?.itemCards?.map((data) => <RestaurantCategoryItems key={data?.card?.info?.id} data={data}></RestaurantCategoryItems>)
                }
            </div>

        </div>
    )
}