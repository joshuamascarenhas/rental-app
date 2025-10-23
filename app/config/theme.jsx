import { DarkTheme } from 'react-native-paper';

const VibrantDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#FF4081',          // Vibrant pink
    accent: '#7C4DFF',           // Bright violet accent
    background: '#121212',       // Dark background
    surface: '#1E1E1E',          // For inputs/cards
    text: '#FFFFFF',             // White text
    placeholder: '#BDBDBD',      // Grey placeholders
    error: '#CF6679',            // Soft red
    notification: '#FF80AB',     // Pink notifications
  },
};

export default VibrantDarkTheme;
