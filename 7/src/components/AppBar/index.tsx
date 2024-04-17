import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function NARAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NotAReal Co
          </Typography>
          <Link href="/volunteers">
            <Button variant="text" color="primary">
              Volunteers
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
