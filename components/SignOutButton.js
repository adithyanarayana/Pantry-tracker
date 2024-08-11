import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { Button } from '@mui/material';


export default function SignOutButton() {
    const handleSignOut = async () => {
      try {
        await signOut(auth);
        console.log('User signed out');
      } catch (error) {
        console.error('Error signing out:', error.message);
      }
    };
  
    return (
      <Button variant="contained" onClick={handleSignOut}>
        Sign Out
      </Button>
    );
  }