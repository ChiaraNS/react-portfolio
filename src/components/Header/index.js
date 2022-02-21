import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
// import Footer from './Footer';
import Navigation from '../Navigation';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('About');
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;   
            case 'Resume':
                return <Resume />;   
            
            default: return <About />;
        }
    };

    return (
        <div>
            <nav className="navbar header">
                <div>
                    <a rel="noreferrer" target="_blank" href="https://github.com/ChiaraNS" >
                        <span className="content name">Chiara Schafer</span>
                    </a>
                </div>
            </nav>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} className="header"/>
            <main className="header">
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;