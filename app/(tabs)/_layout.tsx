import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/lib/theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: theme.bg },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: '800', letterSpacing: 2 },
        tabBarStyle: {
          backgroundColor: theme.surface,
          borderTopColor: theme.border,
          height: 64,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textDim,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '700', letterSpacing: 1 },
        tabBarIcon: ({ color, size }) => {
          const map: Record<string, keyof typeof Ionicons.glyphMap> = {
            index: 'flame',
            conditioning: 'fitness',
            striking: 'hand-left',
            grappling: 'body',
            drills: 'repeat',
          };
          return <Ionicons name={map[route.name] ?? 'ellipse'} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'HOME' }} />
      <Tabs.Screen name="conditioning" options={{ title: 'CONDITION' }} />
      <Tabs.Screen name="striking" options={{ title: 'STRIKING' }} />
      <Tabs.Screen name="grappling" options={{ title: 'GRAPPLING' }} />
      <Tabs.Screen name="drills" options={{ title: 'DRILLS' }} />
    </Tabs>
  );
}
