import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-brainscript.png'
import { toast } from 'react-hot-toast'

export default function NavBar({isLogedIn, setIsLogedIn}) {


    return (
        <nav className='NavBar'>
            <NavLink to = "/">
                
                <img src={logo} alt="logo-brainscript" />
                
            </NavLink>

            <div className="nav-menu">

                <NavLink to="/" className={"nav-element"}>Home</NavLink>
                <NavLink to="/about" className={"nav-element"}>About</NavLink>
                <NavLink to="/contact" className={"nav-element"}>Contact</NavLink>

            </div>

            <div className="btn-authentication">
                
                {!isLogedIn &&
                    <NavLink to={"/login"}>
                        <button>Login</button>
                    </NavLink>
                }
                {!isLogedIn &&
                    <NavLink to={"/signup"}>
                        <button>SignUp</button>
                    </NavLink>
                }
                {isLogedIn &&
                    <NavLink to={"/"} onClick={() =>{
                        setIsLogedIn(false)
                        toast.error("Loged out")
                    }}>
                        <button id='logout'>Logout</button>
                    </NavLink>
                }
                {isLogedIn &&
                    <NavLink to={"/dashboard"}>
                        <button>Dashboard</button>
                    </NavLink>
                }

            </div>
        </nav>
    )
}
