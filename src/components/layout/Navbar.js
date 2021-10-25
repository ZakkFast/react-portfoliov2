import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
    <nav className="cf">
        <ul className="cf">
            <li>
                <Link to="index.html">Home</Link>
             </li>
             <li>
                 <Link to="projects.html">What I Do</Link>
             </li>
             <li>
                 <Link to="contact.html">Contact</Link>
             </li>
         </ul>
        <Link to="#" id="openup">Zakk Fast</Link>
    </nav> 
 </header>
  );
}

export default Navbar;
