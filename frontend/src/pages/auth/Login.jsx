import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Logo from './../../assets/images/logo.png';

export default () => {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <div className="bg-white rounded">
          <div className="py-5 text-center">
            <img src={Logo} className="logo mx-auto" alt="" />
            <h1 className="text-primary">Tachyon</h1>
          </div>
          <p>a</p>
        </div>
      </div>
    </section>
  )
}