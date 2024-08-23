import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';
import { IconUser } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import { IconLogout } from '@tabler/icons-react';

export default function MenuDrop() {
    const navigate = useNavigate();
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        <IconUser size={15} /> Pınar ibiş </Button>
                    <Menu {...bindMenu(popupState)} style={{ marginLeft: '10px', fontStyle: 'normal' }}>
                        <MenuItem onClick={() => { popupState.close(); navigate('/'); }}><IconLogout color='grey' size={18} /> Logout</MenuItem>
                        <MenuItem onClick={() => { popupState.close(); navigate('/Home') }}><IconHome color='gray' size={18} />   Home</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}

