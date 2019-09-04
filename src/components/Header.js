import React from 'react';

function Header({titulo}) {
    return(
        <nav>
            <div className="nav-wrapper deep-orange lighten-1">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    )
}

export default Header;