// ### Neutral

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
export enum Color {
  DarkModeBackground = '#333E48',
  DarkModeText = '#FFFFFF',
  DarkModeElements = '#2B3945',

  LightModeBackground = '#FAFAFA',
  LightModeText = '#111517',
  LightModeElements = '#FFFFFF'
}

export const lightTheme = {
  body: Color.LightModeElements,
  text: Color.LightModeText,
  background: Color.LightModeBackground
}
export const darkTheme = {
  body: Color.DarkModeElements,
  text: Color.DarkModeText,
  background: Color.DarkModeBackground
}
