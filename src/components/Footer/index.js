import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="content">
                <div className='flex-row'>
                    <a href='https://github.com/ChiaraNS'>
                        <img src={require('./images/github-logo.png')} target='_blank' className='icon' alt='Github'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/chiara-schafer-9659501a9/'>
                        <img src={require('./images/linkedin-logo.png')} target='_blank' className='icon' alt='Linkedin'></img>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;