import { useState } from "react";
import "./style.scss";
import { Grade } from "./styled";

const avg = (arr: number[]) => arr
  .reduce((pv, cv) => pv+cv/arr.length, 0);

const swap = (mat: number[][], arr: string[], i: number, j: number): [number[][], string[]] => {
  const arrTemp = arr[i], matTemp = mat[i];

  arr[i] = arr[j];
  arr[j] = arrTemp;

  mat[i] = mat[j];
  mat[j] = matTemp;

  return [mat, arr];
}

// source: https://en.wikipedia.org/wiki/Insertion_sort#Algorithm
const insertionSort = (mat: number[][], arr: string[]): [number[][], string[]] => {
  for(let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j-1] > arr[j]; j--) {
      [mat, arr] = swap(mat, arr, j, j-1);
    }
  }
  return [mat, arr];
}

export interface ICategory {
  name: string;
  icon: [string, string];
}

interface IProps {
  countries: string[];
  categories: ICategory[];
  data: number[][];
}

const Table = (props: IProps) => {
  let { countries, categories, data } = props;
  const [sort, setSort] = useState<-1 | 0 | 1>(0);

  // making a local copy
  [data, countries] = [data.slice(), countries.slice()];

  if (sort !== 0) {
    [data, countries] = insertionSort(data, countries);
  }
  
  if (sort === -1) {
    data.reverse();
    countries.reverse();
  }

  data = [
    categories.map((_, category) => avg(
      countries.map((_, country) => data[country][category])
    )),
    ...data
  ];
  
  countries = [
    "All teams",
    ...countries
  ];

  return (
    <div className="main d-flex">
      <table>
        <thead>
          <tr>
            <th className="d-flex justify-content-center teams-sort">
                <div className="d-flex">
                  Teams
                  <div className="ms-1">
                    {sort === -1 && <i className="fa-solid fa-sort-down"
                      onClick={_ => setSort(0)}/>}
                    {sort === 0 && <i className="fa-solid fa-sort"
                      onClick={_ => setSort(1)}/>}
                    {sort === 1 && <i className="fa-solid fa-sort-up"
                      onClick={_ => setSort(-1)}/>}
                  </div>
              </div>
            </th>
            {categories.map(category => (
              <th className="category" key={category.name}>
                <div className="holder2 d-flex justify-content-center align-items-center">
                <i className={`mb-2 fa-${category.icon[0]} fa-${category.icon[1]}`} />
                {/* <div className="holder">
                  <div className="category d-flex justify-content-center align-items-center"> */}
                    {category.name}
                  {/* </div>
                </div> */}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((country, index) => (
            <tr key={index}>
              <th className="country">
                <div className="p-2 d-flex justify-content-center align-items-center">
                  {countries[index]}
                </div>
              </th>
              {country.map((grade, index) => (
                <td key={index}>
                  <Grade value={grade}
                    className="d-flex justify-content-center align-items-center">
                    {grade.toFixed(1)}
                  </Grade>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;