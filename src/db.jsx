import Dexie from 'dexie';

export const db = new Dexie('reflection-db');
db.version(1).stores({
    moods: '++id, mood, date'
});
db.version(1).stores({
    goals: '++id, name, type, goal'
});