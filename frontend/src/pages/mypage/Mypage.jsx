import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Account from "../../assets/images/account.png"
import LinkButton from "../../components/button/LinkButton";
import { Paths } from "../../config/Paths";

export default () => {
  return (
    <section className="">
      <div className="">
        <Heading title="マイページ" />
				<div className="bg-white shadow-md flex">
					<img src={Account} alt="" className="p-5 h-40" />
          <div className="my-4 ps-3 w-full">
            <div className="font-bold text-xl">aaaaa</div>
            <div className="text-xl">aaaaa</div>
            <div className="text-xl">aaaaa</div>
            <div className="text-xl">aaaaa</div>
            <LinkButton link={Paths.editProfile} title="プロフィール編集" />
          </div>
				</div>
      </div>
    </section>
  )
}