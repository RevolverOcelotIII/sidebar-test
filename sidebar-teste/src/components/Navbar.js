import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {SidebarData} from './SidebarData'
import './Navbar.css'
function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
            </div>
            <nav className={sidebar? 'nav-menu active' :'nav-menu'} id='sidebar' onMouseEnter={showSidebar} onMouseLeave={showSidebar}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <div className={sidebar? 'menu-bars active' : 'menu-bars'}>
                            {
                                sidebar? <h1>Oversee</h1> : <FaIcons.FaBars/>
                            }
                        </div>
                    </li>
                    {SidebarData.map((item, index) =>{
                        if(sidebar) return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>

                        )
                        else return (
                            <li key={index} className='nav-text-hidden'>
                                <Link to={item.path}>
                                    {item.icon}
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar
