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

      {/* Your Profile */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Box
            sx={{
              padding: 4,
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
              boxShadow: 3,
              textAlign: 'center',
              marginTop: 6,
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Your Profile
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
              Here you can view and edit your profile information.
            </Typography>
            <Button variant="outlined" color="primary">
              Edit Profile
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Basic Plan */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                padding: 4,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Basic Plan
              </Typography>
              <Typography variant="h4" sx={{ marginBottom: 4 }}>
                $9.99/month
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 4 }} // Pushes the button lower
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          {/* Pro Plan */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                padding: 4,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Pro Plan
              </Typography>
              <Typography variant="h4" sx={{ marginBottom: 4 }}>
                $19.99/month
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 4 }} // Pushes the button lower
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          {/* Premium Plan */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                padding: 4,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Premium Plan
              </Typography>
              <Typography variant="h4" sx={{ marginBottom: 4 }}>
                $29.99/month
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 4 }} // Pushes the button lower
              >
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
