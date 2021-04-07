import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const[menuItems,setMenuItems]=useState(items)
  const[categories,setCategories]=useState([...new Set(items.map(item=>item.category)),'all'])
  
    
  const filterItems=(category)=>{
    let arr=items.filter(item=>item.category===category)
    if(category==='all'){
      setMenuItems(items)
    }else{
      setMenuItems(arr)
    }
     
      
  }
  
  return <main className="menu section">
    <div className="title">
      <h2>Our menu</h2>
      <div className="underline"></div>
    </div>
    <Categories categories={categories} filterItems={filterItems} />
    <Menu items={menuItems}/>
  </main>
}

export default App;

