# PaxSonora ✨

A serene landing page for PaxSonora, your companion for mindfulness and emotional well-being.

## 💭 What is PaxSonora?

PaxSonora is a mindful meditation and emotional support app designed with a calm, minimalist aesthetic. This landing page welcomes visitors to our peaceful digital space and invites them to join our growing community.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework with App Router for seamless navigation
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code that's easier to maintain
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS for rapid UI development
- [Framer Motion](https://www.framer.com/motion/) - Beautiful animations that enhance the user experience

## 🌙 Features

- Responsive design that looks great on all devices
- Dark/light mode with smooth transitions
- Subtle animations that complement the calm aesthetic
- Optimized performance for a fast, seamless experience

## 🚀 Getting Started

### What You'll Need

- Node.js (v18 or newer)
- npm or yarn

### Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/paxsonora-website.git
   cd paxsonora-website
   ```

2. **Install packages**
   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the site in action.

## 🎨 Customization

The site uses Tailwind CSS for styling with a custom color palette defined in `tailwind.config.ts`. The main components are modular and can be easily modified:

- `HeroSection.tsx` - The main landing section with the animated orb
- `WhySection.tsx` - Information about the app's purpose
- `WaveDivider.tsx` - Decorative wave separators between sections
- `Footer.tsx` - Site footer with links

## 🌓 Dark Mode

The site includes a theme switcher component that respects user preferences while allowing manual toggling between light and dark modes. Colors automatically adjust for optimal readability in both themes.

## 📱 Responsive Design

The layout adapts seamlessly to different screen sizes from mobile to desktop, ensuring a consistent experience across all devices.

## 📋 Project Structure

- `app/`: Contains the core application routes (using Next.js App Router)
  - `layout.tsx`: The main layout component
  - `page.tsx`: The main landing page
  - `globals.css`: Global styles and Tailwind CSS imports
  - `waitlist/page.tsx`: Waitlist page
  - `privacy-policy/page.tsx`: Privacy Policy page
  - `contact/page.tsx`: Contact page
- `components/`: Contains reusable React components
  - `HeroSection.tsx`: The hero section of the landing page
  - `WaveDivider.tsx`: Component for SVG wave dividers
  - `WhySection.tsx`: The "Why I built PaxSonora" section
  - `Footer.tsx`: The site footer
  - `ThemeProvider.tsx`: Manages the theme state
  - `ThemeSwitcher.tsx`: UI component to toggle between light/dark modes
- `public/`: Static assets (e.g., images, favicons)
- `tailwind.config.ts`: Tailwind CSS configuration
- `next.config.mjs`: Next.js configuration

## 🎭 Theme

The site uses a carefully selected color palette that works beautifully in both light and dark modes:

- Primary colors that adapt to the current theme
- Gradient backgrounds that shift subtly between modes
- Text colors optimized for readability in any context

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/), the creators of Next.js. Connect your Git repository to Vercel for automatic deployments.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for a more mindful digital experience.
