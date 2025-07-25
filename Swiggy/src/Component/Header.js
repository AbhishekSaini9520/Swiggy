import { Link } from "react-router";

export default function Header(){
    return (
        <div className="bg-[#ff5200] font-serif">

            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className="flex gap-4 justify-center items-center font-bold ">
                    <a href="https://www.swiggy.com/corporate/" className="text-white crusor-poiniter">Swiggy Cooperate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" className="text-white crusor-poiniter">Partner with us</a>
                    <a href="" className="text-white crusor-poiniter border-white border-1 py-3 px-4 rounded-[12px]">Get the App</a>
                    <a href="" className="text-white crusor-poiniter bg-black py-3 px-4 rounded-2xl">Sign In</a>
                </div>

            </div>

            <div className="flex flex-col justify-center items-center pt-16 pb-8 relative">
                <img className="h-[450px] w-60 absolute  left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-[450px] w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-white W-60 text-center mx-auto pl-3 text-5xl">Order food & groceries. Discover best resturents. Swiggy it!</div>
                <div className="max-w-[70%] flex container mx-auto gap-5 mt-10 ">
                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for resturents, item or more"></input>
                </div>
            </div>

            <div className=" flex justify-center items-center px-2 pb-5">
                
                <Link className="max-w-[20%]" to = '/resturent' >
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </Link>
                
                <a className="max-w-[20%]" href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                </a>
                <a className="max-w-[20%]" href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </a>
            </div>

            
        </div>
    )
}