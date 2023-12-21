import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import ContentCard from "../../features/dashboard/ContentCard";
import {Table, Thead} from "../../components/partials/Table";

export default () => {
  const tableData = {
    name: '黒木',
    product_name: 'スタンダード',
    price: '20000円',
    status: '振込済',
    date: '2023年12月25日',
  }
  const numbers = [...Array(10).keys()]

  return (
    <section className="mx-4">
      <div className="">
        <Heading title="売上" />
				<div className="flex ">
          <ContentCard title="今月売上" content="2000万" />
          <ContentCard title="今月支出" content="2000万" />
          <ContentCard title="前月利益比較" content="11%" />
        </div>
      </div>
			<div className="my-5">
        <Table>
          <Thead>
            <tr>
              <th scope="col" className="px-6 py-3">メンティー名/メンター名</th>
              <th scope="col" className="px-6 py-3">商品名/委託名</th>
              <th scope="col" className="px-6 py-3">金額</th>
              <th scope="col" className="px-6 py-3">ステータス</th>
              <th scope="col" className="px-6 py-3">日付</th>
            </tr>
          </Thead>
          <tbody>
            {
              numbers.map((number, index) => 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                  <td className="px-6 py-4">{tableData.name}</td>
                  <td className="px-6 py-4">{tableData.product_name}</td>
                  <td className="px-6 py-4">{tableData.price}</td>
                  <td className="px-6 py-4">{tableData.status}</td>
                  <td className="px-6 py-4">{tableData.date}</td>
                </tr>
              )
            }
        </tbody>
        </Table>
      </div>
    </section>
  )
}