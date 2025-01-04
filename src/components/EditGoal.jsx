import React, { useEffect, useState } from 'react'
import { Button, Select, Label, TextInput } from "flowbite-react";
import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";
import { MdDelete } from "react-icons/md";

function EditGoal(props) {
    const goalInfo = useLiveQuery(async () => {
        const goalInfo = await db.goals.get(props.id);
        return goalInfo;
    },[props.id]);
    const [goalType, setGoalType] = useState();
    const [goalName, setGoalName] = useState();
    const [goal, setGoal] = useState();

    useEffect(() => {
      setGoalName(goalInfo?.name)
      setGoalType(goalInfo?.type)
      setGoal(goalInfo?.goal)
  
    }, [goalInfo])

    const handleDeletion = () => {
        db.goals.delete(props.id)
        props.onSuccessfulDeletion();
    };

    return (
        <div>
            <div className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="goal_name" value="Your goal name" />
                    </div>
                    <TextInput id="goal_name" type="text" required value={goalName} onChange={(e) => setGoalName(e.target.value)} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="tracking_type" value="Tracking type" />
                    </div>
                    <Select id="tracking_type" required value={goalType} onChange={(e) => setGoalType(e.target.value)}>
                        <option value="simple">Simple count</option>
                        <option value="minute">Minute count</option>
                        <option value="step">Step count</option>
                    </Select>
                </div>
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="goal_track" value="Set a goal" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <p>At least</p>
                        <TextInput id="goal_track" type="text" placeholder="30" required value={goal} onChange={(e) => setGoal(e.target.value)}/>
                        {goalType === "simple" &&
                            <p>times per day</p>
                        }
                        {goalType === "minute" &&
                            <p>minutes per day</p>
                        }
                        {goalType === "step" &&
                            <p>steps per day</p>
                        }
                    </div>
                </div>

                <Button>Submit</Button>
                <Button color="failure" onClick={handleDeletion}><MdDelete className="w-6 h-6" />Delete</Button>
            </div>
        </div>
    )
}

export default EditGoal