# UniqueFotoFasion - React Portfolio

A modern, elegant fashion photography portfolio website built with React.

## Features

- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Multiple Pages**: Home, Portfolio, Stories, Services, About, Pricing, and Contact
- **Interactive Elements**: Parallax effects, scroll animations, and 3D tilt effects
- **Fast Loading**: Optimized with React and Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
uff/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Loader.jsx
│   │   ├── Navigation.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Pricing.jsx
│   │   ├── Services.jsx
│   │   └── Stories.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styles with animations and responsive design

## Customization

### Adding Images

Replace the placeholder text in the components with your actual images. You can:
1. Add images to a `public/images/` folder
2. Reference them in your components: `<img src="/images/your-image.jpg" alt="Description" />`

### Modifying Content

All content can be found in the respective component files:
- Home page content: `src/components/Home.jsx`
- Services: `src/components/Services.jsx`
- About/Team: `src/components/About.jsx`
- Pricing packages: `src/components/Pricing.jsx`
- Stories: `src/components/Stories.jsx`

### Styling

Main styles are in `src/styles/index.css`. The color scheme uses CSS variables:
- `--dark`: #1a1a1a
- `--light`: #f5f5f5
- `--accent`: #d4af37

## License

This project is open source and available for personal and commercial use.

