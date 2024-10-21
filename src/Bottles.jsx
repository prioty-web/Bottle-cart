import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data=> setBottles(data))
    },[]);
    const [cart, setCart] = useState([])
    const handleBottleCart = bottle => {
       const newCart =[...cart, bottle]
       setCart(newCart)
    }
    return (
        <div>
            <h2>Bottles Available:- {bottles.length}</h2>
            <h4>Cart :- {cart.length}</h4>
            {
                bottles.map(bottle => <Bottle key={bottle.id}
                bottle={bottle}
                handleBottleCart={handleBottleCart}></Bottle>)
            }
        </div>
    );
};
export default Bottles;