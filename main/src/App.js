import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlacesAndTimes from './Pages/PlacesAndTimes';
import Reviews from './Pages/Reviews';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/places-and-times" element={<PlacesAndTimes />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </Router>
    );
}

export default App;
