# NextBite Food - Food Sharing Community

## Overview

NextBite Food is a modern food sharing platform built with Next.js that allows food enthusiasts to discover, share, and discuss delicious recipes. The application features:

- 🍔 Meal browsing with search and pagination
- 📸 Image uploads using UploadThing
- 👥 Community features for food lovers
- 🧩 Responsive design with animations
- ⚡️ Optimized performance with Next.js

## Features

### Core Functionality

- **Meal Discovery**: Browse delicious recipes with pagination
- **Advanced Search**: Find meals by keywords
- **Meal Sharing**: Submit your own recipes with image uploads
- **Community Engagement**: Connect with other food enthusiasts
- **Responsive Design**: Works on all device sizes

### Technical Highlights

- **UploadThing Integration**: For seamless image uploads
- **Pagination**: Efficient browsing of meal collections
- **Search Functionality**: Find meals quickly
- **Client-Side & Server-Side Rendering**: Optimal performance
- **Form Handling**: Robust form submission with validation
- **Animations**: Smooth UI transitions and loading states

## Installation

1. Clone the repository:

```bash
git clone https://github.com/nohahakim/NextBite.git
cd NextBite
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Fill in your UploadThing credentials:

```env
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
UPLOADTHING_TOKEN=your_uploadthing_token
```

4. Initialize the database:

```bash
node initdb.js
```

5. Start the development server:

```bash
npm run dev
```

## Project Structure

```
├── app/                  # Main application
│   ├── community/        # Community features
│   ├── meals/            # Meal-related pages
│   │   ├── [mealSlug]/   # Individual meal pages
│   │   ├── share/        # Meal sharing functionality
│   │   └── page.js       # Main meals page
│   ├── globals.css       # Global styles
│   ├── layout.js         # Main layout
│   └── page.js           # Home page
├── components/           # Reusable components
│   ├── images/           # Image components
│   ├── main-header/      # Navigation header
│   └── meals/            # Meal-related components
├── lib/                  # Utility functions
│   ├── actions.js        # Server actions
│   └── meals.js          # Meal database operations
├── public/               # Static assets
└── styles/               # CSS modules
```

## Key Technologies

- **Next.js 15** - React framework for server-rendered applications
- **UploadThing** - For handling image uploads
- **SQLite** - Lightweight database for meal storage
- **React DOM** - For client-side interactivity
- **CSS Modules** - For component-scoped styling
- **AWS SDK** - For image storage (optional)

## Customizations Added

### 1. Search Functionality

Implemented a robust search system that allows users to:

- Filter meals by keywords in titles
- See instant results

### 2. Pagination System

Added a pagination feature that:

- Splits meal listings into manageable pages
- Shows 10 meals per page by default
- Provides intuitive navigation controls
- Maintains search context across pages

### 3. UploadThing Integration

## Usage

### Browsing Meals

1. Visit the `/meals` page
2. Use the search bar to find specific meals
3. Navigate through pages using pagination controls

### Sharing a Meal

1. Click "Share Your Favorite Recipe"
2. Fill in meal details
3. Upload an image using the UploadThing widget
4. Submit your recipe

### Joining the Community

1. Visit the `/community` page
2. Learn about community perks
3. Engage with other food enthusiasts

## License

This project is licensed under the MIT License.

---

Enjoy cooking and sharing delicious meals with NextBite Food! 🍳👨‍🍳👩‍🍳
