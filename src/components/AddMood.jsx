import React, { useState } from 'react'
import { Button, Tooltip } from 'flowbite-react';
import { db } from '../db';
import Moods from '../pages/moods';

function AddMood() {
    /*
    Sad: 😞
    Frustrated: 😤
    Neutral: 😐
    Happy: 😊
    Amazing: 😃
    */
    const [mood, setMood] = useState("happy");

    async function addMood() {
        let date = new Date().toISOString().slice(0, 10)
        try {
          // Add the new friend!
          const id = await db.moods.add({
            mood,
            date
          });
    
          console.log(`Mood ${mood} successfully added. Got id ${id} - ${date}`);
        } catch (error) {
          console.log(`Failed to add ${mood}: ${error}`);
        }
      }

    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-bold dark:text-white">How did you feel today?</h2>

            <div className="flex flex-row gap-4">
                <Tooltip content="Sad" placement="bottom">
                    <Button onClick={() => setMood("sad")} outline color="light" className={"focus:ring-0 border-2 " + `${mood == "sad" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😞</span>
                    </Button>
                </Tooltip>

                <Tooltip content="Frustrated" placement="bottom">
                    <Button onClick={() => setMood("frustrated")} outline color="light" className={"focus:ring-0 border-2 " + `${mood == "frustrated" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😤</span>
                    </Button>
                </Tooltip>
                
                <Tooltip content="Neutral" placement="bottom">
                    <Button onClick={() => setMood("neutral")} outline color="light" className={"focus:ring-0 border-2 " + `${mood == "neutral" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😐</span>
                    </Button>
                </Tooltip>

                <Tooltip content="Happy" placement="bottom">
                    <Button onClick={() => setMood("happy")} outline color="light" className={"focus:ring-0 border-2 " + `${mood == "happy" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😊</span>
                    </Button>
                </Tooltip>

                <Tooltip content="Amazing!" placement="bottom">
                    <Button onClick={() => setMood("amazing")} outline color="light" className={"focus:ring-0 border-2 " + `${mood == "amazing" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😃</span>
                    </Button>
                </Tooltip>
            </div>
            <Button onClick={addMood}>Save</Button>
            <Moods />
        </div>
    )
}

export default AddMood