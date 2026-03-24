import heroImage from '../assets/images/illustration-hero.svg'
export function Hero(){
    return(
        <section className='mt-[9rem]'>
            <div className='w-5/6 mx-auto grid gap-10 justify-center items-center place-content-center  md:flex lg:flex flex-row-reverse'>
                <div className='w-full'>
                    <img src={heroImage} alt="hero image" className='w-full h-full'/>
                    <div className='hidden lg:flex -z-10 absolute w-1/3 h-60 bg-Blue600 top-60 right-0 rounded-l-full'>

                    </div>
                    <div className='flex lg:hidden -z-10 absolute w-2/3 md:w-1/3 h-40  bg-Blue600 top-[30%] md:top-[22%] right-0 rounded-l-full'>

                    </div>
                </div>
                
                <div className='w-full grid gap-7 '>
                    <h1 className='text-3xl font-bold text-center md:text-left lg:text-left lg:w-2/3'>
                        A Simple Bookmark Manager
                    </h1>
                    <p className='text-center text-black/25 font-medium md:text-left lg:text-left lg:w-5/6'>
                        A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className='flex justify-between gap-4 md:w-fit'>
                        <button className='px-4 py-3 bg-Blue600 text-white font-medium rounded-md hover:bg-transparent hover:border hover:border-Blue600 hover:text-Blue600'>Get it on Chrome</button>
                        <button className='px-4 py-3 bg-Grey50 text-black/75 font-medium rounded-md shadow-xl hover:bg-transparent hover:border hover:border-black hover:text-black'>Get it on Firefox</button>
                    </div>
                </div>
            </div>    
        </section>
    )
}