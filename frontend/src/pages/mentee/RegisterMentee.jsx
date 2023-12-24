import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import EditMentee from "../../features/mentee/EditMentee";

export default () => {
  return (
    <section className="mx-4">
      <div className="">
        <Heading title="メンティー登録" />
      </div>
			<div className="my-5">
        <EditMentee />
      </div>
    </section>
  )
}