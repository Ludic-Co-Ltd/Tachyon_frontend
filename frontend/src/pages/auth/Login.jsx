import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Logo from './../../assets/images/logo.png';
import Input from "../../components/form/Input";

export default () => {
  return (
    <section className="p-4">
      <div className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-5">
          <img src={Logo} className="logo mx-auto" alt="logo" />
          <h1 className="font-bold text-primary text-3xl text-center">Tachyon</h1>
        </div>
        <form className="">
          <div className="mb-3">
            <Input name="email" type="email" label="email" />
          </div>
          <div className="mb-3">
            <Input name="password" type="password" label="password" />
          </div>
          <div className="flex items-center justify-end mb-3">
            <a className="inline-block align-baseline font-bold text-xs text-primary hover:text-blue-800" href="#">
              パスワードを忘れた場合
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-primary text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
              ログイン
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}