import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function MemoryAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="error">
        Error: Memory usage is excessively high!
      </Alert>
    </Stack>
  );
}