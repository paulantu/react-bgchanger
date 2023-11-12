import { useState } from 'react'


function App() {
  const [color, setColor] = useState("aqua");

  return (
    <>
      <div 
      className='w-full h-screen duration-200 px-0 py-0 mx-0 my-0' 
      style={{backgroundColor: color}}
      >
        <div 
        className='fixed flex flex-wrap justify-center bottom-4 inset-x-0 px-10 py-1 rounded-full'
        >
          <div
          className='flex flex-wrap justify-center gap-2 shadow-lg bg-violet-900 px-3 py-2 rounded-full'
          >
           <button
            onClick={() => setColor("white")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"white"}}
            >
            White
            </button>

            <button
            onClick={() => setColor("black")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg text-white'
            style={{backgroundColor:"black"}}
            >
            Black
            </button>

            <button
            onClick={() => setColor("red")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"red"}}
            >
            Red
            </button>

            <button
            onClick={() => setColor("blue")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg text-white'
            style={{backgroundColor:"blue"}}
            >
            Blue
            </button>

            <button
            onClick={() => setColor("green")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"green"}}
            >
            Green
            </button>

            <button
            onClick={() => setColor("orange")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"orange"}}
            >
            Orange
            </button>

            <button
            onClick={() => setColor("olive")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"olive"}}
            >
            Olive
            </button>

            <button
            onClick={() => setColor("pink")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"pink"}}
            >
            Pink
            </button>

            <button
            onClick={() => setColor("yellow")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"yellow"}}
            >
            Yellow
            </button>

            <button
            onClick={() => setColor("grey")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"grey"}}
            >
            Grey
            </button>

            <button
            onClick={() => setColor("lime")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"lime"}}
            >
            Lime
            </button>

            <button
            onClick={() => setColor("purple")}
            className='outline-none bg-white px-4 py-1 rounded-2xl shadow-lg'
            style={{backgroundColor:"purple"}}
            >
            Purple
            </button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
