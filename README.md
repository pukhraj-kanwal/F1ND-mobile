# F1ND Mobile App

F1ND is a premium mobile platform connecting users with luxury group activities and experiences. Built with React Native and Expo.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 📱 Running the App

- **iOS**: Press `i` in the terminal or run `npm run ios`
- **Android**: Press `a` in the terminal or run `npm run android`
- **Web**: Press `w` in the terminal or run `npm run web`

## 🏗️ Project Structure

```
F1ND-mobile/
├── app/                    # Expo Router app directory
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Main tab navigation
│   ├── activity/          # Activity detail screens
│   ├── profile/           # Profile screens
│   ├── chat/              # Chat screens
│   └── _layout.tsx        # Root layout
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # Basic UI components
│   │   ├── forms/        # Form components
│   │   ├── layout/       # Layout components
│   │   └── navigation/   # Navigation components
│   ├── screens/          # Screen components
│   ├── services/         # API and external services
│   │   ├── firebase/     # Firebase configuration
│   │   ├── stripe/       # Stripe payment integration
│   │   └── api/          # API clients
│   ├── hooks/            # Custom React hooks
│   ├── store/            # State management (Zustand)
│   ├── utils/            # Utility functions
│   ├── constants/        # App constants
│   ├── config/           # Configuration files
│   ├── theme/            # Design system and theming
│   ├── types/            # TypeScript type definitions
│   └── data/             # Mock data and fixtures
├── assets/               # Static assets (images, fonts, etc.)
└── ...config files
```

## 🎨 Design System

The app uses a comprehensive design system with:

- **Colors**: Premium color palette with luxury gold and racing red accents
- **Typography**: Responsive typography scale with semantic styles
- **Spacing**: 8px grid system with semantic spacing values
- **Components**: Reusable UI components with consistent styling
- **Themes**: Light and dark theme support

### Key Design Tokens

- **Primary Color**: `#FF9319` (Luxury Gold)
- **Secondary Color**: `#000000` (Premium Black)
- **Accent Color**: `#E53E3E` (Racing Red)
- **Font Family**: SF Pro Display (iOS) / Roboto (Android)

## 🧩 Key Features

### Current Implementation

- ✅ Project setup with Expo and TypeScript
- ✅ Design system and theming
- ✅ Navigation with Expo Router
- ✅ Basic UI components (Button, Input, Card)
- ✅ Mock data for development
- ✅ Tab navigation structure
- ✅ Discover/Home screen with categories and featured activities

### Planned Features

- 🔄 Authentication system
- 🔄 Activity creation and management
- 🔄 Search and filtering
- 🔄 Chat and messaging
- 🔄 User profiles
- 🔄 Payment integration (Stripe)
- 🔄 Push notifications
- 🔄 Offline support
- 🔄 AI-powered recommendations

## 🛠️ Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **State Management**: Zustand + React Query
- **Styling**: StyleSheet with design system
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Payments**: Stripe
- **Development**: TypeScript, ESLint, Prettier

## 📦 Dependencies

### Core Dependencies
- `expo` - Expo framework
- `react-native` - React Native framework
- `expo-router` - File-based routing
- `@tanstack/react-query` - Data fetching and caching
- `zustand` - State management
- `firebase` - Backend services
- `@stripe/stripe-react-native` - Payment processing

### UI & Animation
- `react-native-reanimated` - Animations
- `react-native-gesture-handler` - Gesture handling
- `expo-linear-gradient` - Gradient backgrounds
- `expo-blur` - Blur effects
- `@expo/vector-icons` - Icon library

## 🔧 Development Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🌟 Mock Data

The app includes comprehensive mock data for development:

- **Users**: 5 sample users with different personas and verification levels
- **Activities**: 4 luxury activities (F1 Monaco GP, Yacht Dinner, Wine Tasting, Helicopter Tour)
- **Categories**: 10 main categories with subcategories
- **Messages**: Sample chat messages
- **Reviews**: Sample user reviews
- **Business Partners**: Sample luxury service providers

## 🚀 Next Steps

1. **Authentication Flow**: Implement Firebase Auth with social login
2. **Activity Details**: Create detailed activity screens
3. **Search & Filter**: Advanced search functionality
4. **User Profiles**: Complete user profile management
5. **Chat System**: Real-time messaging
6. **Payment Integration**: Stripe payment flows
7. **Push Notifications**: Activity reminders and updates
8. **Performance Optimization**: Image caching, lazy loading
9. **Testing**: Unit and integration tests
10. **Deployment**: App Store and Play Store preparation

## 📄 License

This project is proprietary and confidential.

## 👥 Team

- **Development Team**: 6-8 developers
- **Timeline**: 40 weeks (10 months)
- **Target Launch**: Q3 2025

---

**F1ND** - Connecting luxury experiences with discerning individuals.
