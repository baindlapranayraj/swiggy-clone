import { useState } from "react";
import { LOGO_IMG } from "../config/consta";
import { Link,NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "@remixicon/react"
import useOnlineStatus from "../config/useOnlineStatus";
import { useSelector } from "react-redux";


let Header= () => {

  let btn = "Login"
  const [Button,setButton] = useState(btn)
  const status = useOnlineStatus();

  // Selector from redux-react(Subscribing the store using the selector
  const selector = useSelector((store) => store.cart.items);
 
    return (
      <div className='header bg-yellow-200 flex items-center justify-between border-2 shadow-sm py-2 px-11'>
        <div className='Image'>
       <Link to={"/"}><img src= {LOGO_IMG} className='w-20 h-20 object-cover rounded-full' alt="" /></Link>
        </div>
        <div className='Nav-Links'>
          <ul className='flex gap-7 items-center'>
            <li>Status: {status ? "🟢":"🔴"}</li>
            <li className='text-lg font-Nunito hover:text-yellow-500'><NavLink to={"/"}>Home</NavLink></li>
            <li className='text-lg font-Nunito hover:text-yellow-500' ><NavLink  to={"about"}>About Us</NavLink></li>
            <li className='text-lg font-Nunito hover:text-yellow-500' ><NavLink to={"contact"}>Contact Us</NavLink></li>
            <li className={`text-lg font-Nunito hover:text-yellow-500 ${selector.length !== 0?"text-orange-500" :"text-black"}`} ><NavLink to={"cart"} className={`flex items-center gap-1`}><RiShoppingCartLine/>- ({selector.length})</NavLink></li>
            <li className="p-2 duration-200 px-4 cursor-pointer hover:cursor-pointer border-yellow-300 border-2 hover:bg-yellow-200 bg-yellow-300"
            onClick={() => {
              Button === "Login"?setButton("Logout"):setButton("Login")
            }}
            >{Button}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;