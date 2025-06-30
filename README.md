# NextBite Food - Food Sharing Community

## Overview

NextBite Food is a modern food sharing platform built with Next.js that allows culinary enthusiasts to discover, share, and discuss delicious recipes. This application features a responsive design with beautiful animations, robust authentication, and seamless image uploads.

## Key Features

### Core Functionality

- 🍔 **Meal Discovery**: Browse delicious recipes with pagination and search
- 📸 **Image Uploads**: Seamless image hosting using UploadThing
- 👨‍🍳 **Recipe Sharing**: Submit your own recipes with detailed instructions
- 👥 **Community Hub**: Connect with other food enthusiasts
- 🔐 **Secure Authentication**: Login/signup with password hashing

### Technical Highlights

- ⚡️ Next.js App Router with RSC architecture
- 🎨 Responsive UI with CSS modules and animations
- 🔄 Optimistic UI updates with React `useActionState`
- 📊 SQLite database with better-sqlite3
- 🖼️ UploadThing integration for image hosting
- 🔍 Advanced search functionality with debouncing
- 📄 Pagination system for meal browsing

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── community/        # Community features
│   ├── meals/            # Meal-related pages
│   ├── layout.js         # Root layout
│   └── page.js           # Homepage
├── components/           # Reusable UI components
├── lib/                  # Utility functions and database operations
├── public/               # Static assets
├── server/               # Server utilities
└── styles/               # Global CSS
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextbite-food.git
cd nextbite-food
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

## Key Technologies

- **Next.js 15** - React framework for server-rendered applications
- **UploadThing** - File upload service
- **SQLite** - Lightweight database for meal storage
- **Lucia Auth** - Authentication library
- **React Icons** - Icon library
- **CSS Modules** - Component-scoped styling
- **better-sqlite3** - High-performance SQLite interface

## Custom Features Added

### 1. Advanced Search System

- Real-time meal filtering by keywords
- Debounced search queries for performance
- Preserves search context across navigation

### 2. Pagination System

- Splits meal listings into manageable pages
- Dynamic page size configuration
- Intuitive navigation controls
- Maintains search context across pages

### 3. UploadThing Integration

- Secure image uploads with 4MB limit
- CDN-hosted images for fast loading
- File type validation (PNG/JPEG)
- Progress indicators during upload

## Usage

### Browsing Meals

1. Visit the `/meals` page
2. Use the search bar to find specific meals
3. Navigate through pages using pagination controls

### Sharing a Recipe

1. Click "Share Your Favorite Recipe"
2. Fill in meal details and instructions
3. Upload an appetizing photo
4. Submit your recipe to the community

### Joining the Community

1. Visit the `/community` page
2. Learn about community perks and events
3. Connect with other food enthusiasts

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Enjoy cooking and sharing delicious meals with NextBite Food!** 🍳👨‍🍳👩‍🍳
