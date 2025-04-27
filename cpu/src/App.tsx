import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddService from './pages/AddService';
import ExpertProfile from './pages/ExpertProfile';
import Experts from './pages/Experts';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-service" element={<AddService />} />
          <Route path="/expert/:id" element={<ExpertProfile />} />
          <Route path="/experts" element={<Experts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;