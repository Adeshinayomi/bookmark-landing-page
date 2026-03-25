import { useEffect, useState } from "react";
import error from'../assets/images/icon-error.svg'
export function Newsletter(){
    const[isvalid,setIsValid]=useState(true)
    const [value,setValue]=useState('')
    function submitForm(e){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        e.preventDefault()
        setIsValid(regex.test(value))   
        
    }
    useEffect(()=>{
        if(isvalid){
            setValue('')
        }else{

        }
    },[isvalid])
    function setemail(e){
        setValue(e.target.value)
    }
    return(
        <form className="mt-20 bg-Blue600" onSubmit={submitForm}>
            <div className="w-5/6 mx-auto text-center grid gap-10 py-10 text-white font-rubik">
                <div className="grid gap-2">
                    <span className="tracking-[.2rem]">35,000+ ALREADY JOINED</span>
                    <h1 className="text-2xl font-medium">Stay up-to-date with what we’re doing</h1>
                </div>
                <div className="grid gap-5 md:flex md:justify-self-center items-start">
                    <div className={`${isvalid?'':'border-2 border-Red400'} relative bg-Red400 rounded-md`}>
                        <input type="email" name="email" id="email" placeholder="Enter your email address"
                        value={value}
                        onChange={setemail}
                        className={`w-full text-black px-4 py-4 md:px-6 ${isvalid?'rounded-md':'rounded-t-md rounded-b-none'}`}/>
                        <img src={error} alt="error icon" className={`${isvalid?'hidden':'flex'} absolute right-0 top-4 px-2`}/>
                        <p className={`${isvalid?'hidden':'flex'}  bg-Red400 px-3 rounded-b-md`}>Whoops make sure its an email</p>
                    </div>

                    <button type="submit" className="bg-Red400 py-3 rounded-md font-medium text-lg md:px-6 hover:bg-white hover:border-2 hover:border-Red400 hover:text-Red400">Contact Us</button>
                </div>
            </div>               
        </form>
    )
}