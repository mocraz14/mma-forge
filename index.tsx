import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../lib/theme';

const tiles = [
  { label: 'Striking', icon: 'flash', route: '/striking', color: theme.colors.accent },
  { label: 'Grappling', icon: 'body', route: '/grappling', color: '#6d28d9' },
  { label: 'S&C / Mobility', icon: 'fitness', route: '/conditioning', color: '#0ea5e9' },
  { label: 'Drills', icon: 'repeat', route: '/drills', color: theme.colors.gold },
] as const;

const tools = [
  { label: 'Round Timer', icon: 'timer', route: '/timer' },
  { label: 'Progress', icon: 'trending-up', route: '/progress' },
  { label: 'Favorites', icon: 'star', route: '/favorites' },
] as const;

export default function Home() {
  const router = useRouter();
  return (
    <ScrollView style={styles.root} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.hero}>MMA FORGE</Text>
      <Text style={styles.sub}>Train like the pros. Anywhere. Offline.</Text>

      <View style={styles.grid}>
        {tiles.map((t) => (
          <Pressable key={t.label} style={[styles.tile, { borderColor: t.color }]} onPress={() => router.push(t.route as any)}>
            <Ionicons name={t.icon as any} size={32} color={t.color} />
            <Text style={styles.tileLabel}>{t.label}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.section}>Tools</Text>
      {tools.map((t) => (
        <Pressable key={t.label} style={styles.row} onPress={() => router.push(t.route as any)}>
          <Ionicons name={t.icon as any} size={22} color={theme.colors.gold} />
          <Text style={styles.rowLabel}>{t.label}</Text>
          <Ionicons name="chevron-forward" size={20} color={theme.colors.muted} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bg },
  hero: { color: theme.colors.text, fontSize: 36, fontWeight: '900', letterSpacing: 2 },
  sub: { color: theme.colors.muted, marginTop: 4, marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  tile: {
    width: '48%', aspectRatio: 1, backgroundColor: theme.colors.surface,
    borderRadius: 12, borderWidth: 2, padding: 16, marginBottom: 12,
    justifyContent: 'space-between',
  },
  tileLabel: { color: theme.colors.text, fontSize: 18, fontWeight: '800' },
  section: { color: theme.colors.text, fontSize: 20, fontWeight: '800', marginTop: 16, marginBottom: 8 },
  row: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surface,
    padding: 14, borderRadius: 10, marginBottom: 8, borderWidth: 1, borderColor: theme.colors.border,
  },
  rowLabel: { color: theme.colors.text, flex: 1, marginLeft: 12, fontWeight: '600' },
});
