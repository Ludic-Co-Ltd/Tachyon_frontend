import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Mentors from "../../features/reservation/Mentors";
import Events from "../../features/reservation/Events";
import mentorData from "../../data/mypage/mentors.json";
import companyData from "../../data/company/companies.json";

export default () => {
  const [mentors, setMentors] = useState(mentorData);
  const [events, setEvents] = useState(companyData);
  return (
    <section className="">
      <div className="">
        <Heading title="面談予約" />
        <Mentors mentors={mentors} />
      </div>
      <div className="mt-2">
        <Heading title="イベント予約" />
        <Events events={events} />
      </div>
    </section>
  )
}