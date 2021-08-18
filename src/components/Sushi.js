import React from "react";

function Sushi({ sushi, eatSushi, sushiPic=" " }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {sushiPic===" " ? null : (
          <img
            src={sushiPic}
            alt={`${sushi.name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
