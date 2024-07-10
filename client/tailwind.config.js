/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                'dark-1': '#121212',
                'dark-2': '#2a2a2a',
                'dark-3': '#3a3a3a',
                'btn-1': '#308CE8'
            },
            boxShadow: {
                'shadow-1': '0 4px 8px rgba(0, 0, 0, 0.1)',
                'shadow-2': '0 8px 16px rgba(0, 0, 0, 0.2)'
            }
        },
    },
    plugins: [],
}
  
  