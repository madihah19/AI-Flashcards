"use client";

import { useState } from "react";
import { CircularProgress, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const session = await res.json();

      if (res.ok) {
        router.push(session.url); // Redirect to Stripe Checkout
      } else {
        setError(session.error.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Pro Subscription
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Subscribe to our Pro plan for $10 per month.
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Subscribe Now
        </Button>
      )}
      {error && (
        <Typography variant="body1" color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default CheckoutPage;
