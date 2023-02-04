import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

export default function MemoryAlert() {
  const [open, setOpen] = useState(true);

  return (
    <Stack sx={{ width: '96%' }} spacing={2}>
      <Collapse in={open}>
        <Alert 
          variant="outlined" 
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Warning: Memory usage is excessively high!
        </Alert>
      </Collapse>
    </Stack>
  );
}