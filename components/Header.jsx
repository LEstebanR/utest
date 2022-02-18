import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Link from "next/link";



const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleMenu = () => setShowMenu(!showMenu);
 
 return (
    <nav className="header">
      <Link href="/styled">
        <img  className="header-logo" src="https://res.cloudinary.com/lesteban/image/upload/v1645038339/Logos/mat_oaohzt.svg" alt="mat-logo"></img>
      </Link>
      <ul className="header-items"id={!showMenu ? "show" : "hidden"} >
        <details>
          <summary>Conduce</summary>
          <ul className="conduce">
            <li><Link href="styled">Inicio</Link></li>
            <li><Link href="styled">Acerca de</Link></li>
          </ul>
        </details>
        <li><Link href="styled">MAT pits</Link></li>
        <li><Link href="styled">Acerca de MAT</Link></li>
        <li><Link href="styled">COVID-19</Link></li>
      </ul>
      <FontAwesomeIcon onClick={handleMenu} className={ showMenu ? "header-menu-button" : "header-menu-button-click" } icon={faBars}/>
    </nav>
  )
}

export default Header;