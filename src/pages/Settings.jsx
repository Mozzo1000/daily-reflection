import React, { useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { Button, Drawer } from 'flowbite-react'
import ChangeName from '../components/ChangeName';
import {importDB, exportDB, importInto, peakImportFile} from "dexie-export-import";
import { db } from '../db';

function Settings() {
    const [openNameDrawer, setOpenNameDrawer] = useState(false);
    
    const exportDatabase =  async () => {
        const blob = await exportDB(db);
        const href = URL.createObjectURL(blob);

        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', "db.json"); //or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }

    return (
        <div className="container mx-auto max-w-2xl">
            <div className="flex flex-col gap-2">
            <h2 className="pb-4 text-3xl font-bold dark:text-white">Settings</h2>

                <Button outline color="light" onClick={() => setOpenNameDrawer(true)}>
                    Change name
                    <MdOutlineNavigateNext className="ml-2 h-5 w-5"/>
                </Button>
                <Button outline color="light" onClick={() => exportDatabase()}>
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