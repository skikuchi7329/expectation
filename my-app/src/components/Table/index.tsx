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
    const menu = document.querySelector(".toggleMenu")
    function toggle() {
      const hidden = document.querySelector(".hiddenMenu");
      menu?.classList.toggle("is-active");
      hidden?.classList.toggle("is-open");
    }

    function toggleMenu () {
      toggle();
    }
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th className="width22">機種名</th>
            <th className="width22">狙い目</th>
            <th className="width22">やめ時</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ title, target, quit, additional, link, }: Props) => (
            <tr onClick={toggleMenu} className="toggleMenu">
              <th className="nowrap">{title}</th>
              <th>{target}</th>
              <th>{quit}</th>
              <th className="hiddenMenu">
                <ul>
                  <li>{additional}</li>
                  <li>{link}</li>
                </ul>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
