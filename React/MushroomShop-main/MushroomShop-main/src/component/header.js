import { useState, useEffect, useRef } from 'react';
function Header() {
    const [active, setActive] = useState(false);
    
return (
    <div className="header" id="HOME">
        <div className="header-content">
            <div className="icon-menu" onClick={() => {
                setActive(!active);
            }}>
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
            <div className={`nav-mobile ${active === true ? "active" : ""}`}>
                <ul className="nav-mobile-list">
                    <li className="nav-mobile-item"><a href="#SLIDER" onClick={()=>{setActive(false)}} >home</a> </li>
                    <li className="nav-mobile-item"><a href="#BESTSELLER" onClick={()=>{setActive(false)}}>best seller</a> </li>
                    <li className="nav-mobile-item"><a href="#COLLECTION" onClick={()=>{setActive(false)}}>collection</a> </li>
                    <li className="nav-mobile-item"><a href="#SALE" onClick={()=>{setActive(false)}}>sale </a></li>
                    <li className="nav-mobile-item"><a href="https://www.universalstandard.com/pages/size-guides" target="_blank" onClick={()=>{setActive(false)}}>size chart</a> </li>
                    <li className="nav-mobile-item"><a href="#FOOTER" onClick={()=>{setActive(false)}}>about us</a> </li>
                </ul>

            </div>
            <div className="header-logo">
                <a href="">
                    <img className="logo" src="./img/logo4.png"></img>
                </a>

            </div>
            <div className="header-menu">
                <ul className="menu-list">
                    <li className="menu-item">
                        <a href="#SLIDER">home</a>

                    </li>
                    <li className="menu-item">
                        <a href="#BESTSELLER">best seller</a>

                    </li>
                    <li className="menu-item">
                        <a href="#COLLECTION"> collection</a>

                    </li>
                    <li className="menu-item">
                        <a href="#SALE"> sale</a>

                    </li>
                    <li className="menu-item">
                        <a href="https://www.universalstandard.com/pages/size-guides" target='_blank'> size chart</a>

                    </li>
                    <li className="menu-item">
                        <a href="#FOOTER">about us</a>

                    </li>
                </ul>
            </div>
            <div className="header-info">
                <div className="header-login">
                    <a href="">Login</a>
                    <a href="">Signup</a>
                </div>
                <div className="header-icon">
                    <input type="text" className="search-text-box" placeholder="Search..." ></input>
                    <i class="menu-icon fa-solid fa-magnifying-glass"></i>
                    <i class="menu-icon fas fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    </div>
)
}
export default Header
