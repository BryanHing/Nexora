# Nexora Frontend

AI-powered workplace assistant - Frontend Application

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Linting & Formatting

```bash
npm run lint
npm run lint:fix
npm run format
```

## 📁 Project Structure

```
src/
├── components/       # Reusable React components
│   └── common/      # Common UI components
├── pages/           # Page components
│   ├── auth/        # Authentication pages
│   ├── emails/      # Email related pages
│   ├── meetings/    # Meeting related pages
│   ├── documents/   # Document related pages
│   └── tasks/       # Task related pages
├── hooks/           # Custom React hooks
├── services/        # API services
├── store/           # Redux store & slices
├── types/           # TypeScript types
├── utils/           # Utility functions
├── App.tsx          # Main App component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## ✅ Key Features

✅ Authentication (Login/Signup)
✅ Dashboard with statistics
✅ Email management & AI summaries
✅ Meeting transcription & analysis
✅ Document analysis (PDF, CSV, Excel)
✅ Task management
✅ Dark mode support
✅ Responsive design
✅ Real-time notifications

## 🔄 API Integration

The frontend connects to the backend API at `http://localhost:5000/api`

Update `.env.local`:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

## 📝 License

MIT License - See LICENSE file for details
