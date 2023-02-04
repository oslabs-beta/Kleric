import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const marks = [
    {
      value: 0.3,
      label: '0.3',
    },
    {
        value: 7.5,
        label: '7.5',
    },
    {
      value: 1.2,
      label: '1.2',
    },
  ];

function valuetext(value: number) {
  return `${value}`;
}

export default function CPUSlider() {
  return (
    <Box sx={{ width: 400 }}>
      <Slider
        aria-label="CPU (megabytes)"
        defaultValue={0.1}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={0.001}
        marks={marks}
        min={0.0}
        max={1.5}
        color="secondary"
      />

    </Box>
  );
}
