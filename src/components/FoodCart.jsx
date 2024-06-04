import React from 'react';


const FoodCarts = ({ prop }) => {
  if (!prop.info) {
    // If prop.info is undefined, return null or any other fallback JSX
    return null;
  }

  const { info } = prop;
  // console.log(info)
  const {name,cloudinaryImageId,cuisines,avgRating,costForTwo} = info

  return (
   <div className='res-card hover:-translate-y-2 flex flex-col justify-between w-64 rounded-lg duration-300 space-y-2 cursor-pointer m-3 overflow-hidden shadow-2xl'>
    <div>
  <img
    className='rounded-2xl w-full h-60 object-cover'
    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
    alt=''
  />
  <div className='food-info bg-slate-100 p-4'>
    <h1 className='Food-Name text-xl font-medium text-gray-800'>{name}</h1>
    <p className='Food-Places text-gray-600 text-sm'>{cuisines.join(', ')}</p>
  </div>
  </div>
  <div className='Product-Price flex justify-between items-center p-4 bg-yellow-100'>
    <h1 className='text-yellow-500 text-lg font-bold'>{avgRating} ⭐️</h1>
    <h1 className='text-gray-800 text-lg font-bold'>{`${costForTwo} ₹`}</h1>
  </div>
</div>

  );
};



export default FoodCarts;
