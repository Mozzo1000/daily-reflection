import React, { useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { Button, Drawer } from 'flowbite-react'
import ChangeName from '../components/ChangeName';

function Settings() {
    const [openNameDrawer, setOpenNameDrawer] = useState(false);
        
    return (
        <div className="container mx-auto max-w-2xl">
            <div className="flex flex-col gap-2">
            <h2 className="pb-4 text-3xl font-bold dark:text-white">Settings</h2>

                <Button outline color="light" onClick={() => setOpenNameDrawer(true)}>
                    Change name
                    <MdOutlineNavigateNext className="ml-2 h-5 w-5"/>
                </Button>
                <Button outline color="light">
                    Export/import data
                    <MdOutlineNavigateNext className="ml-2 h-5 w-5"/>
                </Button>
            </div>
            <Drawer open={openNameDrawer} onClose={() => setOpenNameDrawer(false)} position="bottom" className="h-4/6">
                <Drawer.Header title="Change name"/>
                <Drawer.Items>
                    <div className="container mx-auto">
                        <ChangeName onChange={() => setOpenNameDrawer(false)}/>
                    </div>
                </Drawer.Items>
            </Drawer>
        </div>
    )
}

export default Settings