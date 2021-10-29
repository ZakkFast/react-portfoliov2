import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
    <nav className="cf">
        <ul className="cf">
            <li>
                <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/project">What I Do</Link>
             </li>
         </ul>
        <Link to="/" id="openup">Zakk Fast</Link>
    </nav> 
 </header>
  );
}

export default Navbar;
