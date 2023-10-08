import styles from './App.module.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlacesAndTimes from './Pages/PlacesAndTimes';
import Reviews from './Pages/Reviews';

function App() {
    return (
        <>
            <div className={styles.header_margin}>
                <button className={styles.header_navbar}>
                    <div className={styles.header_navbar_line} />
                    <div className={styles.header_navbar_line} />
                </button>
            </div>
            <div className={styles.layout_page}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/places-and-times"
                            element={<PlacesAndTimes />}
                        />
                        <Route path="/reviews" element={<Reviews />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
