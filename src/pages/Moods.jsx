import React from 'react'
import { useLiveQuery } from "dexie-react-hooks";
import { db } from '../db';
import { Card } from 'flowbite-react';

function Moods() {
    const moods = useLiveQuery(() => db.moods.toArray());
    return (
        <>
            {moods?.map((mood) => (
                <>
                <li key={mood.id}>
                    {mood.mood}, {mood.date}
                </li>
                </>
            ))}
        </>
    )
}

export default Moods