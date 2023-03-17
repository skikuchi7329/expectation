import StyledTable from "./index.styled";
import { data } from "../../../data/data";

type Props = {
  title: string;
  target: string | number;
  quit: string;
  additional?: string;
  link?: string;
};

const Table = () => {
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th className="width22">機種名</th>
            <th className="width22">狙い目</th>
            <th className="width22">やめ時</th>
            <th className="width24">補足</th>
            <th>リンク</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ title, target, quit, additional, link }: Props) => (
            <tr>
              <th className="nowrap">{title}</th>
              <th>{target}</th>
              <th>{quit}</th>
              <th>{additional}</th>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
