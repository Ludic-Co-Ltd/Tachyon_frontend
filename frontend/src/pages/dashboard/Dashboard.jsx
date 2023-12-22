import React, { useState, useEffect } from "react";
import '../../assets/scss/home.scss';
import Heading from "../../components/partials/Heading";
import Zoom from "../../assets/images/zoom.jpg"
import companyData from "../../data/company/companies.json";
import Events from "../../features/dashboard/Events";

export default () => {
  const [events, setEvents] = useState(companyData);

  return (
    <section className="">
      <div className="">
        <Heading title="本日のZOOM" />
				<img src={Zoom} alt="" className="px-5 w-9/12 mx-auto" />
      </div>
			<div className="my-4">
        <Heading title="イベント" />
        <Events events={events} />
      </div>
    </section>
  )
}