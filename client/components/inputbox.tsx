import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function EmailField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
    <Stack direction="row" spacing={2}>
      <TextField fullWidth label="Email Address" id="fullWidth" color="secondary" />
      <Button color="secondary" variant="outlined">Update</Button>
      </Stack>
    </Box>
  );
}