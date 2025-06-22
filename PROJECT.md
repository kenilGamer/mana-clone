# Mana Clone - Project Documentation

## Overview

Mana Clone is a modern React application built with Vite, featuring a beautiful UI with Tailwind CSS styling and GSAP animations. The project appears to be a clone or inspired design with multiple pages and components.

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Animations**: GSAP 3.13.0
- **Icons**: React Icons 5.5.0
- **Linting**: ESLint 9.25.0

## 📁 Project Structure

```
mana-clone/
├── public/
│   ├── fonts/          # Custom fonts (Kefir family)
│   └── images/         # Project images and assets
├── src/
│   ├── components/     # React components
│   │   ├── Footer.jsx
│   │   ├── Homepage.jsx
│   │   ├── Page2.jsx
│   │   ├── Page3.jsx
│   │   └── page4.jsx
│   ├── partials/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── review-card.jsx
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🎨 Design Assets

### Fonts
- **Kefir-Black.otf**: Bold typography for headings
- **Kefir-Regular.otf**: Regular weight for body text

### Images
The project includes various images for:
- Product showcases
- Nutritional information
- Visual content
- Logo and branding elements

## 🛠️ Development

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/kenilGamer/mana-clone.git
cd mana-clone

# Install dependencies
npm install
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📱 Pages & Components

### Main Pages
1. **Homepage** (`Homepage.jsx`) - Landing page with hero section
2. **Page 2** (`Page2.jsx`) - Secondary content page
3. **Page 3** (`Page3.jsx`) - Additional content page
4. **Page 4** (`page4.jsx`) - Fourth content page

### Reusable Components
- **Navbar** (`Navbar.jsx`) - Navigation header
- **Footer** (`Footer.jsx`) - Site footer
- **Review Card** (`review-card.jsx`) - Customer review component

## 🎭 Animations

The project utilizes GSAP (GreenSock Animation Platform) for smooth, performant animations. The `@gsap/react` package provides React-specific hooks and utilities for integrating GSAP animations seamlessly.

## 🎨 Styling

Tailwind CSS 4.1.10 is used for utility-first styling, providing:
- Responsive design utilities
- Custom color schemes
- Component-based styling
- Optimized production builds

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **eslint.config.js**: ESLint rules and configuration
- **package.json**: Project dependencies and scripts

## 🚀 Deployment

The project is configured for easy deployment with Vite's build system:

1. Run `npm run build` to create optimized production files
2. Deploy the `dist/` folder to your hosting provider
3. For static hosting, ensure proper routing configuration

## 📝 Development Notes

- The project uses modern React features and hooks
- GSAP animations are optimized for performance
- Tailwind CSS provides a consistent design system
- ESLint ensures code quality and consistency

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## 📄 License

[Add your license information here]

---

**Last Updated**: [Current Date]
**Version**: 0.0.0 