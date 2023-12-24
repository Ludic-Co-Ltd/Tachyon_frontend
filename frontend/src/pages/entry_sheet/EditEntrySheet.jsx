import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import EditEntrySheet from "../../features/entry_sheet/EditEntrySheet";

export default () => {
  return (
    <section className="mx-4">
      <div className="">
        <Heading title="ES編集" />
      </div>
			<div className="my-5">
        <EditEntrySheet />
      </div>
    </section>
  )
}