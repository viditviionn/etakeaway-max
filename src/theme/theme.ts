// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    // ... other theme overrides
  });
  
  export default theme;
