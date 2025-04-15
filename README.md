# SS Travels - Luxury Car Rental

A luxury car rental website for Indian weddings and events with animated dark jellyfish theme.

## Features

- Elegant dark theme with animated elements
- Fleet of premium vehicles for rent
- Booking system for events and special occasions
- Destination listings across India
- Responsive design for all devices

## Running Locally in VS Code

This project can be run locally in VS Code. Check out the [VS Code Setup Guide](./vscode-setup.md) for detailed instructions on setting up your local development environment.

### Quick Start

1. Clone the repository to your local machine
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env`
4. Add the `dev:local` script to your package.json scripts section
5. Run `npm run dev:local`

## Deployment to Vercel

This project is configured for easy deployment to Vercel. Follow these steps:

1. Create an account on [Vercel](https://vercel.com/) if you don't have one already
2. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```
3. In Vercel, click "Import Project" and select your GitHub repository
4. Configure the project with:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

## Running on Replit

The project is already configured to run on Replit through the "Start application" workflow, which runs `npm run dev`.

## Project Structure

- `client/` - Frontend React application
  - `src/` - Source code
    - `components/` - React components
    - `hooks/` - Custom React hooks
    - `lib/` - Utility functions
    - `pages/` - Page components
- `server/` - Backend Express application
  - `index.ts` - Server entry point
  - `routes.ts` - API routes
  - `storage.ts` - Data storage
- `shared/` - Shared code between frontend and backend
  - `schema.ts` - Data models and validation

## Tech Stack

- React.js with TypeScript
- Express.js backend
- Tailwind CSS for styling
- Framer Motion for animations
- React Query for API requests
- ShadCN UI components

## Contact

For any questions or issues, please contact the project maintainer: shuklamrsk682@gmail.com