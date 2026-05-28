import { useMemo, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { striking } from '../../data';
import { TechniqueCard } from '../../components/TechniqueCard';
import { SearchBar } from '../../components/SearchBar';
import { CategoryFilter } from '../../components/CategoryFilter';
import { theme } from '../../lib/theme';

export default function StrikingScreen() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const cats = ['All', ...Array.from(new Set(striking.map(s => s.subcategory)))];

  const filtered = useMemo(() => striking.filter(t =>
    (cat === 'All' || t.subcategory === cat) &&
    (q === '' || t.title.toLowerCase().includes(q.toLowerCase()) || t.coach.toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={{ padding: 16, paddingBottom: 0 }}>
        <Text style={styles.h1}>Striking</Text>
        <Text style={styles.sub}>Boxing · Muay Thai · MMA</Text>
        <View style={{ height: 12 }} />
        <SearchBar value={q} onChange={setQ} />
        <CategoryFilter options={cats} selected={cat} onSelect={setCat} />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        renderItem={({ item }) => <TechniqueCard t={item} />}
        contentContainerStyle={{ padding: 16, paddingTop: 0 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg },
  h1: { color: theme.colors.text, fontSize: 28, fontWeight: '900' },
  sub: { color: theme.colors.gold, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginTop: 2 },
});
