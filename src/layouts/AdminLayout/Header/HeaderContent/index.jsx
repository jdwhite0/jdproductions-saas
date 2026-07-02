// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { UserButton } from '@clerk/clerk-react';

// @project
import ThemeModeSwitcher from './ThemeModeSwitcher';
import Breadcrumbs from '@/components/Breadcrumbs';

/***************************  HEADER CONTENT  ***************************/

export default function HeaderContent() {
  return (
    <>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: { xs: 'flex-end', md: 'space-between' }, gap: 2, width: 1 }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Breadcrumbs />
        </Box>
        <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
          <ThemeModeSwitcher />
          <UserButton afterSignOutUrl="/auth/login" appearance={{ elements: { avatarBox: { width: 36, height: 36 } } }} />
        </Stack>
      </Stack>
    </>
  );
}
