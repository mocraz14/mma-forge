import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { theme } from '../lib/theme';

type Phase = 'work' | 'rest' | 'done';

export default function Timer() {
  const [rounds, setRounds] = useState('5');
  const [work, setWork] = useState('180');
  const [rest, setRest] = useState('60');
  const [phase, setPhase] = useState<Phase>('work');
  const [round, setRound] = useState(1);
  const [remaining, setRemaining] = useState(180);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setRemaining((r) => r - 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  useEffect(() => {
    if (remaining > 0) return;
    const totalRounds = parseInt(rounds, 10) || 1;
    if (phase === 'work') {
      if (round >= totalRounds) {
        setPhase('done');
        setRunning(false);
      } else {
        setPhase('rest');
        setRemaining(parseInt(rest, 10) || 0);
      }
    } else if (phase === 'rest') {
      setRound((r) => r + 1);
      setPhase('work');
      setRemaining(parseInt(work, 10) || 0);
    }
  }, [remaining, phase, round, rounds, work, rest]);

  const reset = () => {
    setRunning(false);
    setPhase('work');
    setRound(1);
    setRemaining(parseInt(work, 10) || 0);
  };

  const mm = String(Math.floor(Math.max(remaining, 0) / 60)).padStart(2, '0');
  const ss = String(Math.max(remaining, 0) % 60).padStart(2, '0');
  const color = phase === 'work' ? theme.colors.accent : phase === 'rest' ? theme.colors.gold : theme.colors.success;

  return (
    <View style={styles.root}>
      <Text style={[styles.phase, { color }]}>{phase.toUpperCase()}</Text>
      <Text style={styles.round}>Round {round} / {rounds}</Text>
      <Text style={[styles.time, { color }]}>{mm}:{ss}</Text>

      <View style={styles.controls}>
        <Pressable style={[styles.btn, { backgroundColor: running ? theme.colors.muted : theme.colors.accent }]} onPress={() => setRunning((r) => !r)}>
          <Text style={styles.btnText}>{running ? 'PAUSE' : 'START'}</Text>
        </Pressable>
        <Pressable style={[styles.btn, { backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border }]} onPress={reset}>
          <Text style={styles.btnText}>RESET</Text>
        </Pressable>
      </View>

      <View style={styles.cfg}>
        <Field label="Rounds" value={rounds} onChange={setRounds} />
        <Field label="Work (s)" value={work} onChange={(v) => { setWork(v); if (!running) setRemaining(parseInt(v, 10) || 0); }} />
        <Field label="Rest (s)" value={rest} onChange={setRest} />
      </View>
    </View>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput value={value} onChangeText={onChange} keyboardType="number-pad" style={styles.input} placeholderTextColor={theme.colors.muted} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bg, padding: 20, alignItems: 'center' },
  phase: { fontSize: 28, fontWeight: '900', letterSpacing: 4, marginTop: 20 },
  round: { color: theme.colors.muted, marginTop: 4, marginBottom: 16 },
  time: { fontSize: 96, fontWeight: '900', fontVariant: ['tabular-nums'] },
  controls: { flexDirection: 'row', gap: 12, marginTop: 24 },
  btn: { paddingVertical: 14, paddingHorizontal: 32, borderRadius: 8 },
  btnText: { color: theme.colors.text, fontWeight: '900', letterSpacing: 2 },
  cfg: { flexDirection: 'row', gap: 12, marginTop: 32, width: '100%' },
  field: { flex: 1 },
  fieldLabel: { color: theme.colors.muted, marginBottom: 4, fontSize: 12, letterSpacing: 1 },
  input: { backgroundColor: theme.colors.surface, color: theme.colors.text, padding: 12, borderRadius: 8, textAlign: 'center', fontSize: 18, fontWeight: '700', borderWidth: 1, borderColor: theme.colors.border },
});
