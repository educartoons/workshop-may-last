import {useInView, motion, useMotionValue, useSpring} from 'framer-motion'
import { useEffect, useRef } from 'react';

type NewCounter = {
  value: number;
  text: string;
}

export default function NewCounter({value, text}: NewCounter){
  const ref = useRef<HTMLParagraphElement>(null);
  const motionValue = useMotionValue(0);
  const x = useSpring(motionValue, {
    damping: 100,
    stiffness: 250,
    mass: 1,
    duration: 0.1
  });

  const motionValueOpacity = useMotionValue(0);
  const opacity = useSpring(motionValueOpacity);

  const isInView = useInView(ref, {
    once: false,
    margin: '-50px'
  });

  useEffect(()=>{
    if(isInView){
      x.set(value)
      setTimeout(()=>{
        opacity.set(1)
      }, 600)
    }else{
      x.set(0);
      opacity.set(0);
    }
  }, [isInView])

  useEffect(()=>{
    x.on("change", (latest) => {
      if(ref.current){
        ref.current.textContent = String(parseInt(latest));
      }
    })
  }, [x])

  return <div className='text-center'>
    <p ref={ref} className="text-white text-9xl" />
    <motion.p className='text-white text-2xl' style={{opacity: opacity}}>{text}</motion.p>
  </div>
}