import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssViewportHeightCorrection from 'postcss-viewport-height-correction';
export default {
  plugins: [postcssViewportHeightCorrection, tailwindcss, autoprefixer],
};
