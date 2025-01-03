import React, { useState } from 'react'
import { Button, Select, Label, TextInput } from "flowbite-react";
import { db } from '../db';

/*
    title : New goal
    input name : text what yould you like to track?
    input select : type (simple count, minute count, step count)

    simple count:
    At least X times per day

    minute count:
    At least X minutes per day

    step count:
    At least X steps per day
*/

function AddGoal(props) {
    const [goalType, setGoalType] = useState("simple");
    const [goalName, setGoalName] = useState();
    const [goal, setGoal] = useState();

    async function addGoal() {
            try {
              // Add the new friend!
              const id = await db.goals.add({
                name: goalName,
                type: goalType,
                goal
              });
              console.log(`Goal ${goal} successfully added. Got id ${id}`);
              props.onSuccess();
            } catch (error) {
              console.log(`Failed to add ${goal}: ${error}`);
            }
          }

    return (
        <div>
            <div className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="goal_name" value="What would you like to track?" />
                    </div>
                    <TextInput id="goal_name" type="text" placeholder="Name your goal" required value={goalName} onChange={(e) => setGoalName(e.target.value)} />
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

                <Button onClick={addGoal}>Submit</Button>
            </div>
        </div>
    )
}

export default AddGoal