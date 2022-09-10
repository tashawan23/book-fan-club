import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useAppSelector } from "../constants/hooks";
import "../pages/AnalyticsPage.css"

const BooksByDate = () => {
  const [yearData, setYearData] = useState<any[]>([]);
  const books = useAppSelector((state) => state.books.arr);

  useEffect(() => {
    let data = yearData;
    books.forEach((book) => {
      const index = yearData.findIndex((item) => {
        return item.year === book.year_published;
      });
      if (index > -1) {
        data[index].count = data[index].count + 1;
      } else {
        data.push({ year: book.year_published, count: 0 });
      }
    });
    data.sort((a, b) => a.year > b.year ? 1 : -1);
    setYearData(data);
  }, [books]);


  return (
    <div className="charts-container">
      <div className="chart-name">Books by Year Published</div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={400}
          height={300}
          data={yearData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            activeDot={{ r: 9 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BooksByDate;
