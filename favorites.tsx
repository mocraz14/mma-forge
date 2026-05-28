import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { storage } from '../lib/storage';
import { getById } from '../data';
import { theme } from '../lib/theme';

export default function Favorites() {
  const router = useRouter();
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    storage.get<string[]>('favorites', []).then(setIds);
  }, []);

  const items = ids.map((id) => getById(id)).filter(Boolean);

  return (
    <ScrollView style={styles.root} contentContainerStyle={{ padding: 16 }}>
      {items.length === 0 ? (
        <Text style={styles.empty}>Tap the star on any technique to save it here for quick access.</Text>
      ) : (
        items.map((t: any) => (
          <Pressable key={t.id} style={styles.row} onPress={() => router.push(`/technique/${t.id}` as any)}>
            <Text style={styles.title}>{t.title}</Text>
            <Text style={styles.coach}>{t.coach} • {t.category}</Text>
          </Pressable>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bg },
  empty: { color: theme.colors.muted, textAlign: 'center', marginTop: 40 },
  row: { backgroundColor: theme.colors.surface, padding: 14, borderRadius: 10, marginBottom: 8, borderWidth: 1, borderColor: theme.colors.border },
  title: { color: theme.colors.text, fontWeight: '700' },
  coach: { color: theme.colors.muted, fontSize: 12, marginTop: 2 },
});
