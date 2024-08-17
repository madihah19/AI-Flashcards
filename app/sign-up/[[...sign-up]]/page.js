import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { Box, CssBaseline, Typography } from '@mui/material';

const SignUpPage = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#e0e0e0', // Light grey background
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '400px', // Set a maximum width for the sign-up form
            padding: 4,
            backgroundColor: '#ffffff', // Background color for the form
            borderRadius: 2, // Rounded corners for the form
            boxShadow: 3, // Shadow for the form
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: 3, 
              fontWeight: 'bold',
              color: '#333333'
            }}
          >
            Sign Up
          </Typography>
          <SignUp />
        </Box>
      </Box>
    </>
  );
};

export default SignUpPage;
