'use client'

import React from 'react';
import { SignOutButton } from '../signout/page'; // Adjust the path based on your project structure
import { Grid, Box, Typography } from '@mui/material';

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

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box 
            sx={{ 
              p: 3, 
              bgcolor: '#f5f5f5', 
              borderRadius: 2, 
              boxShadow: 2,
              height: 'auto' // Ensures the grid item adapts to its content
            }}
          >
            <Typography>Content for xs=8</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box 
            sx={{ 
              p: 3, 
              bgcolor: '#f5f5f5', 
              borderRadius: 2, 
              boxShadow: 2,
              height: 'auto' // Ensures the grid item adapts to its content
            }}
          >
            <Typography>Content for xs=4</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box 
            sx={{ 
              p: 3, 
              bgcolor: '#f5f5f5', 
              borderRadius: 2, 
              boxShadow: 2,
              height: 'auto' // Ensures the grid item adapts to its content
            }}
          >
            <Typography>Content for xs=4</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box 
            sx={{ 
              p: 3, 
              bgcolor: '#f5f5f5', 
              borderRadius: 2, 
              boxShadow: 2,
              height: 'auto' // Ensures the grid item adapts to its content
            }}
          >
            <Typography>Content for xs=8</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
