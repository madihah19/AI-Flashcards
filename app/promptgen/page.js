"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Grid,
} from "@mui/material";

// Define the theme directly in the component
const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // Purple
    },
    secondary: {
      main: '#03a9f4', // Blue
    },
    background: {
      default: '#f5f5f5', // Light grey background for contrast
    },
    text: {
      primary: '#333333', // Darker text for better readability
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Translucent white background
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          aspectRatio: '9 / 12', // Portrait orientation
          width: '200px', // Fixed width
          maxWidth: '100%',
          cursor: 'pointer', // Indicate that the card is clickable
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default function Home() {
  const [message, setMessage] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [revealedCards, setRevealedCards] = useState({});

  const fetchFlashcards = async () => {
    if (message.trim() === "") return;

    try {
      const response = await fetch("/api/chat/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: message }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botResponse += decoder.decode(value, { stream: true });
      }

      // Parse and set flashcards
      setFlashcards(parseFlashcards(botResponse));
    } catch (error) {
      console.error("Error fetching chat response:", error);
    }
  };

  const parseFlashcards = (text) => {
    // Adjusted regex pattern to capture questions and answers
    const cardPattern = /(\d+\. (.*?))\s*\*\s*Answer:\s*(.*?)(?:$|\n\n)/gs;
    const cards = [];
    let match;

    while ((match = cardPattern.exec(text)) !== null) {
      // Extract the question and answer
      const rawQuestion = match[2].trim();
      const rawAnswer = match[3].trim();

      // Remove leading and trailing '**', 'Question:', 'Answer:', and any '*' characters
      const question = rawQuestion
        .replace(/^\*\*\s*/, '') // Remove leading **
        .replace(/\s*\*\*$/, '') // Remove trailing **
        .replace(/^\s*Question:\s*/, '') // Remove Question: prefix
        .replace(/\s*\*$/, '') // Remove trailing *
        .replace(/\*/g, '') // Remove all '*' characters
        .trim();

      const answer = rawAnswer
        .replace(/^\*\*\s*/, '') // Remove leading **
        .replace(/\s*\*\*$/, '') // Remove trailing **
        .replace(/^\s*Answer:\s*/, '') // Remove Answer: prefix
        .replace(/\s*\*$/, '') // Remove trailing *
        .replace(/\*/g, '') // Remove all '*' characters
        .trim();

      cards.push({ question, answer });
    }

    return cards;
  };

  const handleCardClick = (index) => {
    setRevealedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSend = () => {
    fetchFlashcards();
    setMessage(""); // Clear the input after sending
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
        <Container maxWidth="md">
          <Stack spacing={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                marginBottom: 1, 
                textAlign: 'left', 
                fontFamily: '"Arial", sans-serif', // Change font family
                fontWeight: 'bold', // Change font weight
                fontSize: '1.2rem', // Change font size
              }}
            >
              Enter your prompt
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                label="Type your message..."
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                sx={{ borderRadius: 2 }}
              />
              <Button 
                variant="contained" 
                onClick={handleSend}
                sx={{ borderRadius: 2, paddingX: 3 }}
              >
                Send
              </Button>
            </Stack>
            <Box>
              <Typography variant="h6" sx={{ marginBottom: 2, fontFamily: '"Arial", sans-serif',fontWeight: 'bold', fontSize: '1.2rem',}}>Generated Flashcards:</Typography>
              {flashcards.length > 0 ? (
                <Grid container spacing={2} justifyContent="center">
                  {flashcards.map((card, index) => (
                    <Grid item key={index}>
                      <Card onClick={() => handleCardClick(index)}>
                        <CardContent sx={{ textAlign: 'center' }}>
                          {/* Only show question if answer is not revealed */}
                          {!revealedCards[index] && (
                            <Typography variant="h6" sx={{ marginBottom: 1, color: theme.palette.primary.main }}>
                              {card.question}
                            </Typography>
                          )}
                          {/* Only show answer if revealed */}
                          {revealedCards[index] && (
                            <Typography variant="body1" sx={{ marginTop: 2 }}>
                              {card.answer}
                            </Typography>
                          )}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography>No flashcards available.</Typography>
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
