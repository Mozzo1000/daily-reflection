import React from 'react'
import { Button, Tooltip } from 'flowbite-react';

export function TextToEmoji(text) {
    if (text === "sad") {
        return[ "😞", "Sad", "#4370F2"];
    }else if (text === "frustrated") {
        return ["😤", "Frustrated", "#FF763C"];
    }else if (text === "neutral") {
        return ["😐", "Neutral", "#6DBAFF"];
    }else if (text === "happy") {
        return ["😊", "Happy", "#FEA125"];
    }else if (text === "amazing") {
        return ["😃", "Amazing!", "#FC829F"];
    }
}

function SelectMood(props) {
    /*
    Sad: 😞
    Frustrated: 😤
    Neutral: 😐
    Happy: 😊
    Amazing: 😃
    */

    

    return (
        <div className="flex flex-col items-center gap-10">
            <h2 className="text-4xl font-bold dark:text-white">How did you feel today?</h2>

            <h3 className="text-9xl">{TextToEmoji(props.mood)[0]}</h3>
            <h4 className="text-2xl font-bold">{TextToEmoji(props.mood)[1]}</h4>

            <div className="flex flex-row gap-4">
                <Tooltip content="Sad" placement="bottom">
                    <Button onClick={() => props.setMood("sad")} outline color="light" className={"focus:ring-0 border-2 " + `${props.mood == "sad" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😞</span>
                    </Button>
                </Tooltip>

                <Tooltip content="Frustrated" placement="bottom">
                    <Button onClick={() => props.setMood("frustrated")} outline color="light" className={"focus:ring-0 border-2 " + `${props.mood == "frustrated" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😤</span>
                    </Button>
                </Tooltip>
                
                <Tooltip content="Neutral" placement="bottom">
                    <Button onClick={() => props.setMood("neutral")} outline color="light" className={"focus:ring-0 border-2 " + `${props.mood == "neutral" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😐</span>
                    </Button>
                </Tooltip>

                <Tooltip content="Happy" placement="bottom">
                    <Button onClick={() => props.setMood("happy")} outline color="light" className={"focus:ring-0 border-2 " + `${props.mood == "happy" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😊</span>
                    </Button>
                </Tooltip>

                <Tooltip content="Amazing!" placement="bottom">
                    <Button onClick={() => props.setMood("amazing")} outline color="light" className={"focus:ring-0 border-2 " + `${props.mood == "amazing" ? 'border-green-500' : ''}`}>
                        <span className="text-3xl">😃</span>
                    </Button>
                </Tooltip>
            </div>
            {/*<Moods />*/}
        </div>
    )
}

export default SelectMood
