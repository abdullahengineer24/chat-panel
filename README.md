# Aikom Bot Bureau - Design Clone

A pixel-perfect clone of the Aikom Bot Bureau design from Adobe XD, built with React, Tailwind CSS, and shadcn/ui components.

## Features

### 🎨 Design Fidelity
- **Exact color matching** with the original Adobe XD design
- **3D robot illustration** with floating animations and glowing effects
- **Purple gradient background** with geometric grid patterns
- **Responsive design** that works on desktop and mobile devices

### 🚀 Interactive Elements
- **Animated 3D robot** with floating motion and pulsing lights
- **Smooth transitions** and hover effects throughout the interface
- **Loading states** with custom spinner animations
- **Form validation** and interactive feedback

### 📱 Two Main Screens

#### Login Page
- Split-screen layout with 3D robot on the left
- Clean, modern login form on the right
- Features:
  - Email and password inputs with validation
  - Show/hide password toggle
  - Remember me checkbox
  - Forgot password link
  - Loading state during sign-in

#### Dashboard
- Professional admin interface
- Statistics cards with trend indicators
- Active bots management table
- Features:
  - Search and filter functionality
  - Pagination controls
  - Color-coded bot avatars
  - Embed code generation
  - Responsive sidebar navigation

### 🛠 Technical Implementation
- **React 18** with functional components and hooks
- **Tailwind CSS** for styling and responsive design
- **shadcn/ui** components for consistent UI elements
- **Lucide React** icons for modern iconography
- **Custom CSS animations** for 3D effects and transitions
- **Responsive design** with mobile-first approach

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aikom-bot-bureau
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── LoginPage.jsx    # Login screen component
│   └── Dashboard.jsx    # Dashboard screen component
├── assets/              # Static assets
├── App.jsx              # Main application component
├── App.css              # Custom styles and animations
└── main.jsx             # Application entry point
```

## Key Design Elements

### Color Palette
- **Primary Green**: #10B981 (buttons, accents)
- **Purple Gradient**: #4A148C to #7B1FA2 (background)
- **Cyan Accents**: #06B6D4 (robot elements, chat bubble)
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Primary Font**: System font stack with fallbacks
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for readability

### Animations
- **Robot floating**: Smooth up/down motion
- **Pulsing elements**: Subtle breathing effect on lights
- **Hover effects**: Lift and scale transformations
- **Loading states**: Spinning animations

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Features

- **Optimized animations** using CSS transforms
- **Lazy loading** for better initial load times
- **Responsive images** and assets
- **Minimal bundle size** with tree shaking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for demonstration purposes. Please respect the original design ownership.

---

Built with ❤️ using React and modern web technologies.

