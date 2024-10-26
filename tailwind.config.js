/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg':
          "url('https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      colors: {
        'custom-orange': '#FFA500',
      },
    },
  },
  plugins: [],
};
