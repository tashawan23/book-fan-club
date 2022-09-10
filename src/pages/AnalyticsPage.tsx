import React, { useEffect, useState } from "react";
import BooksByDate from "../components/BooksByDate";
import BooksGenre from "../components/BooksByGenre";
import "./AnalyticsPage.css";

const BooksByGenre = () => {

  return (
    <div className="analytics-page">
        <BooksByDate/>
        <BooksGenre />
    </div>
  );
};

export default BooksByGenre;
