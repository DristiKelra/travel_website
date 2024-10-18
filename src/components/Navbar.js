import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import './Navbar.css';

function Navbar() {
    const [click, setClick]= useState(false);
    const [button, setButton] = useState(true);
    const handleClick= () => setClick(!click);
    const closeMobileMenu =() => setClick (false);

    const showButton = () => {
        if (window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize',showButton);
    return ( 
    <>
    <nav classname='navbar'>
        <div classname='navbar-container'>
            <Link to = "/" className= 'navbar-logo'>
            TRVL
                {/* TRVL <i className= 'fa-solid fab fa-typo3' /> */}
            </Link>
            <div classname='menu-icon' onClick={handleClick}>
                <i classname= {click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul classname ={click ? 'nav-menu active': 'nav-menu'}>
                <li className ='nav-item'>
                    <Link to='/sevices' className = 'nav-Links' onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className ='nav-item'>
                    <Link to='/products' className = 'nav-Links' onClick={closeMobileMenu}>
                    Products
                    </Link>
                </li>
                <li className ='nav-item'>
                    <Link to='/sign-up' className = 'nav-Links' onClick={closeMobileMenu}>
                    Sign up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'> SIGN UP </Button>}
        </div>
    </nav>
    </>   
  );
}

export default Navbar;

