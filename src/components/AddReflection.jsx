import React, { useEffect, useState } from 'react'
import SelectMood from './SelectMood'
import { Button, Drawer } from 'flowbite-react'
import { FaStar } from "react-icons/fa";
import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";

function AddReflection() {
    const drawerTheme = {
        "header": {
            "inner": {
            "closeButton": "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
            "closeIcon": "h-4 w-4",
            "titleIcon": "me-2.5 h-4 w-4",
            "titleText": "mb-4 inline-flex items-center text-base font-semibold text-white dark:text-gray-400"
            }
        }
    }
    const [openDrawer, setOpenDrawer] = useState(false);
    const [contentIndex, setContentIndex] = useState(0);
    const [contentLimit, setContentLimit] = useState(2);
    const [selectedMood, setSelectedMood] = useState("happy");
    const [metGoals, setMetGoals] = useState([]);
    const [unMetGoals, setUnMetGoals] = useState([]);
    
    const goals = useLiveQuery(() => db.goals.toArray());
    
    useEffect(() => {
          setContentLimit(goals?.length)
          console.log(goals?.length)    
    }, [goals])

    /*'++id, date, metGoals, unMetGoals, mood */
    async function saveReflection() {
        let date = new Date().toISOString().slice(0, 10)
        try {
            const id = await db.reflections.add({
            date: date,
            metGoals: metGoals,
            unMetGoals: unMetGoals,
            mood: selectedMood
        });
    
        console.log(`Mood ${selectedMood} successfully added. Got id ${id} - ${date}`);
            
        } catch (error) {
            console.log(`Failed to add ${selectedMood}: ${error}`);
        }
    }

    const addMetGoal = (id) => {
        const oldState = metGoals;
        oldState.push(id);
        setMetGoals(oldState);
        console.log(metGoals);
    }

    const addUnmetGoal = (id) => {
        const oldState = unMetGoals;
        oldState.push(id);
        setUnMetGoals(oldState);
        console.log(unMetGoals);
    }

    return (
        <div>
            <Button onClick={() => setOpenDrawer(true)}>Add reflection</Button>
            <Drawer theme={drawerTheme} open={openDrawer} onClose={() => setOpenDrawer(false)} position="bottom" className="text-white bg-orange-500 h-screen">
            <Drawer.Header title="Reflect on your day" titleIcon={FaStar}/>
            <Drawer.Items>
                {contentIndex === 0 &&
                <>
                    <SelectMood mood={selectedMood} setMood={setSelectedMood} />
                </>
                }
                {goals?.map((item, index) => (
                    <>
                        {contentIndex === index+1 &&
                        <div className="max-w-sm mx-auto">
                            <div>
                            {item.type === "simple" &&
                                <h2 className="text-8xl text-white dark:text-gray-400">Did you <span className="font-extrabold dark:text-white">{item.name}</span> {item.goal} times today?</h2>
                            }
                            {item.type === "minute" &&
                                <h2 className="text-8xl text-white dark:text-gray-400">Did you <span className="font-extrabold dark:text-white">{item.name}</span> for {item.goal} minutes today? </h2>
                            }
                            {item.type === "step" &&
                               <h2 className="text-8xl text-white dark:text-gray-400">Did you <span className="font-extrabold dark:text-white">{item.name}</span> {item.goal} steps today? </h2>
                            }
                            </div>
                            <div className="flex flex-row gap-64 justify-center pt-10">
                                <Button outline color="light" onClick={() => (addUnmetGoal(item.id), setContentIndex(contentIndex+1))}><FaThumbsDown className="w-6 h-6"/></Button>
                                <Button outline color="light" onClick={() => (addMetGoal(item.id), setContentIndex(contentIndex+1))}><FaThumbsUp className="w-6 h-6"/></Button>
                            </div>

                        </div>
                        }
                    </>
                ))}
                {contentIndex === contentLimit+1 &&
                    <div className="max-w-sm mx-auto flex-flex-col gap-10">
                        <h2 className="text-8xl text-white dark:text-gray-400">Amazing work! <span className="font-extrabold dark:text-white">You</span> did great! </h2>
                    </div>
                }
                <div className="flex flex-row justify-center pt-10">
                    {contentIndex === 0 &&
                        <Button pill outline color="light" onClick={() => setContentIndex(contentIndex+1)}><MdOutlineNavigateNext className="w-6 h-6" /></Button>
                    }
                    {contentIndex === contentLimit+1 &&
                        <Button color="light" onClick={() => (saveReflection(), setOpenDrawer(false), setContentIndex(0))}>Save reflection</Button>
                    }
                </div>
            </Drawer.Items>
            </Drawer>
            
        </div>
    )
}

export default AddReflection