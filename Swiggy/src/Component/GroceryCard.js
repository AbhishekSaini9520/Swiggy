
export default function GroceryCard({props}){

    return(
        <>
        <div className="flex flex-col container mx-auto w-[184px] h-[240px]">
            <a href={props.action.link}>
                <img className="w-36 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+props.imageId}></img>
            </a>    
            <div className="w-36 h-12 text-[20px] font-bold text-center text-[#02060cbf]">{props.action.text}</div>
        </div>
        </>
    )
}