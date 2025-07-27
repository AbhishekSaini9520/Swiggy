
export default function RestaurantCategoryItems({ data }) {


    const rating = parseFloat(data?.card?.info?.ratings?.aggregatedRating?.rating);

    let ratingColor = "text-white";
    if(rating >= 4.0) ratingColor = "text-green-700";
    else if(rating >= 3.0) ratingColor = "text-green-500";
    else if(rating >= 2.0) ratingColor = "text-yellow-500";
    else if(rating >= 0) ratingColor = "text-red-500";

    let svgColor = "#ffffff"; 
    if (rating >= 4.0) svgColor = "#15803d";      
    else if (rating >= 3.0) svgColor = "#22c55e"; 
    else if (rating >= 2.0) svgColor = "#eab308"; 
    else if (rating >= 0) svgColor = "#ef4444";   


    // const rating = parseFloat(data?.card?.info?.ratings?.aggregatedRating?.rating ?? "-1");

    // // Function to get colors based on rating
    // const getColorByRating = (rating) => {
    //     if (rating >= 4.0) return { text: "text-green-700", hex: "#15803d" };
    //     else if (rating >= 3.0) return { text: "text-green-500", hex: "#22c55e" };
    //     else if (rating >= 2.0) return { text: "text-yellow-500", hex: "#eab308" };
    //     else if (rating >= 0) return { text: "text-red-500", hex: "#ef4444" };
    //     return { text: "text-white", hex: "#ffffff" };
    // };

    // const { text: ratingColor, hex: svgColor } = getColorByRating(rating);

    return (
        <>
            <div className="flex justify-between items-center border-b border-gray-200  pb-10 pt-5">
                <div className="flex-1 max-w-[70%]">

                    {/* Name */}
                    <h1 className="font-semibold text-[18px] text-[#02060cbf]">{data?.card?.info?.name}</h1>

                    {/* Price */}
                    <div className="justify-center items-center">

                        <span className="font-semibold text-[18px]">{"₹ " + ((data?.card?.info?.price ?? data?.card?.info?.defaultPrice) / 100)}</span>
                        <span className="text-center ml-2 font-semibold text-[12px] text-[#02060c99]">{data?.card?.info?.category}</span>
                    </div>

                    {/* Rating */}
                    <div>
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
                                    fill={`url(#paint0_linear_${rating})`}
                                />
                                <path
                                    d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                                    fill="white"
                                />
                                <defs>
                                    <linearGradient
                                        id={`paint0_linear_${rating}`}
                                        x1="10"
                                        y1="1"
                                        x2="10"
                                        y2="19"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor={svgColor} />
                                        <stop offset="1" stopColor={svgColor} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>

                        <span className={`pl-2 font-bold ${ratingColor}`}>{rating?.toString()}</span>
                        {data?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 && (
                            <span className="">{"(" + (data?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 ?? "")+")"  }</span>
                        )}
                    </div>

                    {/* Description */}
                    <div className="font-extralight text-base whitespace-break-spaces text-[#02060c99]">{data?.card?.info?.description}</div>

                </div>

                {/* <div className="flex flex-col justify-center items-center">
                <img className="w-39 h-36 rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data?.card?.info?.imageId}></img>
                <button className="rounded-xl text-base text-green-600 px-6 py-2 shadow-md border border-white bg-white">ADD</button>
                </div> */ }

                {/* Image  */}
                <div className="relative w-48">
                    <img
                        className="w-full h-44 rounded-2xl object-cover"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data?.card?.info?.imageId}
                        alt="Food Image"
                    />
                    <button
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl text-base text-green-600 px-6 py-2 shadow-lg border border-gray-200 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-bold"
                    >
                        ADD
                    </button>
                </div>
            </div>
        </>
    )
}