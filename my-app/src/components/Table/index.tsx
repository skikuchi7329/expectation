import React, { useState } from "react";
import { data } from "../../../data/data";

export default function Table() {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleRowClick = (index: number) => {
    const currentIndex = expandedRows.indexOf(index);
    const newExpandedRows = [...expandedRows];
    if (currentIndex === -1) {
      newExpandedRows.push(index);
    } else {
      newExpandedRows.splice(currentIndex, 1);
    }
    setExpandedRows(newExpandedRows);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>機種名</th>
          <th>狙い目</th>
          <th>やめ時</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <React.Fragment key={index}>
            <tr onClick={() => handleRowClick(index)}>
              <td className="nowrap">{row.title}</td>
              <td>{row.target}</td>
              <td>{row.quit}</td>
            </tr>
            {expandedRows.includes(index) && (
              <tr>
                <td colSpan={3}>
                  <div>
                    <p>補足: {row.additional}</p>
                    <p>リンク: {row.link}</p>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
