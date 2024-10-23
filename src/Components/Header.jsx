import React from 'react';
function Header() {

    const paraDisplayOpen = "<p>";
    const paraDisplayClose = "</p>";

    return (
        <div className='header'>
            <div className="headOfPortfolio">
                <p className='namaste'>नमस्ते आगंतुक 🙏</p>
                <p className='headOfPortfolioPara2'>{paraDisplayOpen} This is a portfolio under development... {paraDisplayClose}</p>
            </div>
        </div>
    )
}
export default Header;