import { useState } from "react";
import "./style.scss";
import Table, { ICategory } from "../../table";
import data from "../../data.json";

const Page = () => {
  return (
    <div className="w-100 p-5 page">
      <div className="mb-5">
        <span className="page-title">Comparison</span>
      </div>
      <div className="p-5 page-body">
        <Table countries={data.countries} categories={data.categories as ICategory[]} data={data.data} />
      </div>
    </div>
  );
}

export default Page;