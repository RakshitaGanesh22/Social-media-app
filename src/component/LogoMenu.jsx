import React, { useState } from 'react';
import { Box, Typography, Button, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import home from "./assets/home.svg";
import notification from "./assets/notification.svg";
import heart from "./assets/heart.svg";
import message from "./assets/message.svg";
import favorite from "./assets/favorite.svg";
import profile from "./assets/profile.svg";
import setting from "./assets/setting.svg";
import wallete from "./assets/wallete.svg";
import logout from "./assets/logout.svg";

export default function LogoMenu() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigationItems = [
        { src: home, label: 'Home' },
        { src: notification, label: 'Notifications' },
        { src: heart, label: 'Shop' },
        { src: message, label: 'Conversation' },
        { src: wallete, label: 'Wallet' },
        { src: favorite, label: 'Favorites' },
        { src: profile, label: 'Profile' },
        { src: setting, label: 'Settings' },
    ];

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,}}>
            {/* Logo */}
            <Box sx={{ textAlign: 'center' ,width:"100%"}}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#101010',height:"8%",borderRadius:3 ,backgroundColor:'#fff',height:"100%",padding:2.5,textAlign:"left"}}>
                    LOGO
                </Typography>
            </Box>

            {/* Navigation for larger screens */}
            {!isSmallScreen && (
                <AppBar position="static" sx={{  boxShadow: 'none' ,background:"#fff",borderRadius:3}}>
                    <Toolbar sx={{ justifyContent: 'space-around', gap: 5 }}>
                    <Box sx={{width:"100%",display:"flex",flexDirection:"column",gap:19,borderRadius:1}}>
                            <List>
                                {navigationItems.map((item, index) => (
                                    <ListItem button key={index} sx={{width:"100%",mb:1,"&:hover":{borderLeft:"2px solid #88C2BB",boxSizing:"border-box"}}}>
                                        <ListItemIcon>
                                            <Box component="img" src={item.src} alt={item.label} sx={{ml:-2}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={
                                        <Typography variant="body1" sx={{ color: '#8D8D8D',textAlign: 'left', fontSize:"12px",ml:-5,"&:hover":{color:"#000"}}} >
                                         {item.label}
                                        </Typography>
                                         }/>
                                    </ListItem>
                                ))}
                            </List>
                            <List>
                    <ListItem button sx={{width:"100%",}}>
                        <ListItemIcon>
                            <Box component="img" src={logout} alt="logout" sx={{ ml:-2}} />
                            </ListItemIcon>
                        <ListItemText primary="Log out" sx={{color:"#0EC297",fontSize:"12px",ml:-5,}}/>
                    </ListItem>
                </List>
                        </Box>
                        
                    </Toolbar>
                    
                </AppBar>
                
            )}

            {/* Menu for smaller screens */}
            {isSmallScreen && (
                <>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        sx={{
                            color: '#333',
                            position: 'absolute',
                            top: 16,
                            right: 16,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box>
                            <List>
                                {navigationItems.map((item, index) => (
                                    <ListItem button key={index}>
                                        <ListItemIcon>
                                            <Box component="img" src={item.src} alt={item.label} />
                                        </ListItemIcon>
                                        <ListItemText primary={
                                        <Typography variant="body1" sx={{ color: '#8D8D8D',textAlign: 'left', fontSize:"12px"}}>
                                         {item.label}
                                        </Typography>
                                         }/>
                                    </ListItem>
                                ))}
                                <ListItem button>
                                    <ListItemIcon>
                                        <Box component="img" src={logout} alt="logout"  />
                                    </ListItemIcon>
                                    <ListItemText primary="Log out" sx={{color:"#0EC297"}}/>
                                </ListItem>
                            </List>
                        </Box>
                        <Box sx={{fontSize:"8px",color: '#8D8D8D'}}>
                            <Typography sx={{fontSize:"8px"}}>
                                2022©logo name
                            </Typography>
                            <Typography sx={{fontSize:"8px"}}>
                            Developed by ivan Infotech
                            </Typography>
                        </Box>
                    </Drawer>
                </>
            )}

{!isSmallScreen &&(<Box sx={{display:"flex",fontSize:"5px",color: '#8D8D8D' ,mt:-2,justifyContent:"space-between",width:"100%"}}>
                            <Typography sx={{fontSize:"8px"}}>
                                2022©logo name
                            </Typography>
                            <Typography sx={{fontSize:"8px"}}>
                            Developed by ivan Infotech
                            </Typography>
                        </Box>)}
        </Box>
    );
}
