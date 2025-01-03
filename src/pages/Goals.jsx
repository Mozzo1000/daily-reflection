import React, { useState } from 'react'
import AddGoal from '../components/AddGoal'
import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";
import { Badge, Card, Button, Tooltip, Drawer } from 'flowbite-react';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GoGoal } from "react-icons/go";

function Goals() {
    const goals = useLiveQuery(() => db.goals.toArray());
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div className="container mx-auto max-w-2xl py-8">
            <div className="flex flex-row justify-between">
            <h2 className="text-3xl font-bold dark:text-white">Your goals</h2>
            <Button outline pill color="light" size="xs" onClick={() => setOpenDrawer(!openDrawer)}><IoIosAdd className="h-6 w-6"/></Button>
            </div>
            <div className="flex flex-col gap-4 py-4">
                {goals?.map((item) => (
                    <>
                    <Card key={item.id}>
                        <div className="flex justify-between items-center">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                            </h5>
                            <Tooltip content="Edit" placement="bottom">
                                <Button size='xs' outline pill color="light"><MdOutlineModeEditOutline className="h-6 w-6"/></Button>
                            </Tooltip>
                        </div>
                        <div className="flex">
                            {item.type === "simple" &&
                                <Badge color="gray">{item.goal}x per day </Badge>
                            }
                            {item.type === "minute" &&
                                <Badge color="gray">{item.goal} minutes per day </Badge>
                            }
                            {item.type === "step" &&
                                <Badge color="gray">{item.goal} steps per day </Badge>
                            }
                        </div>
                    </Card>
                    </>
                ))}
            </div>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} position="bottom" className='h-4/6'>
                <Drawer.Header title="Add goal" titleIcon={GoGoal}/>
                <Drawer.Items>
                    <div className="container mx-auto">
                        <AddGoal onSuccess={() => setOpenDrawer(false)}/>
                    </div>
                </Drawer.Items>
            </Drawer>
        </div>
    )
}
export default Goals