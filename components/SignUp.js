import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up');
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message); // Set error message to display to the user
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} width="300px" mx="auto" mt={10}>
      <Typography variant="h4" textAlign="center">Sign Up</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <Typography variant="body2" color="error" textAlign="center">
          {error}
        </Typography>
      )}
      <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
    </Box>
  );
}
