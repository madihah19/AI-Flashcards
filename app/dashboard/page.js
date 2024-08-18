'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2979ff', // Blue
    },
    secondary: {
      main: '#d1c4e9', // Light Purple
    },
    background: {
      default: '#f5f5f5', // Light grey background
      paper: '#ffffff', // White background for paper components
    },
  },
  typography: {
    fontFamily: 'Times New Roman, serif',
    h4: {
      fontWeight: 700,
      color: '#2979ff', // Black for main headers
      fontSize: '2rem',
      marginBottom: '30px',
    },
    h5: {
      fontWeight: 600,
      color: '#000000', // Black for subheaders
      fontSize: '1.75rem',
      marginBottom: '20px',
    },
    h6: {
      fontWeight: 700,
      color: '#2979ff', // Blue for section headings
      fontSize: '1.5rem',
      marginBottom: '20px',
    },
    h7: {
      fontWeight: 700,
      color: '#000000', // Blue for section headings
      fontSize: '3rem',
      marginBottom: '20px',
    },
    body1: {
      color: '#333333', // Dark grey for body text
      fontSize: '1.125rem',
      lineHeight: 1.6,
      marginBottom: '20px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
      padding: '10px 20px',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '24px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Soft shadow
          borderRadius: 12, // Rounded corners
          backgroundColor: '#ffffff', // White background for paper components
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
            transform: 'translateY(-4px)', // Lift effect on hover
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '12px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#003c8f', // Darker blue on hover
            color: '#ffffff',
          },
        },
        outlined: {
          borderColor: '#2979ff',
          color: '#2979ff',
          '&:hover': {
            backgroundColor: '#e3f2fd', // Light blue on hover
            borderColor: '#2979ff',
          },
        },
      },
    },
  },
});

const Dashboard = () => {
  const [view, setView] = useState('home');

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 4, backgroundColor: '#5e70c4' }}>
        <Grid container spacing={4} sx={{ marginBottom: 4 }}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h7" sx={{ marginBottom: 2 }}>
                Welcome to Your Dashboard!
              </Typography>
              <Typography variant="body1">
                Explore the features of our application, manage your flashcards, and check out our pricing options.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ textAlign: 'center' }}>
              <Typography variant="h6">
                Create New Flashcards
              </Typography>
              <Typography variant="body1">
                Generate a new deck of AI-powered flashcards with a single click.
              </Typography>

              <Button variant="contained" color="primary">
                 <Link href="/promptgen" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Generate
                  </Link>
              </Button>
             
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ textAlign: 'center' }}>
              <Typography variant="h6">
                Saved Flashcards
              </Typography>
              <Typography variant="body1">
                Access and review your previously saved flashcards.
              </Typography>
              <Button variant="contained" color="primary">
              <Link href="/flashcards" style={{ textDecoration: 'none', color: 'inherit' }}>
                    View Saved Flashcards
                  </Link>
              </Button>
            </Paper>
          </Grid>

          
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ textAlign: 'center', padding: '40px', backgroundColor: '#5e70c4' }}>
                <Typography variant="h5" sx={{ marginBottom: 4 , fontSize: '3rem'}}>
                  Pricing
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: '24px', textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        Free
                      </Typography>
                      <Typography variant="h4" sx={{ marginBottom: 2 }}>
                        $0
                      </Typography>
                      <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        Enjoy generating upto 10 prompts free of charge !
                      </Typography>
                      <Button variant="contained" color="primary" href="/sign-up">
                        Get Started
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: '24px', textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        Hobbyist
                      </Typography>
                      <Typography variant="h4" sx={{ marginBottom: 2 }}>
                        $8/month
                      </Typography>
                      <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        Ideal for students and exam aspirants. Perfect for revisions!
                      </Typography>
                      <Button variant="contained" color="primary" href="/sign-up">
                        Get Started
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: '24px', textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        Pro
                      </Typography>
                      <Typography variant="h4" sx={{ marginBottom: 2 }}>
                        $20/month
                      </Typography>
                      <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        Perfect for professionals needing advanced features.
                      </Typography>
                      <Button variant="contained" color="primary" href="/sign-up">
                        Get Started
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          

         
            
         
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;