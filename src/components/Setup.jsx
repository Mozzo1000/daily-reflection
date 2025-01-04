import React, { useEffect, useState } from 'react'
import { TextInput, Label, Button, Drawer } from 'flowbite-react';

function Setup(props) {
  const [name, setName] = useState();
  const [showSetup, setShowSetup] = useState();

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      setShowSetup(true);
    }
  }, [])
  

  return (
    <Drawer open={showSetup} onClose={() => setShowSetup(false)} position="bottom" className='bg-blue-500 h-full'>
      <Drawer.Header />
      <Drawer.Items>
        <div className="container mx-auto text-white">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl font-bold leading-tight">Welcome!</h1>
            <div>
                <div className="mb-2 block text-center">
                    <Label className="text-white" htmlFor="name" value="What is your name?" />
                </div>
                <TextInput id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <Button onClick={() => (props.setName(name), localStorage.setItem("name", name), setShowSetup(false))}>Get started!</Button>
          </div>
        </div>
      </Drawer.Items>
    </Drawer>
  )
}

export default Setup