import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Logo from './../../assets/images/logo.png';
import { Cog6ToothIcon, BellIcon } from '@heroicons/react/24/outline';

export default (props) => {
	const { title, className } = props

  return (
    <h1 className={`text-primary text-xl font-bold p-4 ${className}`}>{title}</h1>
  )
}