# MMA Forge — Batch 3 (Final)

## Files
- `app/_layout.tsx` — root Stack
- `app/(tabs)/_layout.tsx` — bottom tabs (Home/Striking/Grappling/S&C/Drills)
- `app/(tabs)/index.tsx` — Home dashboard
- `app/timer.tsx` — Round/rest timer
- `app/progress.tsx` — Practised techniques log
- `app/favorites.tsx` — Saved techniques

## Build the APK
```bash
npx create-expo-app mma-app -t blank-typescript
cd mma-app
# paste all files from Batch 1, 2, 3 into matching paths
npm i expo-router react-native-youtube-iframe react-native-webview \
  @react-native-async-storage/async-storage react-native-safe-area-context \
  react-native-screens expo-linking expo-constants expo-status-bar \
  @expo/vector-icons
npm i -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```
EAS gives you a downloadable .apk link when done.
