import React, { useEffect, useState } from "react";
import { Cell, LabelList, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useAppSelector } from "../constants/hooks";
import "../pages/AnalyticsPage.css";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#fc688a",
  "#49cc6e",
];

const RADIAN = Math.PI / 180;

const BooksByGenre = () => {
  const initData = [
    { genre: "Romance", count: 0 },
    { genre: "Action", count: 0 },
    { genre: "Adventure", count: 0 },
    { genre: "Thriller", count: 0 },
    { genre: "Fiction", count: 0 },
    { genre: "Travel", count: 0 },
    { genre: "History", count: 0 },
    { genre: "Lifestyle", count: 0 },
    { genre: "Fantasy", count: 0 },
    { genre: "ScienceFiction", count: 0 },
    { genre: "Poetry", count: 0 },
  ];
  const [genreData, setGenreData] = useState(initData);
  const [total, setTotal] = useState(0);
  const books = useAppSelector((state) => state.books.arr);

  useEffect(() => {
    let data = initData;
    books.forEach((book) => {
      const index = genreData.findIndex((item) => {
        return item.genre === book.genre;
      });
      data[index].count += 1;
    });
    setGenreData(data);
    setTotal(books.length);
  }, [books]);

  const renderCustomizedLabelPercentage = (data: any) => {
    let percentageCalculated = (data.count / total) * 100;
    return percentageCalculated.toFixed(0).toString() + "%";
  };

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
    const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#454545"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genreData[index].genre}`}
      </text>
    );
  };

  return (
    <div className="charts-container">
      <div className="chart-name">Books by Genre</div>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart width={800} height={800}>
          <Pie
            data={genreData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={250}
            fill="#8884d8"
            dataKey="count"
          >
            <LabelList
              dy={-5}
              fill="white" // Percentage color
              dataKey={renderCustomizedLabelPercentage}
              angle={0}
              stroke="none" // Border of letters
              className="label-percentage"
              position="insideBottom"
              fontSize="14px"
              fontWeight="bold"
            />
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

export default BooksByGenre;
