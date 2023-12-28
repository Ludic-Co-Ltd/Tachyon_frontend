import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/auth/login.scss';
import { Cog6ToothIcon, BellIcon } from '@heroicons/react/24/outline';
import { Paths } from "../../config/Paths";
import Logo from './../../assets/images/logo.png';

export default () => {
	const Content = (props) => {
		const {link, title} = props;

		return (
			<li>
				<Link to={link} className="block py-2 pr-4 pl-3 text-primary font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
					{title}
        </Link>
      </li>
		)
	}

  return (
    <header>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-primary">Tachyon</span>
          </a>
					<div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <Content title="ダッシュボード" link={Paths.adminDashboard} />
              <Content title="メンティー" link={Paths.adminMentees} />
							<Content title="メンター" link={Paths.adminMenters} />
							<Content title="イベント" link={Paths.adminEvents} />
							<Content title="ケース" link={Paths.adminCaseStudies} />
							<Content title="ES" link={Paths.adminEntrySheets} />
							<Content title="企業情報" link={Paths.adminCompanies} />
							<Content title="業界情報" link={Paths.adminIndustries} />
							<Content title="コラム" link={Paths.adminArticles} />
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
						<BellIcon className="w-10 text-primary me-3"/>
						<Cog6ToothIcon className="w-10 text-primary"/>
          </div>
        </div>
      </nav>
		</header>
  )
}