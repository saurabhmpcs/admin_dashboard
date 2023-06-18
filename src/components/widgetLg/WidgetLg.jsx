import React from "react";

import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
              alt=""
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>

          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$112.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
              alt=""
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>

          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$112.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
              alt=""
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>

          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$112.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
              alt=""
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>

          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$112.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
