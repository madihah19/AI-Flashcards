'use client'

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from "@mui/material"
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { useSearchParams } from "next/navigation"

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [flashcards, setFlashcards] = useState([])
  const [flipped, setFlipped] = useState({})

  const searchParams = useSearchParams()
  const search = searchParams.get('id')

  useEffect(() => {
    async function getFlashcard() {
        const mockUserId = "user-id";  // Replace with the actual user ID
        const search = "Cake Set";  // Hardcode a search term for testing

        console.log("Search parameter:", search);
        console.log("User ID:", mockUserId);

        try {
            const colRef = collection(doc(collection(db, 'users'), mockUserId), 'flashcardSets', search, 'flashcards');
            console.log("Fetching flashcards from:", colRef.path);

            const docs = await getDocs(colRef);
            const flashcards = [];
            
            docs.forEach((doc) => {
                flashcards.push({ id: doc.id, ...doc.data() });
            });
            
            setFlashcards(flashcards);
            console.log("Flashcards fetched:", flashcards);
        } catch (error) {
            console.error("Error fetching flashcards:", error);
        }
    }
    
    getFlashcard();
}, []);

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  if (!isLoaded || !isSignedIn) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.length > 0 ? (
          flashcards.map((flashcard) => (
            <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
              <Card>
                <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                  <CardContent>
                    <Box sx={{ perspective: "1000px" }}>
                      <div
                        className="card"
                        style={{
                          transition: "transform 0.6s",
                          transformStyle: "preserve-3d",
                          position: "relative",
                          height: "200px",
                          width: "100%",
                          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                          transform: flipped[flashcard.id] ? "rotateY(180deg)" : "rotateY(0deg)",
                        }}
                      >
                        <div
                          className="front"
                          style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            boxSizing: "border-box",
                          }}
                        >
                          <Typography variant="h5" component="div">
                            {flashcard.question}
                          </Typography>
                        </div>
                        <div
                          className="back"
                          style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            boxSizing: "border-box",
                            transform: "rotateY(180deg)",
                          }}
                        >
                          <Typography variant="h5" component="div">
                            {flashcard.answer}
                          </Typography>
                        </div>
                      </div>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No flashcards found in this set.</Typography>
        )}
      </Grid>
    </Container>
  )
}
