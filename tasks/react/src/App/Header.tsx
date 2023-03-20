import React from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header>
      <div>
        <Link to="/use-effect">useEffect</Link>
      </div>
      <br />
      <br />
    </header>
  );
}

export default Header;
