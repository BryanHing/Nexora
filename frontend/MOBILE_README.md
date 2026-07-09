# Nexora Mobile App

Modern Android-style mobile application built with React

## 🚀 Features

✅ Bottom navigation (Android style)
✅ Full-screen mobile layout
✅ Material Design 3
✅ Touch-optimized UI
✅ Mobile-first responsive
✅ Dark mode support
✅ Local storage integration
✅ Modern animations

## 📱 Pages

- **Dashboard** - Overview of all activities
- **Emails** - Email management
- **Meetings** - Meeting recordings
- **Documents** - Document analysis
- **Tasks** - Task management with status
- **Settings** - User preferences

## 🎨 Design Features

### Bottom Navigation
Tabs at the bottom for easy thumb access:
- Home
- Emails
- Meetings
- Documents
- Tasks
- Settings

### Mobile Components
- `MobileButton` - Touch-friendly buttons
- `MobileCard` - Content containers
- `MobileHeader` - Top navigation
- `MobileContainer` - Layout wrapper
- `MobileBottomSheet` - Modal for mobile
- `MobileBottomNav` - Navigation tabs

### Responsive Design
- Full-width content
- Touch-optimized spacing
- Optimized for portrait orientation
- Bottom navigation prevents content overlap
- Smooth scrolling with inertia

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS (mobile-first)
- React Router
- Redux Toolkit
- Lucide Icons

## 📖 How to Use

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build
```

## 📱 Testing on Mobile

1. Start dev server: `npm run dev`
2. Get local IP: `ipconfig getifaddr en0` (macOS) or `ipconfig` (Windows)
3. Visit: `http://<your-ip>:3000`
4. Or use DevTools mobile emulation (F12 → Toggle device toolbar)

## 📚 File Structure

```
src/
├── components/mobile/
│   ├── MobileBottomNav.tsx
│   ├── MobileButton.tsx
│   ├── MobileCard.tsx
│   ├── MobileContainer.tsx
│   ├── MobileHeader.tsx
│   └── MobileBottomSheet.tsx
├── pages/mobile/
│   ├── MobileLogin.tsx
│   ├── MobileSignup.tsx
│   ├── MobileDashboard.tsx
│   ├── MobileEmails.tsx
│   ├── MobileEmailDetail.tsx
│   ├── MobileTasks.tsx
│   ├── MobileMeetings.tsx
│   ├── MobileDocuments.tsx
│   └── MobileSettings.tsx
└── AppMobile.tsx
```

## 🎯 Next Steps

1. Connect to backend API
2. Implement local storage for offline mode
3. Add PWA capabilities
4. Create to-do app with persistence
5. Add push notifications

## 📝 License

MIT License
