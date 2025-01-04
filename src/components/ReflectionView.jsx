import React from 'react'
import { useLiveQuery } from "dexie-react-hooks";
import { db } from '../db';

function ReflectionView(props) {
    const reflection = useLiveQuery(async () => {
           const info = await db.reflections.get(props.id);
           return info;
    },[props.id]);

    return (
        <div>ReflectionView</div>
    )
}

export default ReflectionView