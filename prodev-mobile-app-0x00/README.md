# Mobile Development Setup - Expo Go

This document tracks the setup process of **Expo Go** for mobile development.

---

## 🚀 Steps Followed

### 1. Install Expo Go
- **Visited**: [https://expo.dev/go](https://expo.dev/go)  
- **Selected**: Latest SDK version.  
- **Installed on device**:  
  - **Android** → [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)  
  - **iOS** → [Apple App Store](https://apps.apple.com/app/expo-go/id982107779)  
- **Opened Expo Go** → Confirmed app is running.  
- **Account setup** → Created new Expo account (or logged into existing one).  

---

### 2. Initialize First Expo Project
On the development machine:

```bash
# Install Expo CLI and create new app
npx create-expo-app my-first-app

# Move into project directory
cd my-first-app

# Start the Expo development server
npx expo start
# Expo First App Setup

## 🚀 Steps Followed

1. Initialized a new Expo project with Expo Router:
   ```bash
   npx create-expo-app@latest .
Modified the Home Screen:

File: app/(tabs)/index.tsx

Changed:

tsx
Copy
Edit
<Text>Welcome!</Text>
to

tsx
Copy
Edit
<Text>** First App Created**</Text>
Ran the development server:

bash
Copy
Edit
npx expo start
Tested on:

✅ iOS: Camera app scan → Expo Go

✅ Android: Expo Go app QR scan

Reset the application:

bash
Copy
Edit
npm run reset-project
🔍 Observations on reset-project
Cleared cached data and dependencies.

Project reinstalled with fresh node_modules.

Helpful when dependencies break or changes don’t reflect.

After reset, the app starts as if freshly cloned.

📱 Result
Home screen now displays:

sql
Copy
Edit
** First App Created**