# Mobile Development Setup - Expo Go

This document tracks the setup process of **Expo Go** for mobile development.

## 🚀 Steps Followed

1. **Visited the official Expo Go homepage**  
   - [https://expo.dev/go](https://expo.dev/go)  

2. **Selected the latest SDK version**  
   - Installed the most recent Expo SDK (latest stable version provided on the site).  

3. **Installed Expo Go on my device**  
   - **Android**: Installed from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).  
   - **iOS**: Installed from the [Apple App Store](https://apps.apple.com/app/expo-go/id982107779).  

4. **Opened Expo Go app**  
   - Successfully launched the Expo Go app on my device.  

5. **Account setup**  
   - Created a new Expo account (or logged into an existing account).  

---

## ⚡ Challenges Faced

- **Slow internet during download** → App installation took longer than expected.  
- **Account verification email** → Initially went to spam folder, needed to move it to inbox to verify successfully.  
- **Play Store/App Store regional issues** → On some devices, Expo Go may not appear in the store depending on region.  

---

## ✅ Outcome

- Expo Go installed successfully.  
- Able to log in and ready to connect the app to local development.  
- Verified device is ready for running and testing React Native projects via Expo.  

---

## 📌 Next Steps

- Initialize a new React Native project using Expo CLI:
  ```bash
  npx create-expo-app my-first-app
  cd my-first-app
  npx expo start
