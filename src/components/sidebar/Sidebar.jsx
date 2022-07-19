import React from 'react'
import logo from '../../assets/images/logo.jpg'
import sidebar_items from '../../assets/Json_data/sidebar_routes.json'
import sidebar_items2 from '../../assets/Json_data/sidebar_other.json'
import { Link } from 'react-router-dom'
import './sidebar.css'


const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`} >
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
                {(props.title === 'Products') ?
                    <div className={`sidebar-notification`}>14</div> : ''
                }
            </div>
        </div>
    )
}

const Sidebar = props => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
                <div className='logo-text'>
                    <h2 className="heading">STARBUCKS</h2>
                    <p className="heading text">Dashboard</p>
                </div>
            </div>
            <div className='side-menu-option'>
                <button className='sidebar__items_top_menu'>
                    <i class='bx bx-chevron-left' ></i>
                </button>
                <div className='sidebar__items_top_menu'>
                    <i class='bx bx-fullscreen' ></i>
                </div>
                <div className='sidebar__items_top_menu'>
                    <i class='bx bx-moon'></i>
                </div>
            </div>
            <div className='sidebar__item_main'>
                <div className='main-menu'>
                    <p className='menus'>main menu</p>
                    {
                        sidebar_items.map((item, index) => (
                            <Link to={item.route} key={index} className="sidebar-link">
                                <SidebarItem
                                    title={item.display_name}
                                    icon={item.icon}
                                    key={index}
                                    active={index === activeItem}
                                />
                            </Link>
                        ))
                    }
                </div>

                <div className='others-menu'>
                    <p className='menus'>others</p>
                    {
                        sidebar_items2.map((item, index) => (
                            <>

                                <SidebarItem
                                    title={item.display_name}
                                    icon={item.icon}
                                    key={index}

                                />

                            </>
                        ))
                    }
                </div>
                <hr className='hr' />
            </div>
            <div className='sidebar-user'>
                <div className='avatar'>
                    <div className='avatar-inner'>
                        <img src='https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/ic7defqune831dh9orwm.png' />
                    </div>
                </div>
                <div className='user-info'>
                    <p className='user-name'>Paul edenburg </p>
                    <p>Role: Admin </p>
                </div>
                <div className='sidebar__items_bottom_user'>
                    <i class='bx bx-chevron-right' ></i>
                </div>
            </div>
        </div >
    )
}

export default Sidebar