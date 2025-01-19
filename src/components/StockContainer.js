import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAddToPortfolio, onRemoveFromPortfolio, alphabetical, price, filter}) {
  let stocksSorted = [...stocks]
  if(alphabetical){
    stocksSorted = [...stocks].sort((a, b) => a.ticker.localeCompare(b.ticker));
  }
  else if(price){
    stocksSorted = [...stocks].sort((a, b) => a.price - b.price);
  }

  const stockList = stocksSorted.map((stock) => {
    //console.log(stock);
    if(stock.type === filter){
      return(
        <Stock key={stock.id} stock={stock} onAddToPortfolio={onAddToPortfolio} onRemoveFromPortfolio={onRemoveFromPortfolio}/>
      )
    }
    else{return null}
  })
  //console.log(stockList);

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
