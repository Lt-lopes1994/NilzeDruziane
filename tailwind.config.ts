import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'goldenYellow': '#f0d689',
        'secondary': '#1f2833',
        'tertiary': '#c5c6c7',
        'quaternary': '#66fcf1',
      },
      backgroundImage: {
        containerCoursesBackgorund: 'url(/assets/Gif/_import_60c2fc0a2d4675.24334274.gif) ',
        headerBackground:  'linear-gradient(to bottom, #545454, #000) ',
        heroBackground: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1455243629161-1f993797f78d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) ',
      },
    },
  },
  plugins: [],
}
export default config
