import React, { useEffect, useState } from 'react'
import { TextInput, Label, Button, Drawer } from 'flowbite-react';

function Setup(props) {
  const [name, setName] = useState();
  const [showSetup, setShowSetup] = useState();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideEnd, setSlideEnd] = useState(2);

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      setShowSetup(true);
    }
  }, [])  

  return (
    <Drawer open={showSetup} onClose={() => setShowSetup(false)} position="bottom" className='bg-white h-full p-0'>
      <Drawer.Header className="bg-slate-200"/>
      <Drawer.Items>
        <div className=" text-black">
          <div className="flex flex-col gap-4 items-center text-center">
            
            {slideIndex === 0 &&
              <>
                <div className="w-full h-96 bg-slate-200 drop-shadow-xl pt-6 mb-6">
                  <div className='flex flex-col items-center justify-center'>
                    <img src="./assets/setup_01.svg" width={400}/>
                  </div>
                </div>
                <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Set daily goals</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Goals help you with remembering and understanding what is important to you in your daily life.</p>
              </>
            }
            {slideIndex === 1 &&
              <>
                <div className="w-full h-96 bg-slate-200 drop-shadow-xl pt-6 mb-6">
                  <div className='flex flex-col items-center justify-center'>
                    <img src="./assets/setup_02.svg" width={400}/>
                </div>
                </div>
                <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Track your mood and reflect on your day</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Get an overview on how you are performing and motivate yourself to achieve even more.</p>
              </>
            }
            {slideIndex < slideEnd &&
              <Button outline pill color="light" onClick={() => setSlideIndex(slideIndex+1)}>Next</Button>
            }
            {slideIndex === slideEnd &&
              <>
                <div className="w-full h-96 bg-slate-200 drop-shadow-xl pt-6 mb-6">
                  <div class="flex flex-col items-center">
                    <img src="./assets/setup_03.png" />
                  </div>
                  <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Daily reflections</h1>
                  <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">An app to help you feel good and achieve what you want to do in life.</p>
                </div>
                <div>
                    <div className="mb-4 block text-center ">
                        <Label className="text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white" htmlFor="name" value="What is your name?" />
                    </div>
                    <TextInput id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <Button onClick={() => (props.setName(name), localStorage.setItem("name", name), setShowSetup(false))}>Get started!</Button>
              </>
              }
          </div>
        </div>
      </Drawer.Items>
    </Drawer>
  )
}

export default Setup