import React, { useEffect, useState } from 'react'
import { Button, Select, Label, TextInput } from "flowbite-react";

function ChangeName(props) {
    const [name, setName] = useState(localStorage.getItem("name"))

    return (
        <div>
            <div className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="goal_name" value="Your name" />
                    </div>
                    <TextInput id="goal_name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <Button onClick={() => (localStorage.setItem("name", name), props.onChange())}>Save</Button>
            </div>
        </div>
    )
}

export default ChangeName