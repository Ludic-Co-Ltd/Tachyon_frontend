import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Zoom from "../../assets/images/zoom.jpg"

export default () => {
  return (
    <section className="">
      <div className="">
        <Heading title="本日のZOOM" />
				<img src={Zoom} alt="" className="px-5" />
      </div>
			<div className="">
        <Heading title="イベント" />
      </div>
    </section>
  )
}