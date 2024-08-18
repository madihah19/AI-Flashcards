'use client'

import React from 'react';
import { useClerk } from '@clerk/nextjs';

export const SignOutButton = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut({ redirectUrl: '/' }); // Redirect after sign out
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      style={{
        background: '#f44336',
        color: '#fff',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Sign out
    </button>
  );
};
