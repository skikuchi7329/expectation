import React, { useState } from 'react';
import { data } from '../../../data/data';

export default function MyTable() {
  const [openedMenu, setOpenedMenu] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    if (openedMenu === index) {
      setOpenedMenu(null);
    } else {
      setOpenedMenu(index);
    }
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
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <tr onClick={() => handleRowClick(index)}>
              <td>{item.title}</td>
              <td>{item.target}</td>
              <td>{item.quit}</td>
            </tr>
            {openedMenu === index && (
              <tr>
                <td colSpan={3}>
                  {item.additional && <div>{item.additional}</div>}
                  {item.link && (
                    <div>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.link}
                      </a>
                    </div>
                  )}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
