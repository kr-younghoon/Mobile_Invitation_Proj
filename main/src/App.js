import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                {/* <Route path="/places-and-times" element={<MultiStepForm />} /> */}
                {/* <Route path="/reviews" element={<MultiStepForm />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
