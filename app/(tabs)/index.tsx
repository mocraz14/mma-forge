import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { theme, spacing, radius } from '@/lib/theme';

export default function Home() {
  const r = useRouter();

  const quick = [
    { icon: 'timer', label: 'Round Timer', go: '/timer', color: theme.accent },
    { icon: 'star', label: 'Favorites', go: '/favorites', color: theme.gold },
    { icon: 'trending-up', label: 'Progress', go: '/progress', color: theme.success },
  ] as const;

  const pillars = [
    { label: 'CONDITIONING', sub: 'Mobility · S&C · Stretching', go: '/conditioning' },
    { label: 'STRIKING', sub: 'Boxing · Muay Thai · Kicks', go: '/striking' },
    { label: 'GRAPPLING', sub: 'BJJ · Wrestling · Clinch', go: '/grappling' },
    { label: 'DRILLS', sub: 'Solo · Partner · Bag work', go: '/drills' },
  ] as const;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.bg }} contentContainerStyle={{ padding: spacing.md }}>
      <View style={styles.hero}>
        <Text style={styles.heroKicker}>MMA FORGE</Text>
        <Text style={styles.heroTitle}>SHARPEN{'\n'}EVERY WEAPON</Text>
        <Text style={styles.heroSub}>Elite-level conditioning, striking & grappling — built for daily work.</Text>
      </View>

      <View style={styles.quickRow}>
        {quick.map(q => (
          <Pressable key={q.label} style={styles.quickCard} onPress={() => r.push(q.go as any)}>
            <Ionicons name={q.icon as any} size={22} color={q.color} />
            <Text style={styles.quickLabel}>{q.label}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>TRAINING PILLARS</Text>
      {pillars.map(p => (
        <Pressable key={p.label} style={styles.pillar} onPress={() => r.push(p.go as any)}>
          <View style={{ flex: 1 }}>
            <Text style={styles.pillarLabel}>{p.label}</Text>
            <Text style={styles.pillarSub}>{p.sub}</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color={theme.accent} />
        </Pressable>
      ))}

      <View style={{ height: spacing.xl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: theme.surface,
    borderLeftWidth: 4,
    borderLeftColor: theme.accent,
    padding: spacing.lg,
    borderRadius: radius.md,
    marginBottom: spacing.lg,
  },
  heroKicker: { color: theme.accent, fontSize: 12, fontWeight: '800', letterSpacing: 3 },
  heroTitle: { color: theme.text, fontSize: 34, fontWeight: '900', lineHeight: 38, marginTop: spacing.sm, letterSpacing: 1 },
  heroSub: { color: theme.textDim, marginTop: spacing.md, lineHeight: 20 },
  quickRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  quickCard: {
    flex: 1, backgroundColor: theme.surfaceAlt, padding: spacing.md,
    borderRadius: radius.md, alignItems: 'center', gap: 6,
    borderWidth: 1, borderColor: theme.border,
  },
  quickLabel: { color: theme.text, fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  sectionTitle: { color: theme.textDim, fontSize: 12, fontWeight: '800', letterSpacing: 2, marginBottom: spacing.md },
  pillar: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: theme.surface, padding: spacing.lg,
    borderRadius: radius.md, marginBottom: spacing.sm,
    borderWidth: 1, borderColor: theme.border,
  },
  pillarLabel: { color: theme.text, fontSize: 18, fontWeight: '900', letterSpacing: 1.5 },
  pillarSub: { color: theme.textDim, fontSize: 12, marginTop: 4 },
});
