import React from 'react'
import {Box} from "@mui/material";
import img3 from "./assets/img3.png";
import img11 from "./assets/img11.png";
import img10 from "./assets/img10.png";
import img15 from "./assets/img15.png";
import PostCards from './PostCards';
export default function Posts() {
const cardDetails=[
    {
        image:img3,
        name:"Lara Leones",
        subname:"@thewallart",
        para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        mainImage:img10,
        likes:"9.8k",
        message:"8.6k",
        share:"7.2k"

    },
    {
        image:img11,
        name:"Thomas J.",
        subname:"@thecustomcreater",
        para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        mainImage:img15,
        likes:"9.8k",
        message:"8.6k",
        share:"7.2k"

    }

]
  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:4}}>{cardDetails.map((ele)=>{
        return <PostCards item={ele}/>
    })}</Box>
  )
}
