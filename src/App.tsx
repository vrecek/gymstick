import React from 'react';
import './css/index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MAIN_PAGE from './components/Main Page/MAIN_PAGE';
import CONTACT_PAGE from './components/Contact Page/CONTACT_PAGE';

function App() {
    return (
        <div className="App">
            
            <Router>

                <Routes>

                    <Route path='/' element={<MAIN_PAGE />} />
                    <Route path='/contact' element={<CONTACT_PAGE />} />

                </Routes>

            </Router>

        </div>
    )
}

export default App;
