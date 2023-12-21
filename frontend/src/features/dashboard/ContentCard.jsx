import React, { useState, useEffect } from "react";

export default (props) => {
	const { title, content } = props

  return (
    <div className="mx-auto w-1/4 rounded-lg bg-white shadow">
			<div className="p-4">
				<h3 className="text-xl font-medium text-gray-900">{title}</h3>
				<p className="mt-1 text-gray-500">{content}</p>
			</div>
		</div>
  )
}