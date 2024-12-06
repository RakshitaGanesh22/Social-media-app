import React from 'react';
import Slider from 'react-slick';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img12 from './assets/img12.png';
import img13 from './assets/img13.png';
import star from './assets/star.svg';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousal() {
  const data = [
    {
      image: img1,
      text: 'Modern Wall Decor Framed Painting',
      amount: '$199.99',
    },
    {
      image: img2,
      text: 'Modern Wall Decor Framed Painting',
      amount: '$199.99',
    },
    {
      image: img12,
      text: 'Modern Wall Decor Framed Painting',
      amount: '$199.99',
    },
    {
      image: img13,
      text: 'Modern Wall Decor Framed Painting',
      amount: '$199.99',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider {...settings}>
        {data.map((ele, index) => (
          <Box key={index} >
            <Card
              sx={{
                width: "250px",
                borderRadius: 2,
                boxShadow: 0,
                backgroundColor: '#F5F5F5',
              }}
            >
              <CardMedia
                component="img"
                alt={ele.text}
                height="180"
                image={ele.image}
                sx={{ objectFit: 'cover', borderRadius: 3 }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontSize: '13px', textAlign: 'left', fontWeight: 510 }}
                >
                  {ele.text}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: 1,
                      fontSize: '16px',
                      fontWeight: 'bold',
                    }}
                  >
                    {ele.amount}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.3 }}>
                    <img src={star} alt="star" width="15" height="15" />
                    <img src={star} alt="star" width="15" height="15" />
                    <img src={star} alt="star" width="15" height="15" />
                    <img src={star} alt="star" width="15" height="15" />
                    <img src={star} alt="star" width="15" height="15" />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
