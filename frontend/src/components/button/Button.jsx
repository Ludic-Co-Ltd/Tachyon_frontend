import React, { useState, useEffect } from "react";

export default (props) => {
	const { title, bgColor, bgColorHover } = props

  return (
    <button 
			className={`${bgColor} hover:${bgColorHover} text-white font-bold py-1 px-4 rounded-full text-xs`}
		>
			{title}
		</button>
  )
}