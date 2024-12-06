import React from 'react';
import { Box, Typography, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import hare from "./assets/share.svg";
import comment from "./assets/comment.svg";

export default function PostCards({ item }) {
  const { image, name, subname, para, mainImage, likes, message, share } = item;

  return (
    <Box sx={{ borderRadius: 3, padding: 4, backgroundColor: "#fff",display:"flex",flexDirection:'column',gap:2 }}>
        
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box component="img" src={image} alt={`${name} profile`} sx={{ width: 48, height: 48, }} />
          <Box sx={{textAlign:'left'}}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>{name}</Typography>
            <Typography sx={{ fontSize: "14px", color: "#8D8D8D" }}>{subname}</Typography>
          </Box>
        </Box>
        <IconButton>
          <MoreVertIcon sx={{fontSize:24}}/>
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ marginBottom: 2,textAlign:'left' }}>
        <Typography sx={{ fontSize: "14px", color: "#101010" }}>
          {para} <Typography component="span" sx={{ color: "#FF5E8A",fontSize:"14px", cursor: "pointer" }}>Read More</Typography>
          <FavoriteBorderIcon sx={{position:"relative",top:90,right:-285,color:"#fff"}}/>
        </Typography>
      </Box>

      {/* Main Image */}
      <Box sx={{ textAlign: "center", marginBottom: 2 }}>
        <Box component="img" src={mainImage} alt="Main content" sx={{ width: "100%", borderRadius: 2 }} />
      </Box>
    
      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap:3, alignItems: "center", borderTop: "3px solid #F5F5F5", paddingTop: 3 }}>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "20px",fontWeight:500 }}>
          <FavoriteBorderIcon sx={{fontSize:20,color:"#101010"}}/> {likes}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "20px",color:"#101010" ,fontWeight:500 }}>
          <Box component="img" src={comment} alt="Comment icon" sx={{ width: 18, height: 18,color:"#101010" }} /> {message}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "20px",color:"#101010" ,fontWeight:500 }}>
          <Box component="img" src={hare} alt="Share icon" sx={{ width: 18, height: 18,color:"#101010" }} /> {share}
        </Typography>
      </Box>
    </Box>
  );
}
