import React from 'react'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
     <nav className= "navbar">
       <h3 className = "eliavadakhl">Eliava Dakhl</h3>
       <ul
         className = {isMobile ? "nav-links-mobile" : "nav-links"}
         onClick={() => setIsMobile(false)}
         >
         <Link to = "/homepage" className = "homepage">
           <li>Home</li>
     </Link>
     <Link to = "/authorizepage" className = "authorizepage">
        <li>Sign In</li>
     </Link>
     <Link to = "/authorizepage" className = "authorizepage">
        <li>Sign Up</li>
     </Link>
     <Link to = "/myaccountpage" className = "myaccountpage">
        <li>My Account</li>
     </Link>
     <Link to = "/individualproductpage" className = "individualproductpage">
        <li>Ind. Product</li>
     </Link>

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
