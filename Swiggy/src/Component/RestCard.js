
export default function RestCard({ data }) {

    return (
        <>
            <div className="w-[286] h-[294.12] rounded-2xl transform transition duration-100 hover:scale-95">
                {/* <div className="relative">

                    <img className="w-[286] h-[190.66] object-cover overflow-hidden rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data.info.cloudinaryImageId}></img>

                    <div className="text-white text-2xl font-bold absolute left-0 bottom-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-4 pl-3 pr-3 pb-2 ">{(data?.info?.aggregatedDiscountInfoV3?.header ?? '') + " " + (data?.info?.aggregatedDiscountInfoV3?.subHeader ?? '')}</div>
                </div> */}

                <div className="relative w-[286px] h-[190.66px] rounded-2xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data.info.cloudinaryImageId}
                        alt=""
                    />
                    <div className="absolute left-0 right-0 bottom-0 text-white text-2xl font-bold bg-gradient-to-t from-black/70 to-transparent pt-4 pl-3 pr-3 pb-2">
                        {(data?.info?.aggregatedDiscountInfoV3?.header ?? '') + " " + (data?.info?.aggregatedDiscountInfoV3?.subHeader ?? '')}
                    </div>
                </div>


                <div className="font-bold mt-2.5 px-2.5 text-lg whitespace-nowrap overflow-x-hidden text-ellipsis">{data.info.name}</div>

                <div className="px-2.5">
                    <span className="inline">
                        <svg
                            className="inline"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                            cx="10"
                            cy="10"
                            r="9"
                            fill="url(#paint0_linear)"
                            />
                            <path
                            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                            fill="white"
                            />
                            <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="10"
                                y1="1"
                                x2="10"
                                y2="19"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#21973B" />
                                <stop offset="1" stopColor="#128540" />
                            </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    {/* <span className="">Rating:- </span> */}
                    <span className="font-bold text-base ml-0.5">{data.info.avgRating}</span>
                    <span className="font-bold text-base">{"  " + data.info.sla.slaString}</span>
                </div>

                <div className="px-2.5 text-gray-500 font-bold whitespace-nowrap overflow-x-hidden text-ellipsis ">{data.info.cuisines.join(', ')}</div>
                <div className="px-2.5 text-gray-500 font-bold whitespace-nowrap overflow-x-hidden text-ellipsis ">{data.info.areaName}</div>

            </div>
        </>
    )
}