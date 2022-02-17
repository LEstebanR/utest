import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);
 return (
    <nav className="header">
      <Link href="https://github.com/LEstebanR/utest">
        <img  className="header-logo" src="https://res.cloudinary.com/lesteban/image/upload/v1645038339/Logos/mat_oaohzt.svg" alt="mat-logo"></img>
      </Link>
      <ul className="header-items"id={!showMenu ? "show" : "hidden"} >
        <details close>
          <summary>Conduce</summary>
          <ul className="conduce">
            <li><Link href="https://github.com/LEstebanR/utest">Inicio</Link></li>
            <li><Link href="https://github.com/LEstebanR/utest">Acerca de</Link></li>
          </ul>
        </details>
        <li><Link href="https://github.com/LEstebanR/utest">MAT pits</Link></li>
        <li><Link href="https://github.com/LEstebanR/utest">Acerca de MAT</Link></li>
        <li><Link href="https://github.com/LEstebanR/utest">COVID-19</Link></li>
      </ul>
      <FontAwesomeIcon onClick={handleMenu} className={ showMenu ? "header-menu-button" : "header-menu-button-click" } icon={faBars}/>
    </nav>
  )
}

export default Header;