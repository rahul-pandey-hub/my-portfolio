import React from 'react';
import './profile.css';
import { Box, Typography, Button } from '@mui/material';
import { Instagram as InstagramIcon } from '@mui/icons-material';

const ProfileCard = () => {
  return (
    <Box
    className="profile-card"
    sx={{
      display: 'flex',
      
        justifyContent: 'center',
        rounded: 'ld',
        overflow: 'hidden',
        px: { md: 10 },
        py: 5,
        marginLeft: { lg: '10%', sm: '0%' },
        width: { lg: '90%', sm: '100%' },
        gap: { md: 10 },
        
        backdropFilter: 'blur(100px)', // Adjust the blur intensity as needed
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)`, // Move the background image to sx prop
        backgroundRepeat: 'no-repeat', // Move background properties to sx prop
        backgroundSize: 'cover', // Move background properties to sx prop
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    }}
    >
      <div>
      <img
  alt="Neeraj Walia"
  loading="lazy"
  width="120"
  height="120"
  decoding="async"
  data-nimg="1"
  className="object-cover border-4 border-white rounded-full shadow-md"
  style={{ color: 'transparent' }}
  srcSet={`${process.env.PUBLIC_URL}/rahul.jpg 1x, ${process.env.PUBLIC_URL}/rahul.jpg  2x`}
  src={`${process.env.PUBLIC_URL}/rahul.jpg `}
/>
      </div>
      <div className="flex md:flex-1 flex-col justify-center gap-4">
        <div className="flex justify-between items-center gap-5">
          <Typography variant="h4" component="div" className="flex flex-col font-bold text-highlight">
           Rahul Pandey
            <Typography variant="body1" component="div" className="text-sm font-thin flex justify-between items-center">
             @rahul.pandey_95
              <a className="block md:hidden" target="_blank" href="https://www.instagram.com/rahul.pandey_95/" >
                <Button
                  className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs p-2"
                  variant="permanent"
                >
                  <InstagramIcon />
                </Button>
              </a>
            </Typography>
          </Typography>
          <a className="hidden md:block" target="_blank" href="https://www.instagram.com/rahul.pandey_95/">
            <Button
              className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs py-2 px-4"
              variant="contained"
            >
              <InstagramIcon />
              <span>Follow me on Instagram</span>
            </Button>
            </a>
        </div>
      </div>
    </Box>
  );
};

export default ProfileCard;
