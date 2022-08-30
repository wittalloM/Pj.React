import React from "react";
import '../Card/card.css';
import Subtitle from '../SubTitle/index';
import Subtitle2 from '../SubTitle2/index';

const Card = (Subtitle, Subtitle2, _Data, _info) => (
<div>

<Subtitle texto={Subtitle} />
  <Subtitle2 texto={Subtitle2} /> 
  <div className="info">
  <spam className="higthligth">{Data}</spam>

  </div>
<p> {info} </p>

</div>    
);

export default Card;