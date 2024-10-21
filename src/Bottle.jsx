import './Header.css'
const Bottle = ({bottle, handleBottleCart}) => {
    const {brand, material ,price_usd} = bottle
    return (
        <div className="bottle">
            <h3>Brand :- {brand}</h3>
            <h4>Material :- {material}</h4>
            <h5>Price:-${price_usd}</h5>
            <button onClick={()=>handleBottleCart(bottle)}>Purchase</button>
        </div>
    );
};
export default Bottle;