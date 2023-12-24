import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import EditMentee from "../../features/mentee/EditMentee";

export default () => {
  return (
    <section className="mx-4">
      <div className="">
        <Heading title="メンティー編集" />
      </div>
			<div className="my-5">
        <EditMentee />
      </div>
    </section>
  )
}