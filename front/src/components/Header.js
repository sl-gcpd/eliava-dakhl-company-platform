import React, {useState} from "react";
import{link} from "react-router-dom";
import "../styles/Header.css";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
     <nav className= "navbar">
       <h3 className = "eliavadakhl">Eliava Dakhl</h3>
       <ul 
         className = {isMobile ? "nav-links-mobile" : "nav-links"}
         onClict={() => setIsMobile(false)}
         >
         <link to = "/homepage" className = "homepage">
           <li>Home</li>
     </link>
     <link to = "/authorizepage" className = "authorizepage">
        <li>Sign In</li>
     </link>
     <link to = "/authorizepage" className = "authorizepage">
        <li>Sign Up</li>
     </link>
     <link to = "/myaccountpage" className = "myaccountpage">
        <li>My Account</li>
     </link>
     <link to = "/individualproductpage" className = "individualproductpage">
        <li>Ind. Product</li>
     </link>

       </ul>
       <button
        className = "mobile-menu-icon"
       onClick={() => setIsMobile(!isMobile)}
       >
         {isMobile ? (
         <i className="fas fa-times"></i>
         ) : (
         <i className="fas fa-bars"></i>
         )}
       </button>

     </nav>
    
  )
}
export default Header;
