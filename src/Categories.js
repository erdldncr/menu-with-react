import React from 'react';

const Categories = ({categories,filterItems}) => {
  
  return <div className="btn-container">
    {categories.map(item=>{
     return  <button className='filter-btn' onClick={()=>{filterItems(item)}} >{item}</button>
    })}
  </div>
};

export default Categories;
