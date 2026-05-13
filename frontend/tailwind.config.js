export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Bright blue
        secondary: '#7c3aed', // Purple
        accent: '#f59e0b', // Amber
        emerald: '#10b981', // Emerald green
        mint: '#a7f3d0', // Light mint
        coral: '#f87171', // Coral red
        sky: '#0ea5e9', // Sky blue
        violet: '#8b5cf6', // Violet
        rose: '#ec4899', // Rose pink
        graysoft: '#f8fafc', // Soft gray
        card: 'rgba(255, 255, 255, 0.9)',
      },
      boxShadow: {
        card: '0 24px 60px rgba(37, 99, 235, 0.08)',
        'card-hover': '0 32px 80px rgba(37, 99, 235, 0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f59e0b 0%, #f87171 100%)',
      },
    },
  },
  plugins: [],
};
