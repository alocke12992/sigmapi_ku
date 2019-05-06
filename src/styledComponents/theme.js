import { css } from 'styled-components';
const sizes = {
  tablet: 768,
  desktop: 1280,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const colors = {
  
}

const theme = {
  colors: {
    darkGrey: '#333333',
    midGrey: '#8B8A87',
    lightGrey: '#EAEBEB',
    subduedGrey: '#9f9f9f',
    lineColor: '#E4E4E4',
    white: '#FFFFFF',
    purple: '#3f3a5f',
    lightPurple: '#8c88a3',
  },
  media: {
    "tablet": "768px",
    "desktop": "1440px",
  }
};



export default theme;
export { media };