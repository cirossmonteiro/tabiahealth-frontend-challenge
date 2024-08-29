import "./style.scss";
import { Grade } from "./styled";

interface IProps {
  countries: string[];
  categories: string[];
  data: number[][];
}

const Table = (props: IProps) => {
  const { countries, categories, data } = props;
  console.log(9, { countries, categories, data });
  return (
    <div className="main">
      <table>
        <thead>
          <tr>
            <th>here</th>
            {categories.map(category => (
              <th><div className="category">{category}</div></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((country, index) => (
            <tr>
              <th>{countries[index]}</th>
              {country.map(grade => (
                <td><Grade value={grade}>{grade.toFixed(1)}</Grade></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;