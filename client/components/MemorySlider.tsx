import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const marks = [
    {
      value: 250,
      label: '250 MB',
    },
    {
        value: 500,
        label: '500 MB',
    },
    {
      value: 750,
      label: '750 MB',
    },
    {
      value: 1000,
      label: '1000 MB',
    },
  ];

function valuetext(value: number) {
  return `${value} MB`;
}

export default function MemorySlider() {
  return (
    <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Memory (megabytes)"
        defaultValue={1000}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={10}
        marks={marks}
        min={0}
        max={1250}
        color="secondary"
        
      />

    </Box>
  );
}
