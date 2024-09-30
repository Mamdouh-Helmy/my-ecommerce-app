
import { Slider, Box, Typography } from "@mui/material";

const PriceRange = ({ value, onChange }) => {
  const handleSliderChange = (event, newValue) => {
    onChange(newValue); // تمرير القيم المحدثة للأب
  };

  return (
    <Box sx={{ width: 300, padding: 2 }}>
      <Typography variant="h6">PRICE RANGE</Typography>

      <Slider
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        step={50}
        sx={{ color: "orange" }}
      />

      <Box display="flex" justifyContent="space-between" mb={2}>
        <input
          type="text"
          value={value[0]}
          readOnly
          style={{ width: "80px", textAlign: "center" }}
        />
        <input
          type="text"
          value={value[1]}
          readOnly
          style={{ width: "80px", textAlign: "center" }}
        />
      </Box>
    </Box>
  );
};

export default PriceRange;
