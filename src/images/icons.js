import React from "react";
import IconsSVG from "./icons.svg";

export const Icons = ({ name, color, width, height, id }) => {
  return (
    <svg fill={color} width={width} height={height} id={id}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};
