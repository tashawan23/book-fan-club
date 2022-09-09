import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import { useAppSelector } from "../constants/hooks";
import "./AnalyticsPage.css";

const BooksByDate = () => {
  const [genreData, setGenreData] = useState([]);
  const books = useAppSelector((state) => state.books.arr);

  // useEffect(() => {
  //   let data = genreData;
  //   books.forEach((book) => {
  //     const index = genreData.findIndex((item) => {
  //       return item.genre === book.genre;
  //     });
  //     data[index].count = data[index].count + 1;
  //   });
  //   setGenreData(data);
  // }, [books]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#fc688a",
    "#49cc6e",
  ];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    cx: any;
    cy: any;
    midAngle: any;
    innerRadius: any;
    outerRadius: any;
    percent: any;
    index: any;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {/* {`${genreData[index].genre}`} */}
      </text>
    );
  };

  return (
    <div className="charts-container">
        <div className="chart-name">Books by Genre</div>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart width={500} height={500}>
          <Pie
            data={genreData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={300}
            fill="#8884d8"
            dataKey="count"
          >
            {genreData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BooksByDate;
