import "./App.css";
import UserPage from "./pages/UserPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookPage from "./pages/BookPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import { Provider } from "react-redux";
import { store } from "./constants/store"
import HomePage from "./pages/HomePage";
import TestTable from "./pages/TestTable";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/books" element={<BookPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/test" element={<TestTable />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
