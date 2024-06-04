// import { useContext, useState } from "react";
import {RiArrowDownSLine} from "@remixicon/react"
import { useDispatch } from "react-redux";
import { addItem } from "../config/cartSlice";


const MenuCards = ({prop,card,setOpen})=>{
    // const [card,setCard] = useState(false);
    // console.log(prop)
    const {title,itemCards,categories}=prop;

    const dispatch = useDispatch()

    const handleCart = (cartCard) => {
      dispatch(addItem(cartCard))
    }
 


    return (
        <div className="bg-yellow-200 rounded-lg p-4 px-7 mt-5">
          <button className="flex justify-between items-center w-full border-b-2 border-yellow-500 pb-2" onClick={() => setOpen()}>
            <p className="font-bold text-lg">{title} ({itemCards?.length ?? categories[0].itemCards.length })</p>
            <p className={`text-2xl transition-all duration-200 transform ${card ? "rotate-180" : "rotate-0"}`}><RiArrowDownSLine/></p>
          </button>

          <div className={`grid transition-all duration-300 ease-out ${card ? "opacity-100 grid-rows-[1fr]" : "grid-rows-[0fr] opacity-0"}`}>
            <div className={`overflow-hidden ${card ? "mt-4" : "mt-0"}`}>
            
            {itemCards && itemCards.map((itemCard) => (
                <div key={itemCard.card.info.id} className="card1 flex items-center justify-between border-dashed border-zinc-600 py-7 border-b-2">
                  <div className="info-part">
                    <h1 className="text-lg font-normal">{itemCard.card.info.name}</h1>
                    <h1 className="text-sm text-slate-600">₹{itemCard.card.info.price ? (itemCard.card.info.price / 100) : 9.9}</h1>
                    <h1 className="text-[10px] text-gray-600 mt-3">{itemCard.card.info.description ?? ""}</h1>
                  </div>
                  <div className="img-part relative bottom-7">
                    <img className="h-[96px] w-[118px] absolute rounded-md object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${itemCard.card.info.imageId}`} alt="" />
                    <button onClick={()=>handleCart(itemCard)} className="relative top-16 bg-slate-50 rounded-md px-10 shadow-md py-2 text-green-400 text-center hover:bg-yellow-400 hover:text-zinc-100 transition duration-300 ease-in-out transform hover:scale-105">Add</button>
                  </div>
                </div>
             ))}

            </div>
          </div>
          
        </div>
      ); 
}

export default MenuCards;