import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '@/lib/theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.bg },
          headerTintColor: theme.text,
          headerTitleStyle: { fontWeight: '800', letterSpacing: 1 },
          contentStyle: { backgroundColor: theme.bg },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="technique/[id]" options={{ title: '' }} />
        <Stack.Screen name="timer" options={{ title: 'ROUND TIMER' }} />
        <Stack.Screen name="progress" options={{ title: 'PROGRESS' }} />
        <Stack.Screen name="favorites" options={{ title: 'FAVORITES' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
