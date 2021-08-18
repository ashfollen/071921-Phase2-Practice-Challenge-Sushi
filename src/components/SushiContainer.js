import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, eatSushi, stipend }) {
  const [ sushiIdArray, setsushiIdArray ] = useState([0, 4])

  function nextSushiArray() { 
    let newSushiList = sushiIdArray.map( (id) => (id + 4) );
    setsushiIdArray(newSushiList);  
  }

  const displaySushiList = sushiList.filter((sushi) => sushi.id > sushiIdArray[0] && sushi.id <= sushiIdArray[1])
  console.log("SUSHI CONTAINER", displaySushiList)

  return (
    <div className="belt">
      {displaySushiList.map((sushi) => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} sushiPic={sushi['img_url']} />)}
          <MoreButton nextSushiArray={nextSushiArray} />
    </div>
  );
}

export default SushiContainer;
