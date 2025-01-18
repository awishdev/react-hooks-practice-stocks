import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAddToPortfolio}) {
  const stockList = stocks.map((stock) => {
    console.log(stock);
    return(
      <Stock key={stock.id} stock={stock} onAddToPortfolio={onAddToPortfolio}/>
    )
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
