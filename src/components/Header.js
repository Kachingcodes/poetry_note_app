import React from 'react';

const Header = ({ handleToogleDarkMode }) => {
    return(
        <div className="header">
            <h1>POEMS</h1>
            <button 
            onClick={() => handleToogleDarkMode ((previousDarkMode) => !previousDarkMode 
                )}
            className='save'>
                Toggle Mode</button>
        </div>
        )
}

export default Header;