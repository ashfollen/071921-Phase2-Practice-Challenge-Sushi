import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
 const [ sushiList, setSushiList ] = useState([]);
 const [ stipend, setStipend ] = useState(100);
 const [ plates, setPlates ] = useState([])
 

 function eatSushi(sushi, plates) {
   fetch(`${API}/${sushi.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( {img_url: " "} ),
   })
   .then(resp => resp.json())
   .then(() => setSushiList(
     sushiList.map((prevSushi) =>
     prevSushi.id !== sushi.id ? prevSushi : {...prevSushi, img_url: " "})
   ));
   sushiBudget(sushi);
   // setPlates([...plates, sushi]) ERROR: plates is not iterable at eatSushi, at onClick
 }

 function sushiBudget(sushi) {
   console.log("IN SUSHI BUDGET", typeof(sushi.price), "STIPEND", typeof(stipend))
   setStipend(stipend-(sushi.price))
 }

 useEffect(() => {
   fetch(API)
   .then(resp => resp.json())
   .then(data => setSushiList(data))
 }, [])

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} eatSushi={eatSushi} stipend={stipend} />
      <Table stipend={stipend} plates={plates} />
    </div>
  );
}

export default App;

// Component Hierarchy
//
// App
// -- SushiContainer
// ---- Sushi
// ---- MoreButton
// -- Table
