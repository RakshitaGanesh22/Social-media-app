import React from 'react';
import { TextField, InputAdornment, Box, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import filter from "./assets/filter.svg";
import Posts from "./Posts.jsx";
import Carousal from './Carousal.jsx';
export default function SearchBar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 ,width:"100%"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height:"8%",
          borderRadius: 3,
          backgroundColor: "#fff",
          padding: 3,
          boxSizing:"border-box"
        }}
      >
        <TextField
          variant="standard"
          placeholder="Search here..."
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { fontSize: '12px' }, 
          }}
          sx={{
            width: "60%",
            backgroundColor: "transparent",
            '& .MuiInputBase-input::placeholder': {
              fontSize: '12px', 
            },
          }}
        />
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box component="img" src={filter} alt="img" />
          <Typography sx={{ color: "#303030", fontSize: "12px" }}>Filters</Typography>
        </Box>
      </Box>
      <Box sx={{width:"100%"}}>
        <Posts />
      </Box>
      <Box sx={{width:"100%"}}>
        <Carousal />
      </Box>
    </Box>
  );
}
