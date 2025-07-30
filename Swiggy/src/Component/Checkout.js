import { useSelector } from "react-redux"
import RestaurantCategoryItems from "./RestaurantCategoryItems";

export default function Checkout() {

    const items = useSelector(state => state.Slice1.item);

    return (
        <>
            <div className="flex justify-center items-center mt-10 mb-3">
                <div className="w-[60%] flex justify-between">
                    <div className="text-2xl font-bold">My Cart</div>
                </div>
            </div>
            <div className="w-[60%] flex flex-col justify-center container mx-auto gap-10">
                {
                    items.map((value) => <RestaurantCategoryItems key={value.id} data={{ card: { info: value } }}></RestaurantCategoryItems>)
                }
            </div>
        </>
    )
}