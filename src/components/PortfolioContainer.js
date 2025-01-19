import React from "react";
import Stock from "./Stock";


function PortfolioContainer({portfolio, onRemoveFromPortfolio, onAddToPortfolio}) {
  let stockList = [];
  if(portfolio){
    stockList = portfolio.map((stock) => {
      console.log(stock);
      return(
        <Stock key={stock.uniqueID} stock={stock} onRemoveFromPortfolio={onRemoveFromPortfolio} onAddToPortfolio={onAddToPortfolio}/>
      )
    })
  }


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockList
      }
    </div>
  );
}

export default PortfolioContainer;
