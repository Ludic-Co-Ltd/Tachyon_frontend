import React, { useState, useEffect } from "react";

export default (props) => {
	const { title, bgColor, bgColorHover, className } = props

  return (
    <button 
			className={`${className ? className : "py-1 px-4 rounded-full text-xs"} ${bgColor} hover:${bgColorHover} text-white font-bold`}
		>
			{title}
		</button>
  )
}