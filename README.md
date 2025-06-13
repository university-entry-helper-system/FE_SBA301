# Student Exam Results Portal

A web application for looking up and viewing student exam results.

## Features

- Exam type and year selection
- Student information lookup
- Detailed exam results view
- Search history
- Responsive design

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- React Query
- Axios
- Tailwind CSS
- Zod (for validation)
- Zustand (for state management)

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/university-entry-helper-system/FE_SBA301.git
   cd SBA_FE
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment files:
   - Copy `.env.example` to create a new `.env` file:
     ```bash
     cp .env.example .env
     ```
   - Update the values in `.env` according to your setup

### Environment Variables

The following environment variables are required:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8080/api
VITE_API_TIMEOUT=30000

# Application Configuration
VITE_APP_NAME="SBA Frontend"
VITE_APP_ENV=development

# Authentication
VITE_AUTH_TOKEN_KEY=auth_token
VITE_REFRESH_TOKEN_KEY=refresh_token
```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

### Running Tests

```bash
npm run test
```

## Project Structure

```
src/
├── features/          # Feature-based modules
├── shared/           # Shared components and utilities
├── pages/            # Page components
├── assets/           # Static assets
└── config/           # Configuration files
```

## Contributing

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Commit your changes:
   ```bash
   git add .
   git commit -m "feat(): your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request

## License

This project is licensed under the MIT License.

<!-- npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms -->
<!-- npx tailwindcss init -p -->
<!-- npx tailwindcss -i ./src/shared/styles/global.css -o ./dist/output.css --watch -->
