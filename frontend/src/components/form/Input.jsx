import React, { useState, useEffect } from "react";

export default (props) => {
	const {name, label, type} = props;

	return (
		<div>
			<input 
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
				id={name}
				type={type} 
				placeholder={label}
			/>
		</div>
	)
}
