import { useState } from "react"
import arrow from '../assets/images/icon-arrow.svg'
export function Question({question,answer}){
    const [isopen,setIsOpen]=useState(false)
    return(
        <div className='grid gap-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-md font-bold hover:text-Red400'>{question}</h1>
                <button className={`${isopen?'rotate-180':''}`} onClick={()=>{isopen?setIsOpen(false):setIsOpen(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" className={`${isopen?'stroke-Red400 ':'stroke-Blue600'}`} stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                </button>
            </div>
            <p className={`text-black/50 ${isopen?'':'hidden'}`}>
               {answer}
            </p>
            <hr />
        </div>      
    )
}