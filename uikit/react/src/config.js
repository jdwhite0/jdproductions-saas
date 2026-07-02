// @next
// JDP brand fonts: Space Grotesk (display) + Inter (body). Keeps export names
// (FONT_ARCHIVO/FONT_FIGTREE) so typography.js stays untouched — see JDP brand guideline.
import { Space_Grotesk, Inter, Roboto, Orbitron } from 'next/font/google';

export let Themes;

(function (Themes) {
  Themes['THEME_DEFAULT'] = 'default';
  Themes['THEME_CRM'] = 'crm';
  Themes['THEME_AI'] = 'ai';
  Themes['THEME_CRYPTO'] = 'crypto';
  Themes['THEME_HOSTING'] = 'hosting';
  Themes['THEME_PMS'] = 'pms';
  Themes['THEME_HRM'] = 'hrm';
  Themes['THEME_PLUGIN'] = 'plugin';
  Themes['THEME_LMS'] = 'lms';
})(Themes || (Themes = {}));

export const CSS_VAR_PREFIX = '';

/***************************  CONFIG  ***************************/

const config = {
  currentTheme: Themes.THEME_DEFAULT
};

export default config;

/***************************  THEME - FONT FAMILY  ***************************/

const fontRobot = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });
const fontSpaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const fontInter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const fontOrbitron = Orbitron({ subsets: ['latin'], weight: ['700', '800', '900'] });

export const FONT_ROBOTO = fontRobot.style.fontFamily;
export const FONT_ARCHIVO = fontSpaceGrotesk.style.fontFamily; // display → Space Grotesk
export const FONT_FIGTREE = fontInter.style.fontFamily; // body → Inter
export const FONT_ORBITRON = fontOrbitron.style.fontFamily; // JDPay wordmark logo (super bold 900)
