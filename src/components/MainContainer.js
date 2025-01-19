import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import { v4 as uuid } from 'uuid';

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortAlphabet, setSortAlphabet] = useState(false);
  const [sortPrice, setSortPrice] = useState(false);
  const [filter, setFilter] = useState("Tech");
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((data) => setStocks(data))
  }, []);

  function onAddToPortfolio(id){
    console.log(id);
    const tempPort = [...portfolio, stocks.filter((stock) => stock.id === id)[0]];
    console.log(tempPort,"tempPort");
    const setter = tempPort.map((item) => ({...item, uniqueID: uuid()}));
    setPortfolio(setter);

  }

  function onRemoveFromPortfolio(id){
    const setter = portfolio.filter((stock) => id !== stock.uniqueID)
    setPortfolio(setter)

  }

  function onAlphabetical(){
    setSortAlphabet(() => !sortAlphabet);
    setSortPrice(false);


  }
  function onPrice(){
    setSortPrice(() => !sortPrice);
    setSortAlphabet(false);
  }

  function onFilter(string){

    setFilter(string);

  }


  return (
    <div>
      <SearchBar alphabetical={sortAlphabet} price={sortPrice} filter={filter} onAlphabetical={onAlphabetical} onPrice={onPrice} onFilter={onFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddToPortfolio={onAddToPortfolio} onRemoveFromPortfolio={onRemoveFromPortfolio} alphabetical={sortAlphabet} price={sortPrice} filter={filter}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onAddToPortfolio={onAddToPortfolio} onRemoveFromPortfolio={onRemoveFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
