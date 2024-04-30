import React from 'react'
import "./header.css";
// import netfilxlogo from '../../assets/images/netfilxlogo.jpg'
import netfilxlogo from '../../assets/images/Netflix-logo.jpg'
 import SearchIcon from '@mui/icons-material/Search';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import AccountBoxIcon from '@mui/icons-material/AccountBox';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

  


const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li><img src={netfilxlogo} alt='Ntflix-logo'width='100'/></li>
            <li>Netflix</li>
               <li>Home</li>
              <li>TvShowes</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>Mylist</li>
              <li>Browes by languages</li>
              </ul>
              </div>
            <div className='header_right'>
            <ul>
              <li><SearchIcon/></li>
              <li><NotificationsNoneIcon/></li>
              <li><AccountBoxIcon/></li>
              <li><ArrowDropDownIcon/></li>
            </ul>

            </div>
            
          </div>

    </div>
    
  )
}

export default Header







