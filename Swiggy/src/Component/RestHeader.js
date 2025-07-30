import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function RestHeader(){

    const counter = useSelector(state => state.Slice1.count);


    return(
        <>
            <div className="flex justify-between w-[90%] mx-auto mt-10 bg-gray-50 items-center px-4">
                <img className="w-40 h-12" src="https://companieslogo.com/img/orig/SWIGGY.NS_BIG-f0e9f79a.png?t=1731987060"></img>
                <Link to='/Checkout'>
                <div className="pr-4 font-bold text-2xl">Cart {`(${counter})`}</div>
                </Link>
            </div>
        </>
    )
}