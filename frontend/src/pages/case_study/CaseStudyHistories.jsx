import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import companyData from "../../data/company/companies.json";
import CaseStudyCard from "../../features/case_study/CaseStudyCard";

export default () => {
	const [caseStudies, setCaseStudies] = useState(companyData);

  return (
    <section className="mb-32">
			<div className="">
        <Heading title="ケース履歴" />
				<div className="">
					{
						caseStudies.map((caseStudy, index) =>
							<CaseStudyCard {...caseStudy} key={`case-study-${index}`} />
						)
					}
				</div>
      </div>
    </section>
  )
}