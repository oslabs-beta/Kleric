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
        <TextField id="filled-basic" label="Email Address" variant="filled" color="secondary" />
        <Button color="secondary">Update</Button>
      </Stack>
    </Box>
  );
}