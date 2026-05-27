import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  async get<T>(key: string, fallback: T): Promise<T> {
    try {
      const v = await AsyncStorage.getItem(key);
      return v ? (JSON.parse(v) as T) : fallback;
    } catch { return fallback; }
  },
  async set<T>(key: string, value: T) {
    try { await AsyncStorage.setItem(key, JSON.stringify(value)); } catch {}
  },
  async toggleInSet(key: string, id: string): Promise<string[]> {
    const arr = await Storage.get<string[]>(key, []);
    const next = arr.includes(id) ? arr.filter(x => x !== id) : [...arr, id];
    await Storage.set(key, next);
    return next;
  },
};

export const KEYS = {
  favorites: 'favorites',
  completed: 'completed',         // technique IDs marked done
  sessionLog: 'sessionLog',       // [{date, type, durationSec}]
  videoCache: 'videoCache',       // {[videoUrl]: localPath}
};
