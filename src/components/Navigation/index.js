import React from 'react';
function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <div className="tabs header" >
            <ul className="nav-tabs nav">
                {tabs.map((tab) => (
                <li className={props.currrentPage === tab ? "nav-item is-active" : "nav-item"} key={tab} >
                    <a href={"#" + tab.toLocaleLowerCase()} 
                    onClick={() => props.handlePageChange(tab)}
                    className={ props.currentPage === tab ? "nav-link active" : "nav-link"} >
                    {tab}
                    </a>
                </li> ))}
            </ul>
        </div>
    );
}

export default Navigation;