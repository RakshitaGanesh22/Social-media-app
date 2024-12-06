import React from 'react';
import AsideBar from "../component/sections/AsideBar.jsx";
import MainBar from "../component/sections/MainBar.jsx";
import SideBar from "../component/sections/SideBar.jsx";
import { Box } from "@mui/material";

export default function MainPage() {
    const containerStyle = {
        width: '100%',
        display: 'flex',
        background: "#F5F5F5 0% 0% no-repeat padding-box",
        padding: '2.5%', 
        gap: '2.7%',
        boxSizing: 'border-box',
    };

    return (
        <Box sx={containerStyle}>
            {/* AsideBar */}
            <Box
                sx={{
                    width: {
                        xs: '100%', 
                        sm: '45%', 
                        md: '23%',  
                        lg: '20%', 
                    },
                    borderRadius: '8px', 
                }}
            >
                <AsideBar />
            </Box>

            {/* MainBar */}
            <Box
                sx={{
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: '50%', 
                        lg: '54%', 
                    },
                }}
            >
                <MainBar />
            </Box>

            {/* SideBar */}
            <Box
                sx={{
                    width: {
                        xs: '100%',
                        sm: '45%',
                        md: '23%',
                        lg: '20%',
                    },
                    borderRadius: '8px',
                }}
            >
                <SideBar />
            </Box>
        </Box>
    );
}
