
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { TextField, Button, Box, Typography, Stack } from '@mui/material';
import SignUp from "/components/SignUp";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in');
    } catch (error) {
      setError('Error signing in: ' + error.message);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      sx={{
        backgroundImage: `url('/pantry2.jpg')`, // Add your image path here
        backgroundSize: 'cover', // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the image
      }}
    >
      <Box
        width="400px"
        bgcolor="white"
        p={4}
        borderRadius="8px"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        textAlign="center"
      >
        {showSignUp ? (
          <SignUp />  // Render SignUp component if showSignUp is true
        ) : (
          <>
            <Typography variant="h4" color="#333" mb={3}>
              Welcome Back!
            </Typography>
            <Typography variant="body1" color="#666" mb={4}>
              Sign in to access your personal inventory manager.
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
              <Button variant="contained" onClick={handleSignIn} fullWidth>
                Sign In
              </Button>
              <Typography variant="body2">
              Don&apos;t have an account?{' '}
                <Button variant="text" onClick={() => setShowSignUp(true)}>
                  Sign Up
                </Button>
              </Typography>
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
}
