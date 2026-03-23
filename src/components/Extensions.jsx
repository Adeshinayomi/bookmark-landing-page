import chromeLogo from '../assets/images/logo-chrome.svg'
import firefoxLogo from '../assets/images/logo-firefox.svg'
import operaLogo from '../assets/images/logo-opera.svg'
import dots from '../assets/images/bg-dots.svg'
export function Extensions(){
    return(
        <section className="mt-40 w-5/6 mx-auto grid gap-10 md:mt-20">
            <div className="grid text-center gap-5 md:w-1/2 md:mx-auto">
                <h1 className="text-2xl font-bold"> Download the extension</h1>
                <p className="text-black/50 font-medium">
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize. 
                </p>
            </div>

            <div className='grid gap-7 md:grid-cols-3'>
                <div className='w-full grid bg-white shadow-xl justify-center gap-10 py-8 rounded-lg md:px-5'>
                    <div className='grid justify-center text-center gap-2'>
                        <img src={chromeLogo} alt="chrome logo" className='justify-self-center'/>
                        <h2 className='font-bold text-lg'>Add to Chrome</h2>
                        <span className='text-black/50 font-medium'>Minimum version 62</span>
                    </div>
                    
                    <div className='grid justify-center gap-4 md:gap-6'>
                        <img src={dots} alt="dots" />
                        <button className='bg-Blue600 py-3 rounded-md text-white font-bold hover:bg-transparent hover:border hover:border-Blue600 hover:text-Blue600'>Add & Install Extension</button>
                    </div>
                </div>
                <div className='w-full grid bg-white shadow-xl justify-center gap-10 py-5 rounded-lg relative top-10 md:px-5'>
                    <div className='grid justify-center text-center gap-2'>
                        <img src={firefoxLogo} alt="firefox logo" className='justify-self-center'/>
                        <h2 className='font-bold text-lg'>Add to Firefox</h2>
                        <span className='text-black/50 font-medium'>Minimum version 55</span>
                    </div>
                    
                    <div className='grid justify-center gap-4 '>
                        <img src={dots} alt="dots" />
                        <button className='bg-Blue600 py-3 rounded-md text-white font-bold hover:bg-transparent hover:border hover:border-Blue600 hover:text-Blue600'>Add & Install Extension</button>
                    </div>
                </div> 
                <div className='w-full grid bg-white shadow-xl justify-center gap-10 py-5 rounded-lg relative top-20 md:px-5'>
                    <div className='grid justify-center text-center gap-2'>
                        <img src={operaLogo} alt="Opera logo" className='justify-self-center'/>
                        <h2 className='font-bold text-lg'>Add to Opera</h2>
                        <span className='text-black/50 font-medium'>Minimum version 46</span>
                    </div>
                    
                    <div className='grid justify-center gap-4 '>
                        <img src={dots} alt="dots" />
                        <button className='bg-Blue600 py-3 rounded-md text-white font-bold hover:bg-transparent hover:border hover:border-Blue600 hover:text-Blue600'>Add & Install Extension</button>
                    </div>
                </div>                                
            </div>
        </section>
    )
}