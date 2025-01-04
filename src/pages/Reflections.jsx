import React, { useState } from 'react'
import AddReflection from '../components/AddReflection'
import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";
import { Card, Drawer } from 'flowbite-react';
import { textToEmoji } from "../components/SelectMood";
import ReflectionView from '../components/ReflectionView';

function Reflections() {
    const reflections = useLiveQuery(() => db.reflections.toArray());
    const today = new Date().toISOString().slice(0, 10);
    const todaysReflection = useLiveQuery(() => db.reflections.where("date").equals(today).first());
    const [openReflectionDetails, setOpenReflectionDetails] = useState(false);
    const [selectedReflectionID, setSelectedReflectionID] = useState(0);

    return (
        <div className="container mx-auto max-w-2xl py-8">
            <h2 className="text-3xl font-bold dark:text-white">Your reflections</h2>
                
            <div className="flex flex-col gap-4 py-4">
                {console.log(todaysReflection)}
                {todaysReflection === undefined &&
                    <>
                    <h3 className="text-2xl font-bold">{new Date(today).toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"})}</h3>
                    <Card>
                        <div className="flex flex-row justify-between items-center">
                            <p>You have not reflected on your day.</p>
                            <AddReflection />
                        </div>
                    </Card>
                    </>
                }
                {reflections?.map((item) => (
                    <>
                        <h3 className="text-2xl font-bold">{new Date(item.date).toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"})}</h3>
                        <Card key={item.id} className="cursor-pointer" onClick={() => (setSelectedReflectionID(item.id), setOpenReflectionDetails(true))}>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-xl font-semibold">{new Date(item.date).toLocaleDateString("en-US", {weekday: "long"})}</p>
                                        <h4 className="text-5xl">
                                            {textToEmoji(item.mood)[0]}
                                        </h4>
                                    </div>
                                    <div className="flex flex-col gap-4 items-center">
                                        <p>Goals</p>
                                            <p className="font-bold text-lg">{item.metGoals.length} / {item.metGoals.length + item.unMetGoals.length}</p>
                                        <p>completed</p>
                                    </div>
                                </div>
                        </Card>
                    </>
                ))}
            </div>
            <Drawer open={openReflectionDetails} onClose={()=>setOpenReflectionDetails(false)} position="bottom" className="h-4/6">
                <Drawer.Header title="Reflection" />
                <Drawer.Items>
                    <ReflectionView id={selectedReflectionID} />
                </Drawer.Items>
            </Drawer>
        </div>
    )
}

export default Reflections