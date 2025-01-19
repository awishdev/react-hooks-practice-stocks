import React from "react";

function Stock({stock, onAddToPortfolio, onRemoveFromPortfolio}) {

  function handleClick(){
    console.log(stock,"here")
    if(`uniqueID` in stock){
      console.log("called remove")
      onRemoveFromPortfolio(stock.uniqueID)
    }
    else{
      console.log("called add")
      onAddToPortfolio(stock.id)
    }
    console.log(stock.uniqueID in stock);
  }


  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
