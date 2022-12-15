import React from 'react';
import './css/index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MAIN_PAGE from './components/Main Page/MAIN_PAGE';
import CONTACT_PAGE from './components/Contact Page/CONTACT_PAGE';
import SHOP_PAGE from './components/Shop Page/SHOP_PAGE';
import BLOG_PAGE from './components/Blog Page/BLOG_PAGE';
import LayoutArrow from './components/Layout/LayoutArrow';
import ARTICLE_PAGE from './components/Article Page/ARTICLE_PAGE';
import PRODUCT_PAGE from './components/Product Page/PRODUCT_PAGE';
import ABOUT_PAGE from './components/About Page/ABOUT_PAGE';


function App() {
    return (
        <div className="App">
            
            <Router>

                <Routes>

                    <Route path='/' element={<MAIN_PAGE />} />

                    <Route path='/contact' element={<CONTACT_PAGE />} />
                    <Route path='/about' element={<ABOUT_PAGE />} />

                    <Route path='/shop' element={<SHOP_PAGE />} />
                    <Route path='/product/:id' element={<PRODUCT_PAGE />} />

                    <Route path='/blog' element={<BLOG_PAGE />} />
                    <Route path='/article/:id' element={<ARTICLE_PAGE />} />

                </Routes>

                <LayoutArrow />

            </Router>

        </div>
    )
}

export default App;
