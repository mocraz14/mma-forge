import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { storage } from '../lib/storage';
import { getById } from '../data';
import { theme } from '../lib/theme';

export default function Progress() {
  const router = useRouter();
  const [practised, setPractised] = useState<string[]>([]);

  useEffect(() => {
    storage.get<string[]>('practised', []).then(setPractised);
  }, []);

  const items = practised.map((id) => getById(id)).filter(Boolean);

  return (
    <ScrollView style={styles.root} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.stat}>{practised.length}</Text>
      <Text style={styles.statLabel}>techniques practised</Text>

      {items.length === 0 ? (
        <Text style={styles.empty}>Start training. Mark techniques "Practised" to track your progress.</Text>
      ) : (
        items.map((t: any) => (
          <Pressable key={t.id} style={styles.row} onPress={() => router.push(`/technique/${t.id}` as any)}>
            <Text style={styles.title}>{t.title}</Text>
            <Text style={styles.coach}>{t.coach}</Text>
          </Pressable>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bg },
  stat: { color: theme.colors.accent, fontSize: 72, fontWeight: '900', textAlign: 'center' },
  statLabel: { color: theme.colors.muted, textAlign: 'center', letterSpacing: 2, marginBottom: 24 },
  empty: { color: theme.colors.muted, textAlign: 'center', marginTop: 40 },
  row: { backgroundColor: theme.colors.surface, padding: 14, borderRadius: 10, marginBottom: 8, borderWidth: 1, borderColor: theme.colors.border },
  title: { color: theme.colors.text, fontWeight: '700' },
  coach: { color: theme.colors.muted, fontSize: 12, marginTop: 2 },
});
