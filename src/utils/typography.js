import Typography from 'typography';
import Alton from 'typography-theme-alton';

delete Alton.googleFonts;
Alton.scaleRatio = 1.7;

const typography = new Typography(Alton);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
