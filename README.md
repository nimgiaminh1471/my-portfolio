# Portfolio Website with Next.js

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a contact form that sends emails using Nodemailer.

## Features

- Responsive design
- Contact form with email functionality
- Modern UI with Tailwind CSS
- TypeScript support
- Server-side API routes

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Gmail account (for email functionality)

## Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Update the email credentials in `.env.local`:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-specific-password
     ```
   - For Gmail, you'll need to use an App Password:
     1. Go to your Google Account settings
     2. Enable 2-Step Verification if not already enabled
     3. Go to Security > App passwords
     4. Generate a new app password for "Mail"
     5. Use this password in your `.env.local` file

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

- `/src/app` - Next.js app directory
  - `/api` - API routes
  - `/components` - React components
  - `/styles` - Global styles
- `/public` - Static assets

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Nodemailer
- React 18

## License

MIT 