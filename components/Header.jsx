import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
 return (
    <div className="header">
      <img  className="header-logo" src="https://res.cloudinary.com/lesteban/image/upload/v1645038339/Logos/mat_oaohzt.svg" alt="mat-logo"></img>
      <FontAwesomeIcon className="header-menu-button" icon={faBars}/>
    </div>
  )
}

export default Header;