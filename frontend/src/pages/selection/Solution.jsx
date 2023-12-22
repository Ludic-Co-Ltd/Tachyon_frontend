import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import CaseStudies from "../../features/selection/CaseStudies";
import companyData from "../../data/company/companies.json";
import Zoom from "../../assets/images/zoom.jpg"

export default () => {
  const [events, setEvents] = useState(companyData);
  return (
    <section className="">
			<div className="">
        <Heading title="本日のケース" />
				<img src={Zoom} alt="" className="px-5 w-9/12 mx-auto" />
      </div>
			<div className="mt-2">
        <Heading title="みんなのケースチャレンジ" />
        <CaseStudies caseStudies={events} />
      </div>
    </section>
  )
}