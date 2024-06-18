import { useMeasure } from '@uidotdev/usehooks'
import { MouseEvent, useEffect, useState } from 'react';

export default function TreeMap(){
  const [ref, {width}] = useMeasure();
  const [left, setLeft] = useState(0);
  const [display, setDisplay] = useState("none");
  const [content, setContent] = useState("");

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    setLeft(e.pageX+100)
  }

  const handleMouseEnter = () => {
    setDisplay("block");
  }

  const handleMouseLeave = () => {
    setDisplay("none");
  }
 
  const handleSetContent = (title: string) => {
    setContent(title);
  }

  return <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMove} className="relative w-[400px] h-[400px]">
    <div className="flex w-[400px] h-[400px] bg-[#32844e] items-center justify-center">
      <div onMouseEnter={()=>handleSetContent("MSFT")} className="flex h-full w-4/5 items-center justify-center">
        <p className="text-white text-2xl">MSFT</p>
      </div>
      <div onMouseEnter={()=>handleSetContent("Others")} className="flex w-1/5 h-full items-center justify-center border-l-2 border-l-black">
        <p className="text-white text-xs">Others</p>
      </div>
    </div>

    <div className="absolute bg-white w-[300px] h-[500px]" style={{top: '-50px', left: left, display: display}}>
      <div className="border-2 border-black h-[500px]">
        <h2>Information information</h2>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  </div>
}