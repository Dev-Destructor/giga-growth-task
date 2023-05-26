import React from "react";

function DataTable({ data }) {
  if (!data["Time Series (Daily)"]) {
    return (
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Adjusted Close</th>
              <th>Volume</th>
              <th>Divident Amount</th>
              <th>Split Coefficient</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tfoot>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Adjusted Close</th>
              <th>Volume</th>
              <th>Divident Amount</th>
              <th>Split Coefficient</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  } else {
    return (
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Adjusted Close</th>
              <th>Volume</th>
              <th>Divident Amount</th>
              <th>Split Coefficient</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data["Time Series (Daily)"]).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{data["Time Series (Daily)"][key]["1. open"]}</td>
                <td>{data["Time Series (Daily)"][key]["2. high"]}</td>
                <td>{data["Time Series (Daily)"][key]["3. low"]}</td>
                <td>{data["Time Series (Daily)"][key]["4. close"]}</td>
                <td>{data["Time Series (Daily)"][key]["5. adjusted close"]}</td>
                <td>{data["Time Series (Daily)"][key]["6. volume"]}</td>
                <td>
                  {data["Time Series (Daily)"][key]["7. dividend amount"]}
                </td>
                <td>
                  {data["Time Series (Daily)"][key]["8. split coefficient"]}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Adjusted Close</th>
              <th>Volume</th>
              <th>Divident Amount</th>
              <th>Split Coefficient</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default DataTable;
