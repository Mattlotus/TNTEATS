
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [name, setName] = useState("Matthew");
  const [foodItems, setFoodItems] = useState("Wings");
  const [count, setCount] = useState(0);
  

  let food = [
   {foodname: "Mac and Cheese",
   image:('https://www.makeitgrateful.com/wp-content/uploads/2018/08/5D4B3277-Creamy-Baked-Macaroni-Cheese-a-plated-dish-of-macaroni-on-a-white-table-next-to-colby-jack-cheese-and-cilantro-1-768x512.jpg')},
   {foodname :"wings",
    image : ('https://coppercowcoffee.com/cdn/shop/articles/untitled-design-61-1675801241132.png?v=1675802482')},
   {foodname: "Burgers",
   image: ('https://s3-media0.fl.yelpcdn.com/bphoto/pdM5ri1CevSf_JI6qJmTSw/348s.jpg')},
   {foodname: "red velvet",
   image: ('https://kitchencookbook.net/wp-content/uploads/2018/09/cake-e1543313825769.png')},
   {foodname: "ice cream",
   image: ('https://pngimg.com/d/ice_cream_PNG98176.png')},
  ];

   
  

  const changeName = () => {
    let firstname = prompt("What is Your Name");
    setName(firstname);
  };

  const changeCount = () => {

    if(count < 4){
      setCount(count + 1);
    }else {
      setCount(0)
    }
  };
  
  useEffect(() => {
    setFoodItems(food[count]);
  
  },[count] );



  return (
    
    <div className="App">
      <h1> TNT Eats and my name is {name}</h1>
      <button onClick={changeName}>Change Name</button>
      <hr />
      <h2> Food: {foodItems.foodname} </h2>
      <img src={foodItems.image} alt=''/>


      <button onClick={changeCount}>Change food</button>
      
      <hr/>
    </div>
  );
}

 

export default App;
