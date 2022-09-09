import './App.css';
import UserPage from './pages/UserPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
       <Navbar/>
      <div className="App">
      <Routes>
      <Route path="/" element={<UserPage />}/>
      {/* <Route path="/analytics" element={<AnalyticsPage />}/> */}
     </Routes>
    </div>
    </Router>
  );
}

export default App;
