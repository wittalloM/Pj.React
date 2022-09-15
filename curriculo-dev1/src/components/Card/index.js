import React from "react";
import SubTitle from '../SubTitle/Index';
import SubTitle2 from '../SubTitleH3/Index';
import { Highlight, Info } from './styles';

const Card = ({ SubTitle, SubTitle2, date, info }) => (
  <div>
    <SubTitle texto={SubTitle} />
    <SubTitle2 subTitleH3={SubTitle2} />
    <Info>
      <Highlight> {date}</Highlight>
    </Info>
    <p>{info}</p>
  </div>
);

export default Card;