// @project
import { extendPaletteWithChannels } from '@/utils/colorUtils';

/***************************  DEFAULT / AI THEME - PALETTE  ***************************/

export function buildPalette() {
  const textPrimary = '#1A1C1E'; // AI/neutral/10 - on surface
  const textSecondary = '#42474E'; // AI/neutral variant/30 - on surface variant
  const divider = '#C2C7CE'; // AI/neutral variant/80 - outline variant
  const background = '#FFF';

  const lightPalette = {
    primary: {
      lighter: '#ECE0FA', // JDP purple container
      light: '#C9A6EE', // JDP purple fixed dim
      main: '#7B2FBE', // JDP purple - primary
      dark: '#5B1E94', // JDP purple dark
      darker: '#2E0E4D' // JDP purple darkest
    },
    secondary: {
      lighter: '#CFF7F1', // JDP teal container
      light: '#7FE0D4', // JDP teal fixed dim
      main: '#00B5A0', // JDP teal - secondary
      dark: '#00897B', // JDP teal dark
      darker: '#063B36' // JDP teal darkest
    },
    grey: {
      50: '#F9F9FC', // AI/neutral/98 - surface / surface bright
      100: '#F1F4F9', // AI/neutral/96 - surface container low
      200: '#EBEEF3', // AI/neutral/94 - surface container
      300: '#E6E8EE', // AI/neutral/92 - surface container high
      400: '#E2E2E5', // AI/neutral/90 - surface container highest
      500: '#D7DADF', // AI/neutral/87 - surface dim
      600: divider, // AI/neutral variant/80 - outline variant
      700: '#72787E', // AI/neutral variant/50 - outline
      800: textSecondary, // AI/neutral variant/30 - on surface variant
      900: textPrimary // AI/neutral/10 - on surface
    },
    text: {
      primary: textPrimary, // AI/neutral/10 - on surface
      secondary: textSecondary // AI/neutral variant/30 - on surface variant
    },
    divider,
    background: {
      default: background
    }
  };

  const commonColor = { common: { black: '#000', white: '#fff' } };

  const extendedLight = extendPaletteWithChannels(lightPalette);
  const extendedCommon = extendPaletteWithChannels(commonColor);

  return {
    light: {
      mode: 'light',
      ...extendedCommon,
      ...extendedLight
    }
  };
}
