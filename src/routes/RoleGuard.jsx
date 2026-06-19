import { Navigate, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import useRole from '@/hooks/useRole';

/**
 * Founder/admin gate. Non-admins are redirected to their member dashboard.
 * Already inside the SignedIn boundary (see ProtectedAdmin), so user is authenticated.
 */
export default function RoleGuard() {
  const { isLoaded, isAdmin } = useRole();
  if (!isLoaded) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress size={28} />
      </Box>
    );
  }
  return isAdmin ? <Outlet /> : <Navigate to="/dashboard" replace />;
}
