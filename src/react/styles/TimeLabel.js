import React, { useState, useEffect } from "react";
import styled from "styled-components";
import format from "date-fns/format";

const Label = styled.p`
  position: absolute;
  top: -65px;
  width: 100%;
  text-align: center;
  color: #79b0f6;
  font-weight: 300;
  font-size: 20px;
`;

const TimeLabel = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const time = date.toLocaleTimeString();

  return <Label>the time is now {time}</Label>;
};

export default TimeLabel;
