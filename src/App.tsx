import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Table from './table';

function App() {
  const [countries, setCountries] = useState(50);
  const [categories, setCategories] = useState(100);

  const countriesData = Array(countries).fill(null)
  .map((_, index) => `Country ${index}`);

  const categoriesData = Array(categories).fill(null)
  .map((_, index) => `Category ${index}`);

  const data = Array(countries).fill(null)
  .map(_ => Array(categories).fill(null)
  .map(_ => Math.random()*10));

  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      <input type="number" value={countries}
        onChange={e => setCountries(parseInt(e.target.value))}/>
      <br />
      <input type="number" value={categories}
        onChange={e => setCategories(parseInt(e.target.value))}/>
      <br />
      <Table countries={countriesData} categories={categoriesData} data={data} />
    </div>
  );
}

export default App;
