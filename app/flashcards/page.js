'use client'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useRouter } from 'next/navigation'
import { Container, Grid, Card, CardActionArea, CardContent, Typography, CircularProgress, Box, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'


export default function Flashcards() {
  const [flashcardSets, setFlashcardSets] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const testUserId = 'user-id'  // Replace with the actual user ID you want to test with

  const handleCardClick = (index) => {
    router.push(`/flashcard?id=${index}`)
  }

  const handleGoBack = () => {
    router.push('/promptgen')
  }

  useEffect(() => {
    async function getFlashcardSets() {
      try {
        const userDocRef = doc(db, 'users', testUserId)
        const userDocSnap = await getDoc(userDocRef)

        if (userDocSnap.exists()) {
          const data = userDocSnap.data()
          const flashcardSetsData = data.flashcardSets || []
          console.log('Flashcard Sets Data:', flashcardSetsData)
          setFlashcardSets(flashcardSetsData)
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error("Error fetching flashcard sets: ", error)
      } finally {
        setLoading(false)
      }
    }

    getFlashcardSets()
  }, [])

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 4 }}>
        <IconButton onClick={handleGoBack} sx={{ position: 'relative', top: 8 }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Grid container spacing={3}>
        {flashcardSets.length > 0 ? (
          flashcardSets.map((flashcardSet, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: '#f5f5f5', color: '#333' }}>
                <CardActionArea onClick={() => handleCardClick(index)}>
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ color: '#333' }}>
                      {flashcardSet.name || 'Untitled Set'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No flashcard sets found.</Typography>
        )}
      </Grid>
    </Container>
  )
}
