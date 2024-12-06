import React from 'react';
import { Box, Typography,useMediaQuery } from '@mui/material';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img12 from '../assets/img12.png';
import img113 from '../assets/img113.png';
import img14 from '../assets/img14.png';
import img13 from '../assets/img13.png';

export default function SideBar() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const data = [
    {
      mini: img4,
      max: img113,
      name: 'Thomas Edward',
      slag: '@thewildwithyou',
    },
    {
      mini: img5,
      max: img9,
      name: 'Chris Doe',
      slag: '@thewildwithyou',
    },
    {
      mini: img7,
      max: img13,
      name: 'Thomas Edward',
      slag: '@thewildwithyou',
    },
    {
      mini: img6,
      max: img14,
      name: 'Thomas Edward',
      slag: '@thewildwithyou',
    },
  ];

  function CreateCard(item, index) {
    return (
      <Box
        key={index}
        sx={{
          position: 'relative',
          width: '100%',
          height: '130px',
          marginBottom: 2,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${item.max})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />
  
        {/* Mini Image and Content */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 12, 
            left: 12,   
            zIndex: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Mini Image */}
          <Box
            component="img"
            src={item.mini}
            alt={item.name}
            sx={{
              width: '50px',
              height: '50px',
            }}
          />
  
          {/* Content */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: 'white', fontWeight: 500, fontSize: '14px', textAlign: 'left' }}
            >
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', fontSize: '12px', textAlign: 'left' }}>
              {item.slag}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        width: '100%',
      }}
    >
      {/* Seller Button */}
      <Box sx={{ width: '100%' }}>
        <Typography
          sx={{
            backgroundColor: '#88C2BB',
            color: '#fff',
            borderRadius: 3,
            padding: 3,
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          Become a Seller
        </Typography>
      </Box>

      {/* Artists and Photographers Section */}
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            sx={{
              color: '#101010',
              fontWeight: 550,
              fontSize: '16px',
            }}
          >
            Artists
          </Typography>
          <Typography
            sx={{
              color: '#8D8D8D',
              fontSize: '16px',
            }}
          >
            Photographers
          </Typography>
        </Box>
      </Box>

      {/* Render Cards */}
      <Box sx={{ width: '100%' }}>
        {data.map((item, index) => CreateCard(item, index))}
      </Box>
      {!isSmallScreen &&(<Box sx={{display:"flex",fontSize:"5px",color: '#8D8D8D' ,mt:-4,justifyContent:"space-between",width:"100%"}}>
                            <Typography sx={{fontSize:"8px"}}>
                                Privacy
                            </Typography>
                            <Typography sx={{fontSize:"8px"}}>
                            Terms of Service
                            </Typography>
                            <Typography sx={{fontSize:"8px"}}>
                           Cookie Notice
                            </Typography>
                        </Box>)}
    </Box>
  );
}
