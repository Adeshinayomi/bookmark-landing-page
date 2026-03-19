import heroImage from '../assets/images/illustration-hero.svg'
export function Hero(){
    return(
        <section className='h-screen mt-16 grid gap-10 justify-center items-center place-content-center'>
            <div className='relative'>
                <img src={heroImage} alt="hero image" />
                <div className='absolute top-20 -z-10 right-0 h-48 w-5/6 rounded-l-full bg-Blue600'></div>
            </div>
            
            <div className='w-5/6 mx-auto grid gap-7'>
                <h1 className='text-3xl font-bold text-center'>
                    A Simple Bookmark Manager
                </h1>
                <p className='text-center text-black/25 font-medium'>
                    A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className='flex justify-between'>
                    <button className='px-4 py-3 bg-Blue600 text-white font-medium rounded-md'>Get it on Chrome</button>
                    <button className='px-4 py-3 bg-Grey50 text-black/75 font-medium rounded-md shadow-xl'>Get it on Firefox</button>
                </div>
            </div>
        </section>
    )
}