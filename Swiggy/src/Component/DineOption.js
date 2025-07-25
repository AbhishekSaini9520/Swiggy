import { dineoutRestaurants } from "../Utils/DineData"
import DineCard from "./DineCard"

export default function DineOption(){


    return (
        <div className="">
            <p className="text-[24px] text-[#02060ceb] w-[80%] container mx-auto mt-10">Discover best restaurants on Dineout</p>
            <div className="flex gap-4 flex-wrap justify-center items-center ">
                {
                    
                    dineoutRestaurants.map((dineData) => <DineCard key={dineData.info.id} props={dineData}></DineCard>)
                }
            </div>
        </div>
    )
}