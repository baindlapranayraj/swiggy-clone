import { useState,useEffect } from 'react';
import FoodCarts from './FoodCart';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

function Body() {
    const [restaurants, setRestaurants] = useState([]); 
    const [searchText,setSearchText] = useState("")
    const [checkRest,setCheckRest] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await response.json();
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCheckRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    }
  
    const handleFilterTopRated = () => {
      const filteredList = checkRest.filter((res) => res.info.avgRating > 4.5);
      setRestaurants(filteredList);
    };


  return (
    <div>
         <div className='mainBody px-3'>
        <div className="filter flex items-center justify-center gap-2">
          <div className="search flex items-center justify-center">
            <div className="flex items-center">
              <input 
                type="text" 
                className="search-input w-64 px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400 shadow-sm mr-2"
                placeholder="Search for restaurants..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value)
                }}
              />
              <button 
                className="search-button px-4 py-2 rounded-md bg-amber-400 text-white font-semibold hover:bg-amber-600 shadow-md transition duration-300"
                onClick={() => {
                //   console.log(searchText);
                 const searchRender = checkRest.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                 setRestaurants(searchRender)
                //  console.log(searchRender)
                }}
              >
                Search
              </button>
            </div>
          </div>   
          <button
            className='FilterBtn hover:bg-yellow-300  p-2 px-3 rounded-lg bg-slate-100 border-2 border-yellow-300 duration-300 m-4'
            onClick={handleFilterTopRated}
          >
            Top Rated ⭐️
          </button>
        </div>
        <div className="restro-cards flex gap-4 justify-center items-center flex-wrap mt-4">
          {!restaurants.length && <Shimmer/>}
          {restaurants.map((restaurant) => (
           <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
            <FoodCarts prop={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Body