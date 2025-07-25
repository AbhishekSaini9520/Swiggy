
export default function FoodCard({foodData}){

    console.log("Helloworld")

    console.log(foodData.imageID)

    return (
        <>
        <a href={foodData.action.link}>
            
            <img className="w-36 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        </>
    )
}