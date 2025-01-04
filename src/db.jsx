import Dexie from 'dexie';

export const db = new Dexie('reflection-db');
db.version(1).stores({
    goals: '++id, name, type, goal'
});
db.version(2).stores({
    reflections: '++id, date, metGoals, unMetGoals, mood'
});