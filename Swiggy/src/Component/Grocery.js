import { GroceryData } from "../Utils/GroceryData"
import GroceryCard from "./GroceryCard"

export default function Grocery(){

    return(
        <>
            <div className="text-[24px] text-[#02060ceb] w-[80%] container mx-auto mt-10">Shop Grocery on Instamart</div>
            <div className="flex flex-nowrap overflow-x-auto w-[80%] gap-2.5 container mx-auto mt-2.5">
                {
                    GroceryData.map((grocerydata) => <GroceryCard key={grocerydata.id} props = {grocerydata}></GroceryCard>)
                }
            </div>
        </>
    )
}