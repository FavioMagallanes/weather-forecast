export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin')],
};
