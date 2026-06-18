// @project
import { extendPaletteWithChannels, withAlpha } from '@/utils/colorUtils';

/***************************  DEFAULT - PALETTE  ***************************/

export function buildPalette() {
  const textPrimary = '#1B1B1F'; // Hosting/neutral/10 - on surface
  const textSecondary = '#46464F'; // Hosting/neutral variant/30 - on surface variant

  const secondaryMain = '#5A5C78'; // Hosting/secondary/40 - secondary

  const divider = '#EFEDF4'; // Hosting/neutral/94 - surface container
  const background = '#FFF';

  const disabled = '#777680'; // Hosting/neutral variant/50 - outline
  const disabledBackground = '#E4E1E6'; // Hosting/neutral/90 - surface container highest

  const lightPalette = {
    // JD Productions — navy primary (buttons, nav, focus)
    primary: {
      lighter: '#E3E9F0', // palest navy tint — containers
      light: '#33597A', // hover / lighter navy
      main: '#002244', // JD navy — primary
      dark: '#001B36', // pressed
      darker: '#001022' // deepest
    },
    // JD Productions — gold accent
    secondary: {
      lighter: '#FFF3CC', // palest gold tint
      light: '#FFD968', // light gold
      main: '#FFC20E', // JD gold — accent
      dark: '#E0A500', // gold-2
      darker: '#A06F00' // gold-ink
    },
    error: {
      lighter: '#FFEDEA', // error/90 - error container / error fixed
      light: '#FFDAD6', // error/80 - error fixed dim
      main: '#DE3730', // error/40 - error
      dark: '#BA1A1A', // error/30 - on error fixed variant
      darker: '#690005' // error/10 - on error container / on error fixed
    },
    warning: {
      lighter: '#FFEEE1', // warning/90 - warning container / warning fixed
      light: '#FFDCBE', // warning/80 - warning fixed dim
      main: '#AE6600', // warning/40 - warning
      dark: '#8B5000', // warning/30 - on warning fixed variant
      darker: '#4A2800' // warning/10 - on warning container / on warning fixed
    },
    success: {
      lighter: '#C8FFC0', // success/90 - success container / success fixed
      light: '#B6F2AF', // success/80 - success fixed dim
      main: '#22892F', // success/40 - success
      dark: '#006E1C', // success/30 - on success fixed variant
      darker: '#00390A' // success/10 - on success container / on success fixed
    },
    info: {
      lighter: '#D4F7FF', // info/90 - info container / info fixed
      light: '#A1EFFF', // info/80 - info fixed dim
      main: '#008394', // info/40 - info
      dark: '#006876', // info/30 - on info fixed variant
      darker: '#00363E' // info/10 - on info container / on info fixed
    },
    grey: {
      50: '#FBF8FF', // Hosting/neutral/98 - surface / surface bright
      100: '#F5F2FA', // Hosting/neutral/96 - surface container low
      200: divider, // Hosting/neutral/94 - surface container
      300: '#EAE7EF', // Hosting/neutral/92 - surface container high
      400: disabledBackground, // Hosting/neutral/90 - surface container highest
      500: '#DBD9E0', // Hosting/neutral/87 - surface dim
      600: '#C7C5D0', // Hosting/neutral variant/80 - outline variant
      700: disabled, // Hosting/neutral variant/50 - outline
      800: textSecondary, // Hosting/neutral variant/30 - on surface variant
      900: textPrimary // Hosting/neutral/10 - on surface
    },
    text: {
      primary: textPrimary, // Hosting/neutral/10 - on surface
      secondary: textSecondary, // Hosting/neutral variant/30 - on surface variant
      disabled: disabled
    },
    divider,
    background: {
      default: background
    },
    action: {
      hover: withAlpha(secondaryMain, 0.05),
      disabled: withAlpha(disabled, 0.6),
      disabledBackground: withAlpha(disabledBackground, 0.9)
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
