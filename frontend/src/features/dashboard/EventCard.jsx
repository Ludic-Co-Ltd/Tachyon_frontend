import React, { useState, useEffect } from "react";
import Company from "../../assets/images/company.png";
import Button from "../../components/button/Button";

export default (props) => {
	const { name, id } = props

  return (
    <div className="">
			<div className="text-lg">{name}</div>
			<div className="text-center font-bold">{name}</div>
			<img src={Company} alt="" className="company-logo" />
		</div>
  )
}