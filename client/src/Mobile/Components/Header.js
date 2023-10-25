import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LeftMenu from './LeftMenu';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const AppHeader = styled(AppBar) ({
    background: '#121212',
    height:'60px'
})

export default function MobileHeader() {
    const navigate = useNavigate();
    const [drawerState, setDrawerState] = React.useState(false);
    return (
        <>
            <LeftMenu isOpen={drawerState} setIsOpen={setDrawerState}/>
            <Box sx={{ flexGrow: 1 }} >
                <AppHeader position="fixed">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => {setDrawerState(true); console.log(drawerState)}}
                        >
                            <MenuIcon />
                        </IconButton >
                        <Button variant='outlined' onClick={()=>{navigate('/login')}}>
                            Вход
                        </Button>
                    </Toolbar>
                </AppHeader>
            </Box>
        </>
    );
}