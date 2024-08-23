import './Navbar.css';
import logo from "../../assets/ozyer_logo.png";
import { useLocation } from 'react-router-dom';
import useWindowSize from '../mobile/UseWindowSize';
import { IconListDetails, IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';
import Dropdownn from '../menü/Menü';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IconContract } from '@tabler/icons-react';
import { IconLogout } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import { IconArchive } from '@tabler/icons-react';
import * as React from 'react';
import AccountMenu from '../menü/Iconmenu';


const Navbar = () => {
  const location = useLocation();
  const loc = location.pathname.split("/")[1];
  const size = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className='header'>
      <div> <a href='/Home' > <img src={logo} alt='logo' /> </a> </div>
      <>
        {size.width < 761 ? (
          <AccountMenu />
        ) : (
          ''
        )}
        {menuOpen && (
          <div className="menu">
            <Stack direction="column" backgroundColor='aero' borderRadius='10px' >
              <Button variant="contained" style={{ backgroundColor: 'aero', fontSize: '12px', width: '130px', boxShadow: 'none', color: 'white' }} className={loc === 'Home' ? 'Active' : ''} href='/Home'><IconHome size={15} /> Pınar</Button>
              <Button variant="contained" style={{ backgroundColor: 'aero', fontSize: '12px', width: '130px', boxShadow: 'none', color: 'white' }} className={loc === 'Offer' ? 'Active' : ''} href='/Offer'><IconArchive size={15} />Teklif</Button>
              <Button variant="contained" style={{ backgroundColor: 'aero', fontSize: '12px', width: '130px', boxShadow: 'none', color: 'white' }} className={loc === 'Order' ? 'Active' : ''} href='/Order'><IconListDetails size={15} />Sipariş</Button>
              <Button variant="contained" style={{ backgroundColor: 'aero', fontSize: '12px', width: '130px', boxShadow: 'none', color: 'white' }} className={loc === '/' ? 'Active' : ''} href='/'><IconLogout size={15} />Logout</Button>
            </Stack>
          </div>
        )}
      </>
      <nav>
        <ul>
          <li>
            <a className={loc === 'Offer' ? 'active' : ''} href='/Offer'><IconContract size={15} /> Teklifler</a>
            <a className={loc === 'Order' ? 'active' : ''} href='/Order'><IconListDetails size={15} /> Siparişler</a>
          </li>
          <div style={{ paddingRight: '20px' }}>
            <Dropdownn />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
