import React from 'react'
import './topnav.css'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/Json_data/notification.json'
import { Link } from 'react-router-dom'

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)

function Topnav() {
  return (
    <div className='topnav-main'>
      <div className='greeting'>
        <div className='welcome-text'><h2>Welcome to our dashboard 👋</h2></div>
        <div className='greeting-text'><p>Protect your Daily cafein needs, bro!</p></div>
      </div>
      <div className="topnav__right">
        <div className='right-topnav'>
          <div className="topnav__search">
            <i className='bx bx-search'></i>
            <input type="text" placeholder='Search here...' />
          </div>
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon='bx bx-bell'
            badge='12'
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to='/'>View All</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className='topnav__right-calendar'>
          <i class='bx bx-calendar'></i>
        </div>
      </div>
    </div>
  )
}

export default Topnav