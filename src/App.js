import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MealList from './MealList';
import MealDetail from './MealDetails';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MealList />} />
                    <Route path="/meal/:id" element={<MealDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;