import React from "react";
import IconsSVG from "./icons.svg";

export const Icons = ({ name, color, width, height }) => {
  return (
    <svg fill={color} width={width} height={height} stroke="none" baseline="">
      <use xlinkHref={`${IconsSVG}#icon-${name}`} width="20" height="20" />
    </svg>
  );
};
