import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faYoutube, faTiktok  } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (

    
    <footer>
     <hr className="divider"/>
      <div className="footer-start">
         <div className="footer-start-part1">
          <img src="https://gomat.co/images/61118811ddebb5ea41a7aabb_logo_MAT-negro.png" alt="logo"></img>
          <div className="footer-networks">
            <a><FontAwesomeIcon  icon={faInstagram}/></a>
            <a><FontAwesomeIcon icon={faFacebook}/></a>
            <a><FontAwesomeIcon icon={faTwitter}/></a>
            <a><FontAwesomeIcon icon={faYoutube}/></a>
            <a><FontAwesomeIcon icon={faTiktok}/></a>
          </div>
          <p>@gomat</p>
        </div>
        <div className="footer-start-part2">
          <h4>Términos y condiciones</h4>
          <p className="subtitle">T&C promos</p>
          <p className="subtitle">T&C Arrendatario</p>
          <p className="subtitle">T&C Arrendador</p>
        </div>
        <div className="footer-start-part3">
          <h4>Recursos</h4>
          <p className="subtitle">Preguntas frecuentes</p>
          <p className="subtitle">Blog</p>
        </div>
        <div className="footer-stores">
          <img src="https://gomat.co/images/6111887442afa85e23195d46_app_store.png" alt="appStore"></img>
          <img src="https://gomat.co/images/61118874a04fd5d3635a729b_appgallery.png"alt="AppGallery" ></img>
          <img src="https://gomat.co/images/6111887442c1f4fe6b1ce263_google_play.png" allt="googlePlay"></img>
        </div>
      </div>
      <hr/>
      <div className="footer-end">
        
        <h4>® 2021 MAT. All Rights Reserved</h4>
        <p>Manual de tratamiento de datos</p>
        <p>Aviso de privacidad</p>
      </div>
    </footer>
  )
}

export default Footer;