import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DataTable from "../components/DataTable";
import SendEmail from "../components/SendEmail";

function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState("IBM");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${selectedCompany}&apikey=YourAPIKEY`
      );
      await response.json().then((data) => {
        setData(data);
      });
    };
    fetchData();
  }, [selectedCompany]);

  const companies = {
    IBM: "IBM",
    "Tesco PLC": "TSCO.LON",
    "Shopify Inc": "SHOP.TRT",
    "GreenPower Motor Company Inc": "GPV.TRV",
    "Daimler AG": "DAI.DEX",
    "Reliance Industries Limited": "RELIANCE.BSE",
    "SAIC Motor Corporation": "600104.SHH",
    "China Vanke Company Ltd ": "000002.SHH",
  };

  return (
    <div>
      <Navbar />
      <div className="flex h-14 items-center justify-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <div className="flex-1">
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue="IBM"
            onChange={(event) => setSelectedCompany(event.target.value)}
          >
            {Object.keys(companies).map((company) => (
              <option key={companies[company]} value={companies[company]}>
                {company}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <SendEmail data={data} />
        </div>
      </div>

      <DataTable data={data} />
    </div>
  );
}

export default Dashboard;
