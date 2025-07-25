
export default function DineCard({ props }) {

    return (
        <>
            <div className="min-w-[328px] bg-white rounded-2xl overflow-hidden block object-fill shadow-md">
                <div >
                    <a href={props.cta.link} className="relative">
                        <img className="w-full h-48 object-cover bg-cover bg-center" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + props.info.mediaFiles[0].url}></img>
                        <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 box-border bg-gradient-to-t from-black/70 to-transparent pt-4 pl-3 pr-3 pb-3">
                            <p className="text-white font-bold">{props.info.name}</p>
                            <p className="text-white font-bold">{props.info.rating.value}</p>
                        </div>

                    </a>
                    <a href={props.cta.link}>

                    <div>
                        <div className="flex justify-between mx-2.5">
                            <p>{props.info.cuisines[0] + props.info.cuisines[1]}</p>
                            <p>{props.info.costForTwo}</p>
                        </div>
                        <div className="flex justify-between mx-2.5">
                            <p>{props.info.locationInfo.formattedAddress}</p>
                            <p>{props.info.locationInfo.distanceString}</p>
                        </div>
                        <div className="inline-flex items-center bg-gray-200 px-2 rounded-2xl mt-2.5 mx-2.5">

                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + props.info.vendorOffer.offerHighlights[0].logoCtx.logo} className="h-[1em] mr-2"></img>
                            <p className="m-0">
                            {props.info.vendorOffer.offerHighlights[0].logoCtx.text}
                                
                            </p>
                            
                        </div>
                        <div className="flex justify-between bg-[#1ba672] px-1 rounded-[10px] mt-2.5 py-2 font-bold text-white mx-2.5">
                            <div className="inline-flex items-center pl-1">
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + props.info.offerInfoV3.offerLogo.logo} className="h-[1.5rem] mr-2"></img>
                                <p className="m-0">{props.info.offerInfoV3.vendorOffer.title + props.info.offerInfoV3.vendorOffer.subtitle}</p>

                            </div>

                            <div className="pr-1">
                                <p>{props.info.offerInfoV3.vendorOffer.subtext}</p>
                            </div>

                        </div>
                        <div className="flex justify-between bg-[#1ba672] px-1 rounded-[10px] mt-2.5 py-2 font-bold text-white mb-2.5 mx-2.5">
                            <p>{props.info.customerOffer?.info?.description}</p>

                        </div>
                    </div>
                    </a>

                </div>
            </div>




        </>
    )
}