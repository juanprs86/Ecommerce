import { useState } from 'react';
import "../ItemCount/ItemCount.css";

const ItemCount = ({ onAdd, initial, stock }) => {
  
    const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
      setQty(qty + num);
    };
  
    return (
      <div className="count-container">
        <div className="count-container_contador">
          <button
            className="count-container_button"
            onClick={() => addProduct(-1)}           
            disabled={qty === initial}
          >
            -
          </button>
          <span className="count-container_qty">{qty}</span>
          <button
            className="count-container_button"
            onClick={() => addProduct(+1)}
            disabled={qty === stock}
          >
            +
          </button>
        </div>  
        <button
          className="button-primary"
          onClick={() => {
            onAdd(qty);
          }}
          disabled={stock === 0 ? true : null}
        >
          Añadir al carrito
        </button>
      </div>
    );
  };
  
  export default ItemCount;
  
    
