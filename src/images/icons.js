import React from "react";
import IconsSVG from "./icons.svg";

export const Icons = ({ name, color, width, height }) => {
  return (
    <svg fill={color} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};
