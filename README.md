# CareThePlanet 🌱

A modern, responsive Next.js website for an environmental NGO focused on saving our planet through conservation efforts, sustainable projects, and community engagement.

## Features

- **Modern Design**: Clean, professional design with a green and white environmental theme
- **Fully Responsive**: Mobile-first approach with responsive design for all devices
- **TypeScript**: Built with TypeScript for better development experience and type safety
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **ESLint & Prettier**: Code quality and formatting tools for clean, consistent code
- **Component-Based**: Modular, reusable components for maintainable code

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint, Prettier
- **Package Manager**: npm/yarn

## Project Structure

```
caretheplanet/
├── components/          # Reusable UI components
│   ├── Navbar.tsx     # Navigation bar with mobile menu
│   └── Hero.tsx       # Hero section with mission statement
├── pages/              # Next.js pages and routing
│   ├── _app.tsx       # App wrapper with global styles
│   ├── _document.tsx  # Custom document setup
│   └── index.tsx      # Homepage
├── styles/             # Global styles and Tailwind CSS
│   └── globals.css    # Global CSS with Tailwind directives
├── public/             # Static assets (images, icons, etc.)
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
└── next.config.js      # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

- `eco-green`: Primary green color (#10B981)
- `eco-dark`: Darker green for hover states (#059669)
- `eco-light`: Lighter green for accents (#34D399)
- `eco-pale`: Very light green for backgrounds (#D1FAE5)

### Components

All components are located in the `components/` directory and can be easily customized:

- **Navbar**: Navigation with mobile-responsive hamburger menu
- **Hero**: Hero section with mission statement and call-to-action buttons
- **Footer**: Comprehensive footer with links and organization information

### Styling

The project uses Tailwind CSS utility classes and custom CSS components defined in `styles/globals.css`. Custom component classes include:

- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling
- `.section-padding`: Consistent section spacing
- `.container-custom`: Responsive container with max-width

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Traditional VPS with Node.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the GitHub repository.

---

**Together we can save our planet! 🌍🌱** 