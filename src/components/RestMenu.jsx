import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer';
import {RiRidingLine} from "@remixicon/react";
import { Link, useParams } from 'react-router-dom';
import {RiArrowLeftLine} from '@remixicon/react'
import MenuCards from './MenuCards';


function RestMenu() {

const [MenuInfo,setMenuInfo] = useState(null);
const [open,setOpen] =useState(0);
const [MenuCard,setMenuCard] = useState([]);
const {resId} = useParams()

useEffect(()=>{
    fetchData();
},[])

//Swiggy Menu Data Fetch
const  fetchData = async () => {
   try{ const data = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
    )
    const json = await data.json();
    console.log(json)
    setMenuInfo(json?.data?.cards[2]?.card?.card?.info)
    // console.log(json?.data?.cards[2]?.card?.card?.info)
    let filterCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((MenuCard) =>MenuCard?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(filterCards)
    setMenuCard(filterCards)

}catch(err){
        console.error("The Error is", err)
    }
}



//Shimmer UI
if(MenuInfo===null && MenuCard.length===0){
    return(
        <Shimmer/>
    )
}


const {name,cuisines,avgRating,totalRatingsString,locality} = MenuInfo;

return (
    <div className='Main-div mt-16 border-red-300 borer-2 mx-56'>    

   <Link to={"/"}><RiArrowLeftLine className='mb-10 cursor-pointer'/></Link>

    <div className="Menu-Info flex justify-between border-dashed pb-6 border-slate-300 border-b-2">
        <div className="info-part">
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h1 className='text-gray-500 text-sm mt-0'>{cuisines.join(",")}</h1>
            <div className='flex items-center mt-2'>
             <RiRidingLine className='mr-1 text-xs text-gray-500'/>
             <span className='text-sm text-gray-500'>{locality},</span>
             <span className='text-sm text-gray-500'>{(MenuInfo?.feeDetails?.fees?.[0]?.fee ?? null) / 1000}kms | ₹35 Delivery fee will apply</span>
            </div>
        </div>
        <div className="rating-part flex flex-col items-center gap-3 border-dotted border-2 border-yellow-300 rounded-lg p-2">
            <h1 className='text-yellow-500 font-bold text-lg bor'>⭐️ {avgRating}</h1>
            <h1 className='text-xs'>{totalRatingsString}</h1>
        </div>
    </div>

    {/* Accordian */}
    <div className="Menu-cards">
        {MenuCard.map((menuCard,index) => ( 
        <MenuCards 
        key={menuCard.card.card.title} 
        prop ={menuCard.card.card}
        card = {index==open?true:false}
        setOpen= {() => {setOpen(index==open?null:index)}}
        />
        ))}
    </div>
    </div>
  )
}

export default RestMenu