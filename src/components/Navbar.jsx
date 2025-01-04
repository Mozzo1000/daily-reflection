import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { GoGoal } from "react-icons/go";
import { LuNotebookText } from "react-icons/lu";
import { GoGear } from "react-icons/go";

function Navbar() {
    let location = useLocation();
    
    return (
        <>
        {/* Mobile bottom navigation bar */}
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                    <Link to="/" className="inline-flex flex-col pt-2">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <LuNotebookText className={`w-5 h-5 mb-2 group-hover:text-[#0891B2] ${location.pathname == "/" ? "text-[#0891B2]" : "text-gray-500"}`}/>
                        <span className={`text-sm dark:text-gray-400 group-hover:text-[#0891B2] dark:group-hover:text-blue-500 ${location.pathname == "/" ? "text-[#0891B2]" : "text-gray-500"}`}>Reflection</span>
                    </button>
                    </Link>
                    

                    <Link to="/goals" className="inline-flex flex-col pt-2">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <GoGoal className={`w-5 h-5 mb-2 group-hover:text-[#0891B2] ${location.pathname == "/goals" ? "text-[#0891B2]" : "text-gray-500"}`}/>
                        <span className={`text-sm dark:text-gray-400 group-hover:text-[#0891B2] dark:group-hover:text-blue-500 ${location.pathname == "/goals" ? "text-[#0891B2]" : "text-gray-500"}`}>Goals</span>
                    </button>
                    </Link>
                    <Link to="/settings" className="inline-flex flex-col pt-2">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <GoGear className={`w-5 h-5 mb-2 group-hover:text-[#0891B2] ${location.pathname == "/settings" ? "text-[#0891B2]" : "text-gray-500"}`}/>
                        <span className={`text-sm dark:text-gray-400 group-hover:text-[#0891B2] dark:group-hover:text-blue-500 ${location.pathname == "/settings" ? "text-[#0891B2]" : "text-gray-500"}`}>Settings</span>
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar