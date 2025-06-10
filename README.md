
# Bella Vista Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS. This project showcases a complete restaurant web presence with online menu, reservation system, and contact information.

## 🌟 Features

- **Modern Design**: Clean, mobile-first UI with warm Italian restaurant theme
- **Interactive Menu**: Filterable menu with categories and dietary preferences
- **Reservation System**: Complete booking form with validation
- **Customer Testimonials**: Rotating testimonial carousel
- **Contact Information**: Complete contact details with map placeholder
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Subtle animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **React 18** - Modern JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bella-vista-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── Menu.tsx            # Interactive menu with filters
│   ├── About.tsx           # Restaurant story and features
│   ├── Reservations.tsx    # Booking form and info
│   ├── Testimonials.tsx    # Customer testimonial carousel
│   ├── Contact.tsx         # Contact info and map placeholder
│   └── Footer.tsx          # Site footer
├── pages/
│   ├── Index.tsx           # Main page layout
│   └── NotFound.tsx        # 404 error page
├── hooks/
│   └── use-toast.ts        # Toast notification hook
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Customization

### Colors & Branding
The design system is defined in `src/index.css` and `tailwind.config.ts`. Key color variables:
- `--restaurant-gold`: Gold accent color
- `--restaurant-brown`: Primary brown color
- `--restaurant-cream`: Light background color
- `--restaurant-dark`: Dark text color

### Content Updates
1. **Restaurant Info**: Update in `src/components/Contact.tsx` and `src/components/Footer.tsx`
2. **Menu Items**: Modify the `menuItems` array in `src/components/Menu.tsx`
3. **Testimonials**: Update the `testimonials` array in `src/components/Testimonials.tsx`
4. **Images**: Replace placeholder images with your restaurant photos

### Google Maps Integration
Replace the map placeholder in `src/components/Contact.tsx` with an actual Google Maps embed:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📝 Environment Variables

No environment variables are required for the basic setup. For production, you may want to add:
- Google Maps API key
- Analytics tracking ID
- Contact form submission endpoint

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

**Built with ❤️ for local restaurants looking to establish a strong online presence.**
