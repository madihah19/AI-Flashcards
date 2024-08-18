'use client'

import React from 'react';
import { SignOutButton } from '../signout/page';
import { Grid, Box, Typography, Button } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 2 }}>
        Dashboard
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Welcome to the dashboard!
      </Typography>
      <SignOutButton />

   
      
    </Box>
  );
};

export default Dashboard;
