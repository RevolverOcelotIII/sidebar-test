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
                            <FaIcons.FaBars/>
                        </div>
                    </li>
                    {SidebarData.map((item) =>{
                        return (
                            <li className={sidebar? item.cName : 'nav-text-hidden'}>
                                <Link to={item.path}>
                                    {item.icon}
                                    {sidebar? <span>{item.title}</span>: null}
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
